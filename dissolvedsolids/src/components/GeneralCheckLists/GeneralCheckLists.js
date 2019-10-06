import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrewingMaterials from "./BrewingMaterials/BrewingMaterials";

class GeneralCheckLists extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={3}>
            <h3>Check Lists!</h3>
          </Col>
          <Col>
            <p>
              These are general checklists. Not specific to any brew,
              <br />
              the intention is to prep for any brew and the brewer will fill in
              the rest.
            </p>
          </Col>
        </Row>
        <Router>
          <Switch>
            <Row>
              <Col xs={3}>
                <Link to="/GeneralCheckLists/BrewingMaterials">
                  <p>BrewingMaterials</p>
                </Link>
              </Col>
              <Col>
                <Route
                  exact
                  path="/GeneralCheckLists/BrewingMaterials"
                  component={BrewingMaterials}
                />
              </Col>
            </Row>
          </Switch>
        </Router>
        <Link to="/Home">Home</Link>
      </div>
    );
  }
}

export default GeneralCheckLists;
