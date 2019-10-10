import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Bottling/Bottling.css";

class Bottling extends Component {
  state = {
    totalVolume: 640,
    capacity: 12,
    totalToRack: 0
  };
  render() {
    const updateTotal = e => {
      this.setState({ totalVolume: e.target.value });
    };

    const updateCapacity = e => {
      this.setState({ capacity: e.target.value });
    };

    return (
      <div>
        <Row>
          <Col>
            <p>Total Volume to Rack in Ounces</p>
          </Col>
          <Col>
            <input
              id="totalVolume"
              type="number"
              name="totalVolume"
              value={this.state.totalVolume}
              onChange={updateTotal}
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <p className="strong">Capacity of Vessel (oz)</p>
          </Col>
          <Col>
            <p className="strong text-center">Vessels Needed</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              id="capacity"
              type="number"
              name="capacity"
              min="0"
              max="999"
              step="0.1"
              value={this.state.capacity}
              onChange={updateCapacity}
            />
          </Col>
          <Col>
            <p className="text-center">
              {(this.state.totalVolume / this.state.capacity + 1).toFixed(0)}
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Bottling;
