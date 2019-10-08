import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../ABV/ABV.css";

class ABV extends Component {
  state = { og: 1.001, fg: 1.0, abv: 0.0 };
  render() {
    function handleChange(event) {
      this.setState({
        og: event.target.value
      });
    }
    return (
      <div>
        <h3>Calculate ABV</h3>
        <Row>
          <Col>
            <p>Original Gravity (Plato)</p>
            <input
              id="originalGravity"
              type="number"
              placeholder="1.001"
              min="1.000"
              max="1.299"
              step="0.001"
              onChange={() => handleChange}
            />
          </Col>
          <Col>
            <p>Final Gravity (Plato)</p>
            <input
              id="finalGravity"
              type="number"
              placeholder={this.state.fg}
              min="1.000"
              max="1.099"
              step="0.001"
            />
          </Col>
          <Col>
            <p>Alcohol Content</p>
            <p id="abv">
              {((this.state.og - this.state.fg) * 131.25).toFixed(2)}%
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ABV;
