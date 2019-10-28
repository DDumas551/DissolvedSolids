import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalcLink from "./CalcLink/CalcLink";
import "../Calcs/Calcs.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// All Grain
import AllGrainOGFG from "./CalcComps/AllGrainCalcs/AllGrainOGFG/AllGrainOGFG";
import BrewhouseEff from "./CalcComps/AllGrainCalcs/BrewhouseEff/BrewhouseEff";
import Mash from "./CalcComps/AllGrainCalcs/Mash/Mash";
import QuickInfusion from "./CalcComps/AllGrainCalcs/QuickInfusion/QuickInfusion";
import AdvWaterChem from "./CalcComps/AllGrainCalcs/AdvWaterChem/AdvWaterChem";
import BasicWaterChem from "./CalcComps/AllGrainCalcs/BasicWaterChem/BasicWaterChem";
// BPKegging
import Bottling from "./CalcComps/BottlingPrimingKegging/Bottling/Bottling";
import ForceCarb from "./CalcComps/BottlingPrimingKegging/ForceCarbing/ForceCarb";
import GyleAndKrausenPriming from "./CalcComps/BottlingPrimingKegging/GyleAndKrausen/GyleAndKrausenPriming";
import KegCarb from "./CalcComps/BottlingPrimingKegging/KegCarb/KegCarb";
import Priming from "./CalcComps/BottlingPrimingKegging/Priming/Priming";
// Extract brew
import ExtractOGFG from "./CalcComps/ExtractBrewers/ExtractBrewers/ExtractOGFG";
// General Calcs
import ABV from "./CalcComps/GenCalcs/ABV/ABV";
import BrixConverter from "./CalcComps/GenCalcs/BrixConverter/BrixConverter";
import Chaptalization from "./CalcComps/GenCalcs/Chaptalization/Chaptalization";
import DilutionAndBoilOff from "./CalcComps/GenCalcs/DilutionAndBoilOff/DilutionAndBoilOff";
import HydrometerTemp from "./CalcComps/GenCalcs/HydrometerTemp/HydrometerTemp";
import IBU from "./CalcComps/GenCalcs/IBU/IBU";
import LMEandDME from "./CalcComps/GenCalcs/LMEandDME/LMEandDME";
import Refractometer from "./CalcComps/GenCalcs/Refractometer/Refractometer";
import SRM from "./CalcComps/GenCalcs/SRM/SRM";
import YeastPitchRateAndStarter from "./CalcComps/GenCalcs/YeastPitchAndStarter/YeastPitchAndStarter";
// Wine
import WineChaptalization from "./CalcComps/WineRelated/WineChaptalization/WineChaptalization";
import BrixAndSG from "./CalcComps/WineRelated/BrixAndSG/BrixAndSG";

