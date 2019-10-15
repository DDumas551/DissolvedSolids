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
    linkText: "Continue"
  };
  render() {
    const handleChange = () => {
      this.setState({
        ofAge: true
      });
    };
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
              <hr />
              <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup-sizing-sm">
                    Be honest :-P
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inputAge"
                  name="inputAge"
                  // min={moment()}
                  type="date"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </InputGroup>
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
