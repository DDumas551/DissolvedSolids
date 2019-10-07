import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./BrewingEquiptment.css";

class BrewingEquiptment extends Component {
  state = {
    aChecked: false,
    zChecked: false
  };
  render() {
    const brewingEquiptment = [
      "Hydrometer",
      "Sanitizer",
      "Propane",
      "Fermenter or Carboy",
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
      "Various Brushes",
      "Scissors",
      "Colander",
      "Funnel"
    ];

    return (
      <div>
        <Row>
          <Col xs={8}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="text-center">Have</th>
                  <th className="text-center">Don't Need</th>
                </tr>
              </thead>
              <tbody>
                {/* Figure out how to disable one box when other is checked */}
                {/* document.getElementById("checkBox").disabled=true; */}
                {brewingEquiptment.sort().map(item => (
                  <tr>
                    <td>{item}</td>
                    <td className="checks text-center">
                      <input
                        id={`a${item.replace(/\s/g, "")}`}
                        type="checkbox"
                        onClick={() =>
                          document.getElementById(`z${item.replace(/\s/g, "")}`)
                            .disabled === false
                            ? (document.getElementById(
                                `z${item.replace(/\s/g, "")}`
                              ).disabled = true)
                            : (document.getElementById(
                                `z${item.replace(/\s/g, "")}`
                              ).disabled = false)
                        }
                      />
                    </td>
                    <td className="checks text-center">
                      <input
                        id={`z${item.replace(/\s/g, "")}`}
                        type="checkbox"
                        onClick={() =>
                          document.getElementById(`a${item.replace(/\s/g, "")}`)
                            .disabled === false
                            ? (document.getElementById(
                                `a${item.replace(/\s/g, "")}`
                              ).disabled = true)
                            : (document.getElementById(
                                `a${item.replace(/\s/g, "")}`
                              ).disabled = false)
                        }
                      />
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

export default BrewingEquiptment;