class Calcs extends Component {
  render() {
    const allCalcs = [
      {
        id: 0,
        groupName: "General Calculators",
        theCalcs: [
          "ABV",
          "Hydrometer Temp",
          "IBU",
          "SRM",
          "Dilution and Boil Off",
          "Yeast Pitch Rate and Starter",
          "Refractometer",
          "Brix Converter",
          "Chaptalization",
          "LME and DME"
        ]
      },
      {
        id: 1,
        groupName: "All Grain",
        theCalcs: [
          "Mash",
          "All Grain OG FG",
          "Water Chem Basic",
          "Water Chem Adv",
          "Brewhouse Efficiency",
          "Quick Infusion Calc"
        ]
      },
      { id: 2, groupName: "Extract Brewers", theCalcs: ["Extract OG FG"] },
      {
        id: 3,
        groupName: "Bottling Priming Kegging",
        theCalcs: [
          "Bottling",
          "Priming",
          "Keg Carb Chart",
          "Force Carb Chart",
          "Gyle and Krausen Priming"
        ]
      },
      {
        id: 4,
        groupName: "Wine",
        theCalcs: ["Brix and SG Converstions", "Wine Chaptalization"]
      }
    ];
    const genCalcs = [
      "ABV",
      "Hydrometer Temp",
      "IBU",
      "SRM",
      "Dilution and Boil Off",
      "Yeast Pitch Rate and Starter",
      "Refractometer",
      "Brix Converter",
      "Chaptalization",
      "LME and DME"
    ];
    const allGrain = [
      "Mash",
      "All Grain OG FG",
      "Water Chem Basic",
      "Water Chem Adv",
      "Brewhouse Efficiency",
      "Quick Infusion Calc"
    ];
    const extractBrewers = ["Extract OG FG"];
    const bPK = [
      "Bottling",
      "Priming",
      "Keg Carb Chart",
      "Force Carb Chart",
      "Gyle and Krausen Priming"
    ];
    const wine = ["Brix and SG Conversions", "Wine Chaptalization"];
    return (
      <div>
        <Router>
          <Switch>
            <div className="accordion">
              <Row>
                <div>
                  <Col>
                    <Accordion style={{ width: "18rem" }}>
                      <Card>
                        <Accordion.Toggle
                          className="userSelect"
                          as={Card.Header}
                          eventKey="1"
                        >
                          All Grain
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            {allGrain.sort().map(calc => (
                              <CalcLink key={calc} text={calc} />
                            ))}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle
                          className="userSelect"
                          as={Card.Header}
                          eventKey="3"
                        >
                          Bottling/Priming/Kegging
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            {bPK.sort().map(calc => (
                              <CalcLink key={calc} text={calc} />
                            ))}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle
                          className="userSelect"
                          as={Card.Header}
                          eventKey="2"
                        >
                          Extract Brewers
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            {extractBrewers.sort().map(calc => (
                              <CalcLink key={calc} text={calc} />
                            ))}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle
                          className="userSelect"
                          as={Card.Header}
                          eventKey="0"
                        >
                          General Calculators
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            {genCalcs.sort().map(calc => (
                              <CalcLink key={calc} text={calc} />
                            ))}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle
                          className="userSelect"
                          as={Card.Header}
                          eventKey="4"
                        >
                          Wine Related Calcs
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                          <Card.Body>
                            {wine.sort().map(calc => (
                              <CalcLink key={calc} text={calc} />
                            ))}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Col>
                </div>
                <Col>
                  {/* All Grain */}
                  <Route
                    exact
                    path="/Calcs/AllGrainOGFG"
                    component={AllGrainOGFG}
                  />
                  <Route
                    exact
                    path="/Calcs/BrewhouseEfficiency"
                    component={BrewhouseEff}
                  />
                  <Route
                    exact
                    path="/Calcs/WaterChemAdv"
                    component={AdvWaterChem}
                  />
                  <Route
                    exact
                    path="/Calcs/WaterChemBasic"
                    component={BasicWaterChem}
                  />
                  <Route exact path="/Calcs/Mash" component={Mash} />
                  <Route
                    exact
                    path="/Calcs/QuickInfusionCalc"
                    component={QuickInfusion}
                  />
                  {/* Bottling/Kegging */}
                  <Route exact path="/Calcs/Bottling" component={Bottling} />
                  <Route
                    exact
                    path="/Calcs/ForceCarbChart"
                    component={ForceCarb}
                  />
                  <Route
                    exact
                    path="/Calcs/GyleAndKrausenPriming"
                    component={GyleAndKrausenPriming}
                  />
                  <Route exact path="/Calcs/KegCarbChart" component={KegCarb} />
                  <Route exact path="/Calcs/Priming" component={Priming} />

                  {/* Extract Brewers */}
                  <Route
                    exact
                    path="/Calcs/ExtractOGFG"
                    component={ExtractOGFG}
                  />
                  {/* General Calcs */}
                  <Route exact path="/Calcs/ABV" component={ABV} />
                  <Route
                    exact
                    path="/Calcs/BrixConverter"
                    component={BrixConverter}
                  />
                  <Route
                    exact
                    path="/Calcs/Chaptalization"
                    component={Chaptalization}
                  />
                  <Route
                    exact
                    path="/Calcs/DilutionAndBoilOff"
                    component={DilutionAndBoilOff}
                  />
                  <Route
                    exact
                    path="/Calcs/HydrometerTemp"
                    component={HydrometerTemp}
                  />
                  <Route exact path="/Calcs/IBU" component={IBU} />
                  <Route exact path="/Calcs/LMEandDME" component={LMEandDME} />
                  <Route
                    exact
                    path="/Calcs/Refractometer"
                    component={Refractometer}
                  />
                  <Route exact path="/Calcs/SRM" component={SRM} />
                  <Route
                    exact
                    path="/Calcs/YeastPitchRateAndStarter"
                    component={YeastPitchRateAndStarter}
                  />
                  {/* Wine */}
                  <Route
                    exact
                    path="/Calcs/BrixAndSGConversions"
                    component={BrixAndSG}
                  />
                  <Route
                    exact
                    path="/Calcs/WineChaptalization"
                    component={WineChaptalization}
                  />

                  {/* <Accordion>
              <CalcLinkTest key={allCalcs.id} info={allCalcs} />
            </Accordion> */}
                </Col>
              </Row>
            </div>
          </Switch>
        </Router>
        <Row>
          <Col>
            <Link to="/Home">
              <p>Home</p>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Calcs;
