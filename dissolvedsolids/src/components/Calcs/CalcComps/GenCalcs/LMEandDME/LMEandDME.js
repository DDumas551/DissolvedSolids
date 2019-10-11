import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class LMEandDME extends Component {
  state = {
    LME: 0,
    DME: 0
  };
  render() {
    const handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    return (
      <div>
        <Row>
          <Col>
            <h4>Liquid and Dry Malt Extract Conversion</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Enter Qnty of LME</p>
          </Col>
          <Col />
          <Col>
            <p>Qnty of DME</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              id="lme"
              type="number"
              name="LME"
              min="0"
              max="999999"
              step="0.01"
              onChange={handleChange}
            />
          </Col>
          <Col />
          <Col>
            <p>{this.state.LME * 0.84}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Enter Qnty of DME</p>
          </Col>
          <Col />
          <Col>
            <p>Qnty of LME</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              id="dme"
              type="number"
              name="DME"
              min="0"
              max="999999"
              step="0.01"
              onChange={handleChange}
            />
          </Col>
          <Col />
          <Col>
            <p>{this.state.DME * 1.19}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LMEandDME;
