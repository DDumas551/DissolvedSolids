import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class CalcBack extends Component {
  render() {
    return (
      <div>
        <Link to="/Calcs">
          <p>Back to Calcs</p>
        </Link>
      </div>
    );
  }
}

export default CalcBack;
