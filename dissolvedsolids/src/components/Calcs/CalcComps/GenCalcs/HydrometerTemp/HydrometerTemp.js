import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class HydrometerTemp extends Component {
  state = {
    temp: 68,
    hydrometerReading: 1.05
  };
  render() {
    const handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    return (
      <div>
        <h3>Hydrometer Temp Correction</h3>
        <p>
          This calculator is to be used to adjust the Specific Gravity reading
          of your hydrometer
        </p>
        <Card style={{ width: "21rem" }}>
          <Card.Body>
            <Row>
              <Col>
                <p>Hydrometer Reading</p>
              </Col>
              <Col>
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    id="hydrometerReading"
                    type="number"
                    name="hydrometerReading"
                    min="1.0"
                    max="1.299"
                    step="0.001"
                    value={this.state.hydrometerReading}
                    onChange={handleChange}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Wort Temp</p>
              </Col>
              <Col>
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    id="temp"
                    type="number"
                    name="temp"
                    min="32"
                    max="200"
                    step="0.5"
                    value={this.state.temp}
                    onChange={handleChange}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>Gravity Adjusted for Temp</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  {/* {(1.313454 -
                    0.132674 * this.state.temp +
                    5.59365755604 -
                    3 * this.state.temp) ^
                    (2 - 7.14264494952 - 6 * this.state.temp) ^
                    3} */}
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HydrometerTemp;
