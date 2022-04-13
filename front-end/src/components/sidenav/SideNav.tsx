import React, {useState} from 'react';
import {Nav} from "react-bootstrap";
import "./SideNav.css";
import logo from "./logo.png";
import {MediaType} from "../../models/enums/MediaType";

const SideNav = () => {
    return (
        <Nav className="d-block sideNav">
            <img src={logo} className="logo" alt="logo"/>
            <Nav.Item className="sideNav-item">
                <Nav.Link className="sideNav-link">A la
                    une</Nav.Link>
            </Nav.Item>
            <Nav.Item className="sideNav-item">
                <Nav.Link className="sideNav-link">Films</Nav.Link>
            </Nav.Item>
            <Nav.Item className="sideNav-item">
                <Nav.Link className="sideNav-link">Séries</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default SideNav;
