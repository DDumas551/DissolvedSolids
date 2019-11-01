import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "../BrewhouseEff/BrewhouseEff.css";

class BrewhouseEff extends Component {
  state = {
    measuredGravity: 1,
    measuredVolume: 0.1,
    potentialGravity: 1,
    targetVolume: 0.1
  };
  render() {
    const handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    const z = this.state;
    return (
      <div>
        <h3>Brewhouse Efficiency</h3>
        <Card className="cardShadow" style={{ width: "21rem" }}>
          <Card.Body>
            <Row>
              <Col>
                <p>Measured Gravity:</p>
              </Col>
              <Col>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      {z.measuredGravity < 10
                        ? "1.00"
                        : z.measuredGravity < 100
                        ? "1.0"
                        : "1."}
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    id="measuredGravity"
                    type="number"
                    name="measuredGravity"
                    value={z.measuredGravity}
                    min="1"
                    max="299"
                    step="1"
                    onChange={handleChange}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Measured Volume:</p>
              </Col>
              <Col>
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    id="measuredVolume"
                    type="number"
                    name="measuredVolume"
                    value={z.measuredVolume}
                    min="0.0"
                    max="999999"
                    step="0.1"
                    onChange={handleChange}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Potential Gravity:</p>
              </Col>
              <Col>
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      {z.potentialGravity < 10
                        ? "1.00"
                        : z.potentialGravity < 100
                        ? "1.0"
                        : "1."}
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    id="potentialGravity"
                    type="number"
                    name="potentialGravity"
                    value={this.state.potentialGravity}
                    min="1"
                    max="299"
                    step="1"
                    onChange={handleChange}
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Potential Volume:</p>
              </Col>
              <Col>
                <InputGroup size="sm" className="mb-3">
                  <FormControl
                    id="targetVolume"
                    type="number"
                    name="targetVolume"
                    value={this.state.targetVolume}
                    min="0.0"
                    max="9999"
                    step="0.1"
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
                <h5 className="text-center">Brewhouse Efficiency</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="text-center">
                  {`${(
                    ((z.measuredGravity * z.measuredVolume) /
                      (z.potentialGravity * z.targetVolume)) *
                    100
                  ).toFixed(1)}%`}
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default BrewhouseEff;
