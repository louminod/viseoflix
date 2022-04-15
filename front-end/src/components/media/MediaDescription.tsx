import React, {useState} from 'react';
import "./MediaDescription.css";
import {Button, Col, Modal, Row} from "react-bootstrap";
import {FaPlay} from "react-icons/fa";
import axios from "axios"
import ReactPlayer from "react-player";

const MediaDescription = (props) => {
    const media = props.media;

    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [link, setLink] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = async () => {
        setLoading(true);
        const result = await axios.get(`https://imdb-api.com/en/API/SearchMovie/k_659xxdbs/${media.title}%${media.year}`);
        const id = result.data.results[0].id;
        const trailer = await axios.get(` https://imdb-api.com/en/API/Trailer/k_659xxdbs/${id}`);
        setLink(trailer.data.linkEmbed);
        handleShow();
        setLoading(false);
    }

    return (
        <>
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="player">
                    <iframe src={link}/>
                </Modal.Body>
            </Modal>

            <div className="container MediaDescription">
                <Row>
                    <Col style={{maxWidth: "fit-content"}}>
                        <img src={media.poster ?? ""} alt={media.title}/>
                    </Col>
                    <Col><h1>{media.title}</h1>
                        <h4>{media.year}</h4>
                        <h6>🚩 {media.language}</h6>
                        <h6>⭐ {media.rating} / 10 ({media.votes} reviews)</h6>
                        <p>✏️ {media.genre}</p>
                        <p>⌛ {media.runtime}</p>
                        <p>{media.plot}</p>
                        {
                            loading ? <Button variant="danger">launching...</Button> :
                                <Button variant="danger" onClick={handleClick}><FaPlay/> WATCH</Button>
                        }

                    </Col>
                </Row>
            </div>
        </>
    );
};

export default MediaDescription;
