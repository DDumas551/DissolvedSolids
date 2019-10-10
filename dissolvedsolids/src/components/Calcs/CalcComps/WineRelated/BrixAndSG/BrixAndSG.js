import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class BrixAndSG extends Component {
  state = {
    brix: 0,
    sG: 1.0
  };
  render() {
    const handleBrix = e => {
      this.setState({
        brix: e.target.value
      });
    };
    const handleSG = e => {
      this.setState({
        sG: e.target.value
      });
    };
    return (
      <div>
        <Row>
          <Col>
            <h4>Brix to Specific Gravity</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Enter Brix Value</p>
          </Col>
          <Col>
            <p>Specific Gravity</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              id="brix"
              type="number"
              name="brix"
              min="0"
              max="293"
              step="0.1"
              value={this.state.brix}
              onChange={handleBrix}
            />
          </Col>
          <Col>
            <p>
              {(
                this.state.brix / (258.2 - (this.state.brix / 258.2) * 227.1) +
                1
              ).toFixed(3)}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>Specific Gravity to Brix</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Enter SG Value</p>
          </Col>
          <Col>
            <p>Brix</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              id="sG"
              type="number"
              name="sG"
              min="0.0"
              max="1.999"
              step="0.001"
              value={this.state.sG}
              onChange={handleSG}
            />
          </Col>
          <Col>
            <p>
              {(
                ((182.4601 * this.state.sG - 775.6821) * this.state.sG +
                  1262.7794) *
                  this.state.sG -
                669.5622
              ).toFixed(1)}
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BrixAndSG;
