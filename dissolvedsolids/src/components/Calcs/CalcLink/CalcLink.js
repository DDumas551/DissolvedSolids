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
import { Link } from "react-router-dom";

class CalcLink extends Component {
  render() {
    return (
      <>
        <Link to={this.props.text.replace(/\s/g, "")}>
          <p>{this.props.text}</p>
        </Link>
      </>
    );
  }
}

export default CalcLink;
