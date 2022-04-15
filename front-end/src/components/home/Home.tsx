import React from 'react';
import "./Home.css";
import Carrousel from "../carroussel/Carrousel";
import MediaList from "../media/MediaList";

const Home = () => {
    return (
        <div className="Home">
            <Carrousel/>
            <MediaList/>
        </div>
    );
};

export default Home;
