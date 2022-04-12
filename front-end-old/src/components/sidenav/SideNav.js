import React from "react";
import {Nav} from "react-bootstrap";
import './SideNav.css'
import logo from "../app/logo.png";

const SideNav = props => {
    return (
        <Nav className="d-md-block d-block sideNav"
             activeKey="/home"
             onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <img src={logo} className="logo" alt="logo"/>

            <Nav.Item className="sideNav-item">
                <Nav.Link className="sideNav-link" href="/home">A la une</Nav.Link>
            </Nav.Item>
            <Nav.Item className="sideNav-item">
                <Nav.Link className="sideNav-link" eventKey="link-1">Films</Nav.Link>
            </Nav.Item>
            <Nav.Item className="sideNav-item">
                <Nav.Link className="sideNav-link" eventKey="link-2">Séries</Nav.Link>
            </Nav.Item>
        </Nav>

    );
};
export default SideNav;