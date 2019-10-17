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
    linkText: "continue",
    inputAge: "10/15/2019"
  };
  render() {
    var moment = require("moment");
    const todaysDate = moment().format("L");
    const handleChange = () => {
      this.setState({
        ofAge: true
      });
    };
    const handleAge = e => {
      this.setState({
        inputAge: e.target.value
      });
    };
    console.log(todaysDate);
    const z = this.state;
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
            <p className="text">
              But before you can
              <LinkSpanAC ofAge={z.ofAge} to={z.to} linktext={z.linkText} />
            </p>
          </Col>
        </Row>
        <center>
          <Card className="text-center" style={{ width: "22rem" }}>
            <Card.Body>
              <Card.Title>Verify Your Age</Card.Title>
              <hr className="vAgeHR" />
              <InputGroup size="sm" className="mb-3">
                <FormControl
                  id="inputAge"
                  name="inputAge"
                  max={moment().format("L")}
                  value={this.state.inputAge}
                  type="date"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  onChange={handleChange}
                />
              </InputGroup>
              <Row className="justify-content-right">
                <Col xs={{ span: 6, offset: 6 }}>
                  <button type="button">Verify age</button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </center>
        {/* <Row>
          <Col>
            <LinkSpanAC ofAge={z.ofAge} to={z.to} linktext={z.linkText} />
          </Col>
        </Row> */}
      </div>
    );
  }
}
// render () {
//   return (
//     <form className=”demoForm”>
//       <h2>Sign up</h2>
//       <div className=”form-group”>
//         <label htmlFor=”email”>Email address</label>
//         <input type=”email” className=”form-control”
//           name=”email” />
//       </div>
//       <div className=”form-group”>
//         <label htmlFor=”password”>Password</label>
//         <input type=”password” className=”form-control”
//           name=”password” />
//       </div>
//       <button type=”submit” className=”btn btn-primary”>
//          Sign up
//       </button>
//     </form>
//   )
// }
// }

export default HomePage;
