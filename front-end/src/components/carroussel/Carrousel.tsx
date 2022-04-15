import React from 'react';
import "./Carrousel.css";
import {useDispatch, useSelector} from "react-redux";
import {actionCreators, State} from "../../redux";
import {Carousel} from "react-bootstrap";
import Media from "../media/Media";
import {bindActionCreators} from "redux";
import {HomeType} from "../../redux/action-types";

const Carrousel = () => {
    const medias = useSelector((state: State) => state.medias);
    const up = medias.map(media => {
        if (media.up) {
            return media;
        }
    });

    const dispatch = useDispatch();
    const {changeHome} = bindActionCreators(actionCreators, dispatch);


    return (
        <Carousel className="Carrousel" interval={2000}>
            {
                up.map(media => {
                    if (media !== undefined) {
                        return <Carousel.Item key={media.id} className="Carrousel-Item" onClick={() => {
                            changeHome(HomeType.MEDIA, media)
                        }}>
                            <img
                                className="d-block w-100"
                                src={media.poster ?? ""}
                                alt={media.title}
                            />
                            <Carousel.Caption className="Carrousel-Caption">
                                <h3>{media.title}</h3>
                                <p>{media.plot}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    }
                })
            }

        </Carousel>
    );
};

export default Carrousel;
