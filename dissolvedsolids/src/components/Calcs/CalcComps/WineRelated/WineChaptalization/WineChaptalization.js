import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class WineChaptalization extends Component {
  state = {
    currentBrix: 5,
    desiredBrix: 10,
    totalVolume: 5
  };
  render() {
    const updateBrix = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    return (
      <div>
        <Row>
          <Col>
            <h4>Current Brix</h4>
          </Col>
          <Col>
            <h4>Desired Brix</h4>
          </Col>
          <Col>
            <h4>Total Volume (Gallons)</h4>
          </Col>
          <Col>
            <h4>Sugar to Add</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              id="current"
              type="number"
              name="currentBrix"
              min="0"
              max="100"
              step="0.1"
              value={this.state.currentBrix}
              onChange={updateBrix}
            />
          </Col>
          <Col>
            <input
              id="desired"
              type="number"
              name="desiredBrix"
              min="1"
              max="100"
              step="0.1"
              value={this.state.desiredBrix}
              onChange={updateBrix}
            />
          </Col>
          <Col>
            {" "}
            <input
              id="total"
              type="number"
              name="totalVolume"
              min="1"
              max="999999"
              step="0.1"
              value={this.state.totalVolume}
              onChange={updateBrix}
            />
          </Col>
          <Col>
            <p>
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
      </div>
    );
  }
}

export default WineChaptalization;
