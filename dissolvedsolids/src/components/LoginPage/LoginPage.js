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
import "../LoginPage/LoginPage.css";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Link to="/">
              <span className="back">BACK HHOOOOOOMe</span>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginPage;
