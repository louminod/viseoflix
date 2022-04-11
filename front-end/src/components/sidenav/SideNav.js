import React from "react";
import {Nav} from "react-bootstrap";
import './SideNav.css'
import logo from "../app/logo.png";

const SideBar = props => {
    return (
        <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
             activeKey="/home"
             onSelect={selectedKey => alert(`selected ${selectedKey}`)}
        >
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="sidebar-sticky"/>
            <Nav.Item  className="sidebar-item">
                <Nav.Link className="sidebar-link" href="/home">Nouveautés</Nav.Link>
            </Nav.Item>
            <Nav.Item  className="sidebar-item">
                <Nav.Link className="sidebar-link" eventKey="link-1">Films</Nav.Link>
            </Nav.Item>
            <Nav.Item  className="sidebar-item">
                <Nav.Link className="sidebar-link" eventKey="link-2">Séries</Nav.Link>
            </Nav.Item>
            <Nav.Item  className="sidebar-item">
                <Nav.Link className="sidebar-link" eventKey="link-2">Documentaires</Nav.Link>
            </Nav.Item>
        </Nav>

    );
};
export default SideBar;