import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import SideNav from "../sidenav/SideNav";
import Home from "../home/Home";

function App() {
    return (
        <div className="App">
            <Row>
                <Col style={{maxWidth: "300px"}}>
                    <SideNav/>
                </Col>
                <Col>
                    <Home/>
                </Col>
            </Row>
        </div>
    );
}

export default App;
