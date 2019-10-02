import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalcLink from "./CalcLink/CalcLink";
import "../Calcs/Calcs.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ABV from "./CalcComps/GenCalcs/ABV/Abv";
import CalcLinkTest from "./CalcLinkTest/CalcLinkTest";

class Calcs extends Component {
  render() {
    const allCalcs = [
      {
        genCalcs: [
          "ABV",
          "Hydrometer Temp",
          "IBU",
          "SRM",
          "Dilution and Boil Off",
          "Yeast Pitch Rate and Starter",
          "Refractometer",
          "Brix Converter",
          "Chaptalization",
          "LME and DME"
        ]
      },
      {
        allGrain: [
          "Mash",
          "All Grain OG/FG",
          "Water Chem Basic",
          "Water Chem Adv",
          "Brewhouse Efficiency",
          "Quick Infusion Calc"
        ]
      },
      { extractBrewers: ["Extract OG/FG"] },
      {
        bPK: [
          "Bottling",
          "Priming",
          "Keg Carb Chart",
          "Force Carb Chart",
          "Gyle and Krausen Priming"
        ]
      },
      { wine: ["Brix and SG Converstions", "Wine Chaptalization"] }
    ];
    const genCalcs = [
      "ABV",
      "Hydrometer Temp",
      "IBU",
      "SRM",
      "Dilution and Boil Off",
      "Yeast Pitch Rate and Starter",
      "Refractometer",
      "Brix Converter",
      "Chaptalization",
      "LME and DME"
    ];
    const allGrain = [
      "Mash",
      "All Grain OG/FG",
      "Water Chem Basic",
      "Water Chem Adv",
      "Brewhouse Efficiency",
      "Quick Infusion Calc"
    ];
    const extractBrewers = ["Extract OG/FG"];
    const bPK = [
      "Bottling",
      "Priming",
      "Keg Carb Chart",
      "Force Carb Chart",
      "Gyle and Krausen Priming"
    ];
    const wine = ["Brix and SG Converstions", "Wine Chaptalization"];
    return (
      <div>
        <Row>
          <Col>
            <Accordion>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  General Calculators
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {genCalcs.sort().map(calc => (
                      <CalcLink key={calc} text={calc} />
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  All Grain
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    {allGrain.sort().map(calc => (
                      <CalcLink key={calc} text={calc} />
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Extract Brewers
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    {extractBrewers.sort().map(calc => (
                      <CalcLink key={calc} text={calc} />
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  Bottling/Priming/Kegging
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    {bPK.sort().map(calc => (
                      <CalcLink key={calc} text={calc} />
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  Wine Related Calcs
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body>
                    {wine.sort().map(calc => (
                      <CalcLink key={calc} text={calc} />
                    ))}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col>
            <Accordion>
              <CalcLinkTest info={allCalcs} />
            </Accordion>
          </Col>
        </Row>

        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Calcs;
