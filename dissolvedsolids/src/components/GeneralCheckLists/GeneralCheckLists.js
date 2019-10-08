import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrewingEquiptment from "./BrewingEquiptment/BrewingEquiptment";
import BrewPrep from "./BrewPrep/BrewPrep";
import BrewSteps from "./BrewSteps/BrewSteps";
import CleanUp from "./CleanUp/CleanUp";
import BottlingKegging from "./BottlingKegging/BottlingKegging";

class GeneralCheckLists extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={3}>
            <h3 className="text-center">Check Lists!</h3>
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
                <Link to="/GeneralCheckLists/BrewingEquiptment">
                  <p className="text-center">Brewing Equiptment</p>
                </Link>
                <Link to="/GeneralCheckLists/BrewPrep">
                  <p className="text-center">Brew Day Prep</p>
                </Link>
                <Link to="/GeneralCheckLists/BrewSteps">
                  <p className="text-center">Brew Steps</p>
                </Link>
                <Link to="/GeneralCheckLists/CleanUp">
                  <p className="text-center">Clean Up</p>
                </Link>
                <Link to="/GeneralCheckLists/BrewSteps">
                  <p className="text-center">Bottling or Kegging</p>
                </Link>
              </Col>
              <Col>
                <Route
                  exact
                  path="/GeneralCheckLists/BrewingEquiptment"
                  component={BrewingEquiptment}
                />
                <Route
                  exact
                  path="/GeneralCheckLists/BrewPrep"
                  component={BrewPrep}
                />
                <Route
                  exact
                  path="/GeneralCheckLists/BrewSteps"
                  component={BrewSteps}
                />
                <Route
                  exact
                  path="/GeneralCheckLists/CleanUp"
                  component={CleanUp}
                />
                <Route
                  exact
                  path="/GeneralCheckLists/BottlingKegging"
                  component={BottlingKegging}
                />
              </Col>
            </Row>
          </Switch>
        </Router>
        <Link to="/Home">
          <p className="text-center">Home</p>
        </Link>
      </div>
    );
  }
}

export default GeneralCheckLists;
