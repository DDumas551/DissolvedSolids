import React, { Component } from "react";
import Form from "react-bootstrap/Form";

import "../LoginPage/LoginPage.css";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <h3>Log in to Dissolved Solids!</h3>
        <Form className="signupBox" style={{ maxWidth: "25rem" }} method="post">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              // onChange={handleChange}
            />
            {/* <p style={{ fontSize: "10px" }} className="text-muted">
              Must contain at least one lowercase letter
            </p> */}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              // value={password}
              // onChange={handleChange}
            />
            {/* <p style={{ fontSize: "10px" }} className="text-muted">
              Must contain a lowercase and uppercase, a number, and a special
              character
            </p> */}
          </Form.Group>
          <button
            id="login"
            variant="primary"
            type="submit"
            className="loginButton"
            disabled={true}
            // onClick={handleClick}
          >
            Log in!
          </button>
        </Form>
      </div>
    );
  }
}

export default LoginPage;
