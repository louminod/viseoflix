import {HomeType, MediaType} from "../action-types";
import {Dispatch} from "redux";
import {Action} from "../actions";
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../../services/firebase-config";

export const changeHome = (homeType: HomeType, media?: object) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: homeType,
            payload: media,
        });
    };
};

export const listMedia = (mediaType: MediaType) => {
    return async (dispatch: Dispatch<Action>) => {
        let medias;

        if (mediaType === MediaType.ALL) {
            medias = (await fetchMedias(MediaType.MOVIES)).concat(await fetchMedias(MediaType.SERIES));
        } else {
            medias = await fetchMedias(mediaType);
        }

        dispatch({
            type: mediaType,
            payload: medias,
        });
    };
};

const fetchMedias = async (collectionName) => {
    const dbCollection = collection(db, collectionName);
    const data = await getDocs(dbCollection);
    return data.docs.map(doc => ({...doc.data(), id: doc.id}));
}