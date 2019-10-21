import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Calcs from "./components/Calcs/Calcs";
import Home from "./components/Home/Home";
import GeneralCheckLists from "./components/GeneralCheckLists/GeneralCheckLists";

function App() {
  var moment = require("moment");
  return (
    <div className="App">
      <div className="homePage">
        <Row>
          <Col>
            <h1 className="dSLogo">Dissolved Solids</h1>
          </Col>
          <Col>
            <h4 className="date text-right">{moment().format("Do MMM")}</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="tagline">Brew Easy</p>
            <hr />
          </Col>
        </Row>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Calcs" component={Calcs} />
            <Route
              exact
              path="/GeneralCheckLists"
              component={GeneralCheckLists}
            />
          </Switch>
        </Router>
      </div>
      <Row className="copyright">
        <Col>
          <footer>
            <center>Copyright {moment().format("YYYY")}©</center>
          </footer>
        </Col>
      </Row>
    </div>
  );
}

export default App;
