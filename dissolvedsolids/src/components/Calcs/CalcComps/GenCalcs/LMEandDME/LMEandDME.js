import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";

class LMEandDME extends Component {
  state = {
    LME: 1,
    DME: 1
  };
  render() {
    const handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    return (
      <div>
        <Row style={{ marginBottom: "10px" }}>
          <Col>
            <h3>Liquid and Dry Malt Extract Conversion</h3>
          </Col>
        </Row>

        <Row style={{ width: "99%" }}>
          <Col xs={6}>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title className="text-center">LME to DME</Card.Title>
                <Row>
                  <Col>
                    <p className="text-center">Amnt LME</p>
                  </Col>
                  <Col>
                    <p className="text-center">Amnt DME</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Subtitle className="mb-2">
                      <InputGroup className="mb-3" style={{ width: "100%" }}>
                        <FormControl
                          id="dme"
                          type="number"
                          name="DME"
                          value={this.state.DME}
                          min="0"
                          max="999999"
                          step="0.01"
                          onChange={handleChange}
                          aria-label="Default"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </InputGroup>
                    </Card.Subtitle>
                  </Col>
                  <Col>
                    <p className="text-center">
                      {(this.state.DME * 1.19).toFixed(2)}
                    </p>
                  </Col>
                </Row>
                <Card.Text className="text-center">
                  This is the amount of Dry Malt Exctract necessary to equal the
                  amount of Liquid Malt Extract
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title className="text-center">DME to LME</Card.Title>
                <Row>
                  <Col>
                    <p className="text-center">Amnt DME</p>
                  </Col>
                  <Col>
                    <p className="text-center">Amnt LME</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Subtitle className="mb-2">
                      <InputGroup className="mb-3" style={{ width: "100%" }}>
                        <FormControl
                          id="lme"
                          type="number"
                          name="LME"
                          value={this.state.LME}
                          min="0"
                          max="999999"
                          step="0.01"
                          onChange={handleChange}
                          aria-label="Default"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </InputGroup>
                    </Card.Subtitle>
                  </Col>
                  <Col>
                    <p className="text-center">
                      {(this.state.LME * 0.84).toFixed(2)}
                    </p>
                  </Col>
                </Row>
                <Card.Text className="text-center">
                  This is the amount of Liquid Malt Extract necessary to equal
                  the amount of Dry Malt Exctract
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LMEandDME;
