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
import "../PublicRecipes/PublicRecipes.css";
import { Link } from "react-router-dom";

class PublicRecipes extends Component {
  render() {
    return (
      <div>
        <p>PublicRecipes</p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default PublicRecipes;
