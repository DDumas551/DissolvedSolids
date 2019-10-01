import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class Links extends Component {
  render() {
    return (
      <div>
        <Row className="cardRow">
          <Col>
            <Link to="/AboutUs">
              <p className="cards about">About Us</p>
            </Link>
            <Link to="/PublicRecipes">
              <p className="cards">Public recipes</p>
            </Link>
            <Link to="/LoginPage">
              <p className="cards">Log in</p>
            </Link>
            <Link to="./SignUp">
              <p className="cards">Sign up</p>
            </Link>
            <Link to="/Calcs">
              <p className="cards">Brewing Calculators</p>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Links;
