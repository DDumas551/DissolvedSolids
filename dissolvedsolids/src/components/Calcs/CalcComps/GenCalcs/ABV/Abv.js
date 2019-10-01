import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import CalcBack from "../../../CalcBack/CalcBack";

class ABV extends Component {
  render() {
    return (
      <div>
        <p>Abv</p>
        <CalcBack />
      </div>
    );
  }
}

export default ABV;
