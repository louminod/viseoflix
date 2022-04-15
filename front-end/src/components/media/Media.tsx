import React from 'react';
import "./Media.css";
import {Card} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux"
import {HomeType} from "../../redux/action-types";

const Media = (props) => {
    const media = props.media;
    const dispatch = useDispatch();
    const {changeHome} = bindActionCreators(actionCreators, dispatch);

    return (
        <Card className="Media shadow" onClick={() => {
            changeHome(HomeType.MEDIA, media)
        }}>
            <Card.Img variant="top" src={media.poster}/>
            <Card.Body>
                <Card.Title>{media.title}</Card.Title>
                <Card.Text>{media.plot}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Media;
