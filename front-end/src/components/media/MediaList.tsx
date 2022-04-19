import React from 'react';
import Media from "./Media";
import "./MediaList.css";
import {useSelector} from "react-redux";
import {State} from "../../redux";

const MediaList = () => {
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
