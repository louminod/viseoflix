"use strict";

require("dotenv").config();

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require("axios");
const { json } = require("body-parser");

admin.initializeApp();

const config = {
  headers: { Authorization: `Bearer ${process.env.STRAPI_KEY}` },
};

exports.addElement = functions.https.onRequest(async (req, res) => {
  const body = req.body;

  const title = body.title;
  const year = body.year;
  const type = body.type;

  try {
    let response = await axios.get(
      `http://www.omdbapi.com/?t=${title}&y=${year}&type=${type}&apikey=${process.env.API_KEY}`
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

    res.json({ status: response.status === 200 ? "success" : response.status });
  } catch (error) {
    res.send(error);
  }
});

exports.receiveHook = functions.https.onRequest(async (req, res) => {
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

      snapshot.forEach(async (doc) => {
        await admin
          .firestore()
          .collection(collection)
          .doc(doc.id)
          .update(body.entry);
      });
      break;
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

      snapshot.forEach(async (doc) => {
        await admin.firestore().collection(collection).doc(doc.id).delete();
      });
      break;
  }

  res.sendStatus(200);
});

function formatJSON(data) {
  data.rating = data.imdbRating;
  data.votes = data.imdbVotes.replaceAll(",", ".");

  var result = {};

  var key,
    keys = Object.keys(data);
  var n = keys.length;

  while (n--) {
    key = keys[n];
    result[unCapitalize(key)] = data[key];
  }

  return result;
}

function unCapitalize(element) {
  return `${element.substring(0, 1).toLowerCase()}${element.substring(1)}`;
}
