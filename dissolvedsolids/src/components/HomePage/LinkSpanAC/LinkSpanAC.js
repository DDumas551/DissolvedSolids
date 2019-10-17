import React, { Component } from "react";
import { Link } from "react-router-dom";

class LinkSpanAC extends Component {
  render() {
    if (!this.props.ofAge) {
      return (
        <div>
          <p>{this.props.linktext}</p>
        </div>
      );
    }
    return (
      <div>
        <Link to={this.props.to}>
          <p>{this.props.linktext}</p>
        </Link>
      </div>
    );
  }
}

export default LinkSpanAC;
