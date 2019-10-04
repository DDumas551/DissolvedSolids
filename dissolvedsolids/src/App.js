import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Calcs from "./components/Calcs/Calcs";
import Home from "./components/Home/Home";

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
          <p className="tagline">Brew Easy</p>
          <hr />
        </Col>
      </Row>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Calcs" component={Calcs} />
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
