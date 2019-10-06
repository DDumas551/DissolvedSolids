import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "../HomePage/HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <p className="HPText1 text">Welcome to Dissolved Solids!</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="HPText2 text">
              We're here to help organize your Home Brew recipes.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/Home">
              <p className="text">Continue</p>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
