import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row} from "react-bootstrap";
import SideNav from "../sidenav/SideNav";
import Home from "../home/Home";
import {useSelector} from "react-redux";
import {State} from "../../redux";
import MediaDescription from "../media/MediaDescription";

function App() {
    const home = useSelector((state: State) => state.home);
    return (
        <div className="App">
            <Row>
                <Col style={{maxWidth: "300px"}}>
                    <SideNav/>
                </Col>
                <Col>
                    {
                        home === 0 ? <Home/> : <MediaDescription media={home}/>
                    }
                </Col>
            </Row>
        </div>
    );
}

export default App;
