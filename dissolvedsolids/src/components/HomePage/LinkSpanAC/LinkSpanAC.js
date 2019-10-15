import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinkSpanAC extends Component {
  render() {
    if (!this.props.ofAge) {
      return (
        <span>
          <center>{this.props.linktext}</center>
        </span>
      );
    }
    return (
      <Link to={this.props.to}>
        <p>{this.props.linktext}</p>
      </Link>
    );
  }
}

export default LinkSpanAC;
