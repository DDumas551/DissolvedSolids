import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Calcs/Calcs.css";
import { Link } from "react-router-dom";

class Calcs extends Component {
  render() {
    const GenCalcs = [
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
    const allGrain = ["Mash", "", "", "", "", "", "", ""];
    return (
      <div>
        <Row>
          <Col>
            <h4>General Calulators</h4>
            <p>ABV</p>
            <p>Hydrometer Temp</p>
            <p>IBU</p>
            <p>SRM</p>
            <p>Dilution and Boil Off</p>
            <p>Yeast Pitch Rate and Starter</p>
            <p>Refractometer</p>
            <p>Brix Converter</p>
            <p>Chaptalization</p>
            <p>LME and DME</p>
          </Col>
          <Col>
            <h4>All Grain Brewers</h4>
            <p>Mash</p>
            <p>All Grain OG/FG</p>
            <p>Water Chemistry Basic</p>
            <p>Water Chem Adv</p>
            <p>Brewhouse Efficiency</p>
            <p>Quick Infusion Calc</p>
          </Col>
          <Col>
            <h4>Extract Brewers</h4>
            <p>Extract OG/FG</p>
          </Col>
          <Col>
            <h4>Bottling/Priming/Kegging</h4>
            <p>Bottling</p>
            <p>Priming</p>
            <p>Keg Carbonation Chart</p>
            <p>Force Carbonation Chart</p>
            <p>Gyle and Krausen Priming</p>
          </Col>
          <Col>
            <h4>Wine Related Calcs</h4>
            <p>Brix and Specific Gravity Conversion</p>
            <p>Chaptalization</p>
          </Col>
        </Row>

        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Calcs;
