import React from 'react';
import "./CustomCarousel.css";
import {useDispatch, useSelector} from "react-redux";
import {actionCreators, State} from "../../redux";
import {Carousel} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {HomeType} from "../../redux/action-types";

const CustomCarousel = () => {
    const medias = useSelector((state: State) => state.medias);
    const up = medias.map(media => {
        if (media.up) {
            return media;
        }
    });

    const dispatch = useDispatch();
    const {changeHome} = bindActionCreators(actionCreators, dispatch);

    return (
        <Carousel interval={4000}>
            {
                up.map(media => {
                    if (media !== undefined) {
                        return <Carousel.Item key={media.id} className="CustomCarousel-Item" onClick={() => {
                            changeHome(HomeType.MEDIA, media)
                        }}>
                            <img
                                className="d-block CustomCarousel-Image"
                                src={media.poster ?? ""}
                                alt={media.title}
                            />
                            <Carousel.Caption className="CustomCarousel-Caption">
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

export default CustomCarousel;
