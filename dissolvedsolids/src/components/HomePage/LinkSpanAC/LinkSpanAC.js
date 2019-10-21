import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinkSpanAC extends Component {
  render() {
    if (!this.props.ofAge) {
      return (
        <span>
          <span>{this.props.linktext}</span>
        </span>
      );
    }
    return (
      <span>
        <Link to={this.props.to}>
          <span className="AClink">{this.props.linktext}</span>
        </Link>
      </span>
    );
  }
}

export default LinkSpanAC;
