import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../ABV/ABV.css";

class ABV extends Component {
  state = {
    sgStart: 1.001,
    sgFinal: 1.0,
    sgABV: 0.0,
    platoStart: 1,
    platoFinish: 0,
    platoABV: 0,
    brixStart: 1,
    brixFinish: 0,
    brixABV: 0
  };

  render() {
    const handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };
    // const handleFGChange = event => {
    //   this.setState({
    //     fg: event.target.value
    //   });
    // };
    return (
      <div>
        {/* Specific Gravity */}
        <Row>
          <Col>
            <h3>Calculate ABV With SG</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Original Gravity</p>
            <input
              id="originalGravity"
              type="number"
              name="sgStart"
              value={this.state.sgStart}
              min="1.000"
              max="1.299"
              step="0.001"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <p>Final Gravity</p>
            <input
              id="finalGravity"
              type="number"
              name="sgFinal"
              value={this.state.sgFinal}
              min="1.000"
              max="1.099"
              step="0.001"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <p>Alcohol Content</p>
            <p id="abv">
              {((this.state.sgStart - this.state.sgFinal) * 131.25).toFixed(2)}%
            </p>
          </Col>
        </Row>
        {/* Plato */}
        <Row>
          <Col>
            <h4>Calculate ABV With Deg Plato</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Original Gravity</p>
            <input
              id="originalGravity"
              type="number"
              name="platoStart"
              value={this.state.platoStart}
              min="1"
              max="100"
              step="0.2"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <p>Final Gravity</p>
            <input
              id="finalGravity"
              type="number"
              name="platoFinish"
              value={this.state.platoFinish}
              min="0"
              max="100"
              step="0.1"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <p>Alcohol Content</p>
            <p id="abv">
              {(
                (this.state.platoStart - this.state.platoFinish) *
                0.52
              ).toFixed(2)}
              %
            </p>
          </Col>
        </Row>
        {/* Brix */}
        {/* <Row>
          <Col>
            <h4>Calculate ABV With Brix</h4>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Starting Brix</p>
            <input
              id="originalGravity"
              type="number"
              name="brixStart"
              value={this.state.brixStart}
              min="1"
              max="100"
              step="0.2"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <p>Finished Brix</p>
            <input
              id="finalGravity"
              type="number"
              name="brixFinish"
              value={this.state.brixFinish}
              min="0"
              max="100"
              step="0.1"
              onChange={handleChange}
            />
          </Col>
          <Col>
            <p>Alcohol Content</p>
            <p id="abv">
              {((this.state.brixStart - this.state.brixFinish) * 0.52).toFixed(
                2
              )}
              %
            </p>
          </Col>
        </Row> */}
      </div>
    );
  }
}

export default ABV;
