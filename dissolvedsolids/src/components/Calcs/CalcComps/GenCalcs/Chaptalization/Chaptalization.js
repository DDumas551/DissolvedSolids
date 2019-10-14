import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class Chaptalization extends Component {
  state = {
    currentBrix: 5,
    desiredBrix: 10,
    totalVolume: 5
  };
  render() {
    const handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    return (
      <div>
        <h3>Chaptalization</h3>
        <Card style={{ width: "21rem" }}>
          <Card.Body>
            <Row>
              <Col>
                <p>Current Brix</p>
              </Col>
              <Col>
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    id="currentBrix"
                    type="number"
                    name="currentBrix"
                    min="0"
                    max="100"
                    step="0.1"
                    value={this.state.currentBrix}
                    onChange={handleChange}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Desired Brix</p>
              </Col>
              <Col>
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    id="desiredBrix"
                    type="number"
                    name="desiredBrix"
                    min="1"
                    max="100"
                    step="0.1"
                    value={this.state.desiredBrix}
                    onChange={handleChange}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Total Volume (Gallons)</p>
              </Col>
              <Col>
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    id="totalVolume"
                    type="number"
                    name="totalVolume"
                    min="1"
                    max="999999"
                    step="0.1"
                    value={this.state.totalVolume}
                    onChange={handleChange}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <h5 className="text-center">Sugar to Add</h5>
                <p className="text-center">
                  {`${(
                    ((this.state.desiredBrix - this.state.currentBrix) *
                      this.state.totalVolume *
                      1.5) /
                    16
                  ).toFixed(0)} Lbs ${(
                    ((this.state.desiredBrix - this.state.currentBrix) *
                      this.state.totalVolume *
                      1.5) %
                    16
                  ).toFixed(2)}oz`}
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col> </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default Chaptalization;
