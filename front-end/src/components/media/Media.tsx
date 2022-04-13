import React from 'react';
import "./Media.css";
import {Button, Card} from "react-bootstrap";

const Media = (props) => {
    const media = props.media;
    return (
        <Card className="Media shadow">
            <Card.Img variant="top" src={media.poster}/>
            <Card.Body>
                <Card.Title>{media.title}</Card.Title>
                <Card.Text>{media.plot}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Media;
