import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class BrixAndSG extends Component {
  state = {
    brix: 0,
    sG: 1.0
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
            <h3>Brix and Specific Gravity Converters</h3>
          </Col>
        </Row>
        <Row style={{ width: "99%" }}>
          <Col xs={6}>
            <Card className="cardShadow" style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title className="text-center">Brix to SG</Card.Title>
                <Row>
                  <Col>
                    <Card.Subtitle className="mb-2">
                      <InputGroup className="mb-3" style={{ width: "100%" }}>
                        <FormControl
                          id="brix"
                          type="number"
                          name="brix"
                          min="0"
                          max="293"
                          step="0.1"
                          value={this.state.brix}
                          onChange={handleChange}
                          aria-label="Default"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </InputGroup>
                    </Card.Subtitle>
                  </Col>
                  <Col>
                    <p className="text-center">
                      {(
                        this.state.brix /
                          (258.2 - (this.state.brix / 258.2) * 227.1) +
                        1
                      ).toFixed(3)}
                    </p>
                  </Col>
                </Row>
                <Card.Text className="text-center">
                  Write something here...?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card className="cardShadow" style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title className="text-center">SG to Brix</Card.Title>
                <Row>
                  <Col>
                    <Card.Subtitle className="mb-2">
                      <InputGroup className="mb-3" style={{ width: "100%" }}>
                        <FormControl
                          id="sG"
                          type="number"
                          name="sG"
                          min="0.0"
                          max="1.999"
                          step="0.001"
                          value={this.state.sG}
                          onChange={handleChange}
                          aria-label="Default"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </InputGroup>
                    </Card.Subtitle>
                  </Col>
                  <Col>
                    <p className="text-center">
                      {((182.4601 * this.state.sG - 775.6821) * this.state.sG +
                        1262.7794) *
                        this.state.sG -
                        669.5622 >
                      0
                        ? (
                            ((182.4601 * this.state.sG - 775.6821) *
                              this.state.sG +
                              1262.7794) *
                              this.state.sG -
                            669.5622
                          ).toFixed(2)
                        : "0.0"}
                    </p>
                  </Col>
                </Row>
                <Card.Text className="text-center">
                  Write something here...?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default BrixAndSG;
