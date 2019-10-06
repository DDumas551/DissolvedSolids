import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./BrewingMaterials.css";

class BrewingMaterials extends Component {
  render() {
    const brewingEquiptment = [
      "Hydrometer",
      "Sanitizer",
      "Propane",
      "Fermenter/Carboy",
      "Kettle",
      "Airlock",
      "Hop Socks",
      "Brewing Spoon",
      "Paper Towels",
      "Malts",
      "Yeast",
      "Hops",
      "Thermometer",
      "Sanitizer Spray Bottle",
      "Powdered Brewery Cleaner",
      "Rubber Stopper for Airlock",
      "Various Brushes"
    ];
    return (
      <div>
        <Row>
          <Col xs={8}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Have</th>
                  <th>Don't Need</th>
                </tr>
              </thead>
              <tbody>
                {/* Figure out how to disable one box when other is checked */}
                {brewingEquiptment.map(item => (
                  <tr>
                    <td>{item}</td>
                    <td>
                      <input id={`a${item}`} type="checkbox" />
                    </td>
                    <td>
                      <input id={`z${item}`} type="checkbox" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}

export default BrewingMaterials;
