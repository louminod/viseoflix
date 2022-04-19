import React from 'react';
import "./Home.css";
import CustomCarousel from "../carousel/CustomCarousel";
import MediaList from "../media/MediaList";

const Home = () => {
    return (
        <div className="Home">
            <CustomCarousel/>
            <MediaList/>
        </div>
    );
};

export default Home;
