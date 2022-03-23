import React from "react";
import {
  GetItDoneRight,
  SetupInitMoreBtn,
  SetupIntiativeLeft,
  SetupStyledMain,
} from "./StyledSetupIntiative";
import { Col, Row } from "react-bootstrap";
import {
  BorderBottom,
  InitButtonBlack,
  InitButtonWhite,
  InitLeftButtons,
} from "./StyledInitiative";
import GetItDone from "./InitiativeComponents/GetItDone";
import initiativeImg1 from "../../assets/initiativeImg1.png";
const SetupIntiative = ({ img, Form, handleCanvas }) => {
  const initTypes = [
    {
      head: "Objective",
      subhead: "Be proactive with customer success",
    },
    {
      head: "Key Result",
      subhead: "Get 10 outbound meetings",
    },
  ];

  return (
    <SetupStyledMain>
      <Row className="justify-content-between">
        <Col lg={7}>
          <SetupIntiativeLeft>
            <h3>Let’s Setup your Initiative</h3>
            {initTypes.map((data, index) => {
              const { head, subhead } = data;
              return (
                <p key={index}>
                  <span className="head">{head}:</span>
                  <span className="sub-head">{subhead}</span>
                </p>
              );
            })}
            {Form ? <Form /> : <GetItDone />}
          </SetupIntiativeLeft>
          <BorderBottom />
          <InitLeftButtons>
            <div>
              <InitButtonWhite onClick={() => handleCanvas()}>
                Back
              </InitButtonWhite>
            </div>
            <div>
              <InitButtonBlack>Create Initiative </InitButtonBlack>
            </div>
          </InitLeftButtons>
        </Col>
        <Col lg={5}>
          <GetItDoneRight>
            <img src={img ? img : initiativeImg1} alt="get it done" />
            <p className="main-head">About the ‘Get It Done’ Initiative Type</p>

            <div className="inner-text">
              <p>
                The ‘Get It Done’ Initiative Type is designed to bring
                visibility into critical or urgent Big Ticket Items. It’s binary
                - either done or not done. If you asked yourself, “Why are we
                working on this?” --- The answer should be related to impacting
                the Key Result(s) associated with it.
              </p>

              <ul>
                Examples:
                <li>Launch New Product to Market</li>
                <li>Hire Chief Revenue Officer</li>
                <li>Get SOC2 Compliant</li>
              </ul>
              <p className="below-text">
                Krezzo is a Strategic Alignment Platform - not a task management
                tool :
              </p>
            </div>
            <SetupInitMoreBtn>
              <div>
                <InitButtonBlack>View Course </InitButtonBlack>
              </div>
            </SetupInitMoreBtn>
          </GetItDoneRight>
        </Col>
      </Row>
    </SetupStyledMain>
  );
};

export default SetupIntiative;
