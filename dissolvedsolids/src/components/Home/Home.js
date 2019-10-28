import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Calcs from "../Calcs/Calcs";
import AboutUs from "../AboutUs/AboutUs";
import PublicRecipies from "../PublicRecipes/PublicRecipes";
import NewToBrewing from "../NewToBrewing/NewToBrewing";
import SignUp from "../SignUp/SignUp";
import LoginPage from "../LoginPage/LoginPage";
import GeneralCheckLists from "../GeneralCheckLists/GeneralCheckLists";

class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/Calcs" component={Calcs} />
            <Route
              exact
              path="/GeneralCheckLists"
              component={GeneralCheckLists}
            />
            <div style={{ marginLeft: "2%" }}>
              <Row>
                <div>
                  <Col>
                    <Link to="/Home/AboutUs">
                      <p className="text linkStyle">About Us</p>
                    </Link>
                    <Link to="/Home/NewToBrewing">
                      <p className="text linkStyle">New to Brewing?</p>
                    </Link>
                    <Link to="/Home/PublicRecipies">
                      <p className="text linkStyle">Public Recipies</p>
                    </Link>
                    <Link to="/Calcs">
                      <p className="text linkStyle">Calculators</p>
                    </Link>
                    <Link to="/GeneralCheckLists">
                      <p className="text linkStyle">General Check Lists</p>
                    </Link>
                    <Link to="/Home/SignUp">
                      <p className="text linkStyle">Sign Up</p>
                    </Link>
                    <Link to="/Home/Login">
                      <p className="text linkStyle">Log In</p>
                    </Link>
                  </Col>
                </div>
                <Col>
                  <Route exact path="/Home/AboutUs" component={AboutUs} />
                  <Route
                    exact
                    path="/Home/NewToBrewing"
                    component={NewToBrewing}
                  />
                  <Route
                    exact
                    path="/Home/PublicRecipies"
                    component={PublicRecipies}
                  />
                  <Route exact path="/Home/SignUp" component={SignUp} />
                  <Route exact path="/Home/Login" component={LoginPage} />
                </Col>
              </Row>
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;
