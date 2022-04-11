import "./App.css";
import {Col, Container, Row} from "react-bootstrap";
import Sidebar from "../sidenav/SideNav";

function App() {
    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Sidebar/>
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <header className="App-header">

                        </header>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
