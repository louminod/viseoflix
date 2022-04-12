import "./App.css";

import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../sidenav/SideNav";
import Home from "../home/Home";

function App() {
    return (
        <div className="App">
            <Row>
                <Col>
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
