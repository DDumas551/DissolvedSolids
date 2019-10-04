import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

class CalcLinkTest extends Component {
  render() {
    console.log(this.props.info);
    return (
      <div>
        {this.props.info.map(accord => (
          <Card key={accord}>
            <Accordion.Toggle as={Card.Header} eventKey={this.props.info.id}>
              {this.props.info.calcName}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={this.props.info}>
              <Card.Body>
                <p>Hello</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </div>
    );
  }
}

export default CalcLinkTest;
