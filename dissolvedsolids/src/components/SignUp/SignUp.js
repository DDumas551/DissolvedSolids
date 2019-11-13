import React, { Component } from "react";
import "../SignUp/SignUp.css";
// import Card from "react-bootstrap/Card";
// import InputGroup from "react-bootstrap/InputGroup";
// import FromControl from "react-bootstrap/FormControl";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
// import { Link } from "react-router-dom";

class SignUp extends Component {
  state = {
    password: "",
    username: ""
  };
  render() {
    const { password, username } = this.state;

    const validatePWContent = () => {
      const reggiePW = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,1024}$/;
      const reggieUN = /^(?=.*[a-z]).{1,24}$/;
      reggiePW.test(password) && reggieUN.test(username)
        ? (document.getElementById("submit").disabled = false)
        : (document.getElementById("submit").disabled = true);
    };

    const handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
      validatePWContent();
    };

    const handleClick = e => {
      e.preventDefault();
    };

    return (
      <div>
        <h3>Create a username and password</h3>
        <Form
          className="signupBox carcShadow"
          style={{ maxWidth: "25rem" }}
          method="post"
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              onChange={handleChange}
            />
            <p style={{ fontSize: "10px" }} className="text-muted">
              Must contain at least one lowercase letter
            </p>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <p style={{ fontSize: "10px" }} className="text-muted">
              Must contain a lowercase and uppercase, a number, and a special
              character
            </p>
          </Form.Group>
          <button
            id="submit"
            variant="primary"
            type="submit"
            className="signupButton"
            disabled={true}
            onClick={handleClick}
          >
            Submit
          </button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
