import React, {useEffect, useState} from 'react';
import {collection, getDocs} from "@firebase/firestore";
import {db} from "../../services/firebase-config";
import Media from "./Media";
import "./MediaList.css";
import {useSelector} from "react-redux";
import {State} from "../../redux";

const MediaList = () => {
    // @ts-ignore
    const medias: { id: string }[] = useSelector((state: State) => state.medias);

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
