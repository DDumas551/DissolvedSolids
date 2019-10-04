import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h1>The Problem:</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              We brew at home. We brew with friends.
              <br />
              During these brews, we have fun and goof around.
              <br />
              Maybe we're enjoying one of our last brews during this brew.
              <br />
              Maybe we forgot a step. Oops.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>The Solution:</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              Dissolved Solids is a way to digitize your recipes and keep track
              of the brewing process.
              <br />
              No more missing steps.
              <br />
              No more trying to read your own writing.
              <br />
              <br />
              Sign up today, build your first recipe and Brew Easy.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AboutUs;
