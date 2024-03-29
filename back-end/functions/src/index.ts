require("dotenv").config();

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");

admin.initializeApp();

const config = {
    headers: {Authorization: `Bearer ${process.env.STRAPI_KEY}`},
};

exports.addElement = functions.https.onRequest(async (req: { body: any; }, res: { send: (arg0: unknown) => void; json: (arg0: { status: any; }) => void; }) => {
    const body = req.body;

    const title = body.title;
    const year = body.year;
    const type = body.type;

    try {
        let response = await axios.get(
            `https://www.omdbapi.com/?t=${title}&y=${year}&type=${type}&apikey=${process.env.API_KEY}`
        );
        let data = response.data;

        if (data.Response !== "True") {
            res.send(data.Error);
            return;
        }

        let strapiType;

        switch (type) {
            case "movie":
                strapiType = "movies";
                break;
            case "series":
                strapiType = "series";
                break;
        }

        response = await axios.post(
            `http://localhost:1337/api/${strapiType}`,
            {
                data: formatJSON(data),
            },
            config
        );

        res.json({status: response.status === 200 ? "success" : response.status});
    } catch (error) {
        res.send(error);
    }
});

exports.receiveHook = functions.https.onRequest(async (req: { body: any; }, res: { sendStatus: (arg0: number) => void; }) => {
    const body = req.body;

    const event = body.event.split(".")[1];
    const collection = body.model + "s";
    let snapshot;

    switch (event) {
        case "create":
            await admin.firestore().collection(collection).add(body.entry);
            break;
        case "update":
            snapshot = await admin
                .firestore()
                .collection(collection)
                .where("id", "==", body.entry.id)
                .get();
            if (snapshot.empty) {
                res.sendStatus(401);
                return;
            }

            for (const doc of snapshot) {
                await admin
                    .firestore()
                    .collection(collection)
                    .doc(doc.id)
                    .update(body.entry);
            }
            break;
        case "delete":
            snapshot = await admin
                .firestore()
                .collection(collection)
                .where("id", "==", body.entry.id)
                .get();
            if (snapshot.empty) {
                res.sendStatus(401);
                return;
            }

            for (const doc of snapshot) {
                await admin.firestore().collection(collection).doc(doc.id).delete();
            }
            break;
    }

    res.sendStatus(200);
});

// @ts-ignore
function formatJSON(data) {
    data.rating = data.imdbRating;
    data.votes = data.imdbVotes.replaceAll(",", ".");

    const result = {};

    let key,
        keys = Object.keys(data);
    let n = keys.length;

    while (n--) {
        key = keys[n];
        // @ts-ignore
        result[unCapitalize(key)] = data[key];
    }

    return result;
}

function unCapitalize(element: string) {
    return `${element.substring(0, 1).toLowerCase()}${element.substring(1)}`;
}
