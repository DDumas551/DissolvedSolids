import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

class CalcLinkTest extends Component {
  render() {
    console.log(this.props.info);
    return (
      <div>
        {this.props.info.map(card => (
          <Card>
            <Accordion.Toggle
              key={card}
              as={Card.Header}
              eventKey={this.props.info.indexOf({ card })}
            >
              Other Accordion
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
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
