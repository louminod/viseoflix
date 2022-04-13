import React, {useEffect, useState} from 'react';
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../../services/firebase-config";
import Media from "./Media";
import "./MediaList.css";
import {MediaType} from "../../models/enums/MediaType";

const MediaList = (props) => {
    const [medias, setMedias] = useState([]);
    const dbCollection = collection(db, "movies");

    useEffect(() => {
        const getMedias = async () => {
            const data = await getDocs(dbCollection);
            setMedias(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        };

        getMedias();
    }, []);

    return (
        <div className="MediaList">
            {
                medias.map(movie => {
                    return <Media key={movie.id} media={movie}/>;
                })
            }
        </div>
    );
};

export default MediaList;
