import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import CalcBack from "../../../CalcBack/CalcBack";

class WineChaptalization extends Component {
  render() {
    return (
      <div>
        <p>Wine Chaptalization</p>
        <CalcBack />
      </div>
    );
  }
}

export default WineChaptalization;
