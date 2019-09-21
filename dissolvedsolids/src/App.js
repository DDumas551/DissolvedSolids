import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Row>
        <Col>
          <Navbar bg="link" expand="lg">
            <Navbar.Brand href="#home" className="dSLogo">
              Dissolved Solids
            </Navbar.Brand>
          </Navbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/LoginPage" component={LoginPage} />
        </Switch>
      </Router>

      <Row className="copyright">
        <Col>
          <footer>
            <center>Copyright {new Date().getFullYear()}©</center>
          </footer>
        </Col>
      </Row>
    </div>
  );
}

export default App;
