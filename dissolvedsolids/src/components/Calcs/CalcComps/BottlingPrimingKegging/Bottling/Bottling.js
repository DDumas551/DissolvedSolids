import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "../Bottling/Bottling.css";

class Bottling extends Component {
  state = {
    totalVolumeOz: 640,
    capacity: 12
  };
  render() {
    const { totalVolumeOz, capacity } = this.state;

    const handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    return (
      <div>
        <Card className="cardShadow" style={{ width: "21rem" }}>
          <Card.Body>
            <Card.Title className="text-center">{`${totalVolumeOz} oz = ${(
              totalVolumeOz / 128
            ).toFixed(2)} gallons`}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-center">
              Total Volume to Rack
            </Card.Subtitle>
            <Row>
              <Col>
                <center>
                  <input
                    id="totalVolumeOz"
                    type="number"
                    name="totalVolumeOz"
                    className="bottlingInput"
                    value={totalVolumeOz}
                    onChange={handleChange}
                  />
                </center>
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
                <InputGroup className="mb-3">
                  <FormControl
                    id="capacity"
                    type="number"
                    name="capacity"
                    min="0"
                    max="99999"
                    step="0.1"
                    value={capacity}
                    onChange={handleChange}
                    aria-label="Capacity"
                    aria-describedby="basic-addon1"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">oz</InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
              <Col>
                <p className="text-center">
                  {(totalVolumeOz / capacity + 1).toFixed(0)}
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Bottling;
