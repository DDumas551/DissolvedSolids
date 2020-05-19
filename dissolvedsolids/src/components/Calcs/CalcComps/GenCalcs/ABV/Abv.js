import React, { Component, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../ABV/ABV.css";

function AlcoholByVolume() {
  const [sgStart, setSgStart] = useState([
    {
      sgStart: 1.001
    }
  ]);
  const [sgFinal, setSgFinal] = useState([
    {
      sgFinal: 1.0
    }
  ]);
  const [platoStart, setPlatoStart] = useState([
    {
      platoStart: 1.0
    }
  ]);
  const [platoFinish, setPlatoFinish] = useState([
    {
      platoFinish: 0.0
    }
  ]);
  return <div>{sgStart}</div>;
}

// project management
// product d

class ABV extends Component {
  state = {
    sgStart: 1.001,
    sgFinal: 1.0,
    sgABV: 0.0,
    platoStart: 1.0,
    platoFinish: 0.0,
    platoABV: 0,
    brixStart: 1,
    brixFinish: 0,
    brixABV: 0
  };

  render() {
    const { sgStart, sgFinal, platoStart, platoFinish } = this.state;
    const handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    return (
      <div>
        <AlcoholByVolume />
        <h3>Calculate Alcohol By Volume</h3>
        <Card className="cardShadow" style={{ width: "21rem" }}>
          <Card.Body>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ fontSize: "20px" }}
            >
              Specific Gravity
            </Card.Subtitle>
            <Card.Title className="text-center">
              {((sgStart - sgFinal) * 131.25).toFixed(2)}% ABV
            </Card.Title>
            <Card.Text>
              <Row className="justify-content-center">
                <Col xs={6}>
                  <div className="text-center">
                    <p>Original Gravity</p>
                    <input
                      id="originalGravity"
                      type="number"
                      name="sgStart"
                      value={sgStart}
                      min="1.000"
                      max="1.299"
                      step="0.001"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="text-center">
                    <p>Final Gravity</p>
                    <input
                      id="finalGravity"
                      type="number"
                      name="sgFinal"
                      value={sgFinal}
                      min="1.000"
                      max="1.099"
                      step="0.001"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card className="cardShadow" style={{ width: "21rem" }}>
          <Card.Body>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ fontSize: "20px" }}
            >
              Plato
            </Card.Subtitle>
            <Card.Title className="text-center">
              {((platoStart - platoFinish) * 0.52).toFixed(2)}% ABV
            </Card.Title>
            <Card.Text>
              <Row className="justify-content-center">
                <Col xs={6}>
                  <div className="text-center">
                    <p>Original Deg Plato</p>
                    <input
                      id="originalGravity"
                      type="number"
                      name="platoStart"
                      value={platoStart}
                      min="1"
                      max="100"
                      step="0.1"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="text-center">
                    <p>Final Deg Plato</p>
                    <input
                      id="finalGravity"
                      type="number"
                      name="platoFinish"
                      value={platoFinish}
                      min="0"
                      max="100"
                      step="0.1"
                      onChange={handleChange}
                    />
                  </div>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
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
