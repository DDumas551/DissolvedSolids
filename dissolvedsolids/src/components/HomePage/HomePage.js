import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import LinkSpanAC from "./LinkSpanAC/LinkSpanAC";
import { Link } from "react-router-dom";
import "../HomePage/HomePage.css";

class HomePage extends Component {
  state = {
    ofAge: false,
    to: "/Home",
    linkText: "Let's Go!",
    inputAge: "2019-10-18"
  };
  render() {
    var moment = require("moment");
    const { ofAge, to, linkText, inputAge } = this.state;

    const handleAge = e => {
      this.setState({
        inputAge: e.target.value
      });
    };

    const checkAge = age => {
      const thisYear = parseInt(moment().format("YYYY"));
      const monthDay = moment().format("MM-DD");
      moment(age).isSameOrBefore(`${thisYear - 21}-${monthDay}'`)
        ? this.setState({ ofAge: true })
        : alert("You're not 21 yet!");
    };

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
            <p className="text">But before you can continue:</p>
          </Col>
        </Row>
        <center className="continueRow">
          <LinkSpanAC ofAge={ofAge} to={to} linktext={linkText} />
        </center>
        <center>
          <Card className="text-center cardShadow" style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title>Verify Your Age</Card.Title>
              <hr className="vAgeHR" />
              <InputGroup size="sm" className="mb-3">
                <FormControl
                  id="inputAge"
                  name="inputAge"
                  value={inputAge}
                  type="date"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={handleAge}
                />
              </InputGroup>
              <Row className="justify-content-right">
                <Col xs={{ span: 6, offset: 6 }}>
                  <button onClick={() => checkAge(inputAge)} type="button">
                    Verify age
                  </button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </center>
      </div>
    );
  }
}

export default HomePage;
