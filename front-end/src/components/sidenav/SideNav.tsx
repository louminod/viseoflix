import React, {useEffect} from 'react';
import {Nav} from "react-bootstrap";
import "./SideNav.css";
import logo from "./logo.png";
import {useDispatch} from "react-redux";
import {actionCreators} from "../../redux"
import {bindActionCreators} from "redux";
import {HomeType, MediaType} from "../../redux/action-types";

const SideNav = () => {
    const dispatch = useDispatch();
    const {listMedia, changeHome} = bindActionCreators(actionCreators, dispatch);

    const handleClick = (mediaType: MediaType) => {
        changeHome(HomeType.LANDING);
        listMedia(mediaType);
    }


    return (
        <Nav className="d-block sideNav">
            <img src={logo} className="logo" alt="logo"/>
            <Nav.Item className="sideNav-item">
                <Nav.Link onClick={() => handleClick(MediaType.ALL)} className="sideNav-link">Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item className="sideNav-item">
                <Nav.Link onClick={() => handleClick(MediaType.MOVIES)} className="sideNav-link">Films</Nav.Link>
            </Nav.Item>
            <Nav.Item className="sideNav-item">
                <Nav.Link onClick={() => handleClick(MediaType.SERIES)} className="sideNav-link">Séries</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default SideNav;
