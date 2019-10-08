import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class BrewPrep extends Component {
  render() {
    const BrewPrepSteps = [
      "Future Stuff",
      "Other Stuff",
      "More Stuff",
      "Even More Stuff"
    ];
    return (
      <div>
        <Row>
          <Col xs={8}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Action</th>
                  <th className="text-center">Done</th>
                  <th className="text-center">Don't Need</th>
                </tr>
              </thead>
              <tbody>
                {/* Figure out how to disable one box when other is checked */}
                {/* document.getElementById("checkBox").disabled=true; */}
                {BrewPrepSteps.map(action => (
                  <tr>
                    <td>{action}</td>
                    <td className="checks text-center">
                      <input
                        id={`a${action.replace(/\s/g, "")}`}
                        type="checkbox"
                        onClick={() =>
                          document.getElementById(
                            `z${action.replace(/\s/g, "")}`
                          ).disabled === false
                            ? (document.getElementById(
                                `z${action.replace(/\s/g, "")}`
                              ).disabled = true)
                            : (document.getElementById(
                                `z${action.replace(/\s/g, "")}`
                              ).disabled = false)
                        }
                      />
                    </td>
                    <td className="checks text-center">
                      <input
                        id={`z${action.replace(/\s/g, "")}`}
                        type="checkbox"
                        onClick={() =>
                          document.getElementById(
                            `a${action.replace(/\s/g, "")}`
                          ).disabled === false
                            ? (document.getElementById(
                                `a${action.replace(/\s/g, "")}`
                              ).disabled = true)
                            : (document.getElementById(
                                `a${action.replace(/\s/g, "")}`
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

export default BrewPrep;
