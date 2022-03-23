import React, { useState } from "react";
import { Row, Button, Col, ProgressBar } from "react-bootstrap";
import StyleBanner from "./StyleBanner";
import { FaEllipsisV } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import Asbutton from "../../../assets/Asbutton.svg";
import Objectivebtn from "../../../assets/Objective-btn.svg";
import KeyResult from "../../../assets/KeyResult.svg";
import SpeedMeter from "../../../assets/SpeedMeter.svg";
import TrackProgress from "../../../assets/TrackProgress.svg";
import NotDone from "../../../assets/NotDone.svg";
import AlmostDone from "../../../assets/AlmostDone.svg";
import Achieved from "../../../assets/Achieved.svg";
import Comments from "../../../assets/Comments.svg";
import SimpleDowArrow from "../../../assets/SimpleDowArrow.svg";
import CheckIns from "../../../assets/Check-Ins.svg";
import SideBarCanvas from "../../reusable/SideBarCanvas/Index";
import OffCanvas from "../../reusable/canvas/OffCanvas";
import KeyResultMain from "../../CreateKey/CreateKey";
import AddContribution from "./AddContribution";
import CheckIn from '../../Objective/CheckIn/CheckIn'

const Banner = () => {
  const [planFormCanvas, setplanFormCanvas] = useState(false);
  const [keyResultCanvas, setkeyResultCanvas] = useState(false);
  const [checkInCanvas, setcheckInCanvas] = useState(false)
  const [show, setShow] = useState(false);



  const handleClose = () => {
    setplanFormCanvas(false);
    setkeyResultCanvas(false);
    setcheckInCanvas(false)
  };

  const handleCancel = () => {
    setShow(false);
  };
  return (
    <StyleBanner>
      <SideBarCanvas
        placement="end"
        show={planFormCanvas}
        handleClose={handleClose}
        children={<OffCanvas  />}
        width="90%"
      />
      <SideBarCanvas
        placement="end"
        show={checkInCanvas}
        handleClose={handleClose}
        children={<CheckIn setcheckInCanvas={setcheckInCanvas}  />}
        width="90%"
      />
      <SideBarCanvas
        placement="end"
        show={keyResultCanvas}
        handleClose={handleClose}
        children={<KeyResultMain setkeyResultCanvas={setkeyResultCanvas} />}
      />
      <div className="objective-banner">
        <Row className="">
          <div className="d-flex justify-content-between">
            <div>
              <span className="objective-banner-btn1">
                {" "}
                <img src={Objectivebtn} /> Objective
              </span>
            </div>
            <div className="d-flex ">
              <Button onClick={() => setcheckInCanvas(true) } className="objective-banner-btn2">+ Check-In</Button>
              <FaEllipsisV size={20} />
            </div>
          </div>
        </Row>
        <div className="objective-banner-mainheading">
          Be Proactive with Customer Success
        </div>
        <p className="objective-banner-paragraph">
          This is an optional description that the creator puts in to describe
          what this objective is about. It’s intended to provide their team with
          something like a mission statement, guidance, context or something
          inspiring.
        </p>
        <div className="objective-banner-para d-flex pb-2">
          <div className="me-5"> Time Frame</div>
          <div>Pillar</div>
        </div>
        <div className="objective-banner-para2 d-flex">
          <div className="me-4"> Q1 2022 </div>
          <div className="ms-5"> Customer Success</div>
        </div>
        <div className="objective-banner-btnlabel d-flex">
          <div className="me-4"> Owner </div>
          <div className="ms-5"> Contributors</div>
        </div>

        <div className="objective-banner-button d-flex pt-2 ">
          <div className="objective-banner-button1 me-5 ">
            AS
            <img
              src={Asbutton}
              className="objective-banner-button1-icon-book"
              alt="as button"
            />
          </div>

          <div className="objective-banner-button2 ms-5">
            <FaPlus
              style={{
                cursor: "pointer",
              }}
              onClick={() => setShow(true)}
              className="icon"
            />
          </div>
          {show && (
            <div className="ms-4">
              <AddContribution handleClose={handleCancel} />
            </div>
          )}
        </div>
        <div className="objective-banner-successrate">99%</div>
      </div>
      <div className="key-result">
        <div className="d-flex mt-2 justify-content-between">
          <div className="key-result-btn1">
            <img src={KeyResult} className="pe-2" />
            &nbsp;Key results
          </div>
          <Button
            onClick={() => setkeyResultCanvas(true)}
            className="key-result-btn2"
          >
            + Key Result
          </Button>
        </div>
        <Row className="mt-3 g-3 gx-5">
          <Col lg={6}>
            <div className="key-result-cards">
              <div className="key-result-cards-1st-heading">
                INCREASE OUTCOME
              </div>
              <div className="key-result-cards-2nd-heading">
                Get 10,000 users on the platform
              </div>
              <div className="d-flex justify-content-between">
                <ProgressBar
                  variant="danger"
                  now={10}
                  className="key-result-cards-progressBar"
                />
                <ProgressBar
                  variant="danger"
                  now={0}
                  className="key-result-cards-progressBar"
                />
                <ProgressBar
                  variant="danger"
                  now={0}
                  className="key-result-cards-progressBar"
                />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="key-result-cards">
              <div className="key-result-cards-1st-heading">
                INCREASE OUTCOME
              </div>
              <div className="key-result-cards-2nd-heading">
                $50 million in ARR
              </div>
              <div className="d-flex justify-content-between">
                <ProgressBar
                  variant="warning"
                  now={100}
                  className="key-result-cards-progressBar"
                />
                <ProgressBar
                  variant="warning"
                  now={0}
                  className="key-result-cards-progressBar"
                />
                <ProgressBar
                  variant="warning"
                  now={0}
                  className="key-result-cards-progressBar"
                />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div
              className="key-result-cards"
              onClick={() => setplanFormCanvas(true)}
            >
              <div className="key-result-cards-1st-heading">
                INCREASE OUTCOME
              </div>
              <div className="key-result-cards-2nd-heading">
                Reduce churn from 10% to 1%
              </div>
              <div className="d-flex justify-content-between">
                <ProgressBar
                  variant="success"
                  now={100}
                  className="key-result-cards-progressBar"
                />
                <ProgressBar
                  variant="success"
                  now={100}
                  className="key-result-cards-progressBar"
                />
                <ProgressBar
                  variant="success"
                  now={0}
                  className="key-result-cards-progressBar"
                />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="key-result-cards">
              <div className="key-result-cards-1st-heading">
                INCREASE OUTCOME
              </div>
              <div className="key-result-cards-2nd-heading">
                100 new customers
              </div>
              <div className="d-flex justify-content-between">
                <ProgressBar
                  variant="danger"
                  now={50}
                  className="key-result-cards-progressBar"
                />
                <ProgressBar
                  variant="danger"
                  now={0}
                  className="key-result-cards-progressBar"
                />
                <ProgressBar
                  variant="danger"
                  now={0}
                  className="key-result-cards-progressBar"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="initiatives">
        <Row className="g-3 gx-5">
          <Col lg={4}>
            <div className="initiatives-card">
              <div className="d-flex justify-content-between initiatives-card-row1">
                <div>GENERATE OUTPUT</div>
                <div>98 / 100</div>
                <div className="d-flex justify-content-between init initiatives-card-row2">
                  <div className="initiatives-card-row2-heading">
                    Email 100 at risk customers
                  </div>
                  <div>
                    <img
                      src={SpeedMeter}
                      className="initiatives-card-row2-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="initiatives-card">
              <div className="d-flex justify-content-between initiatives-card-row1">
                <div>GET IT DONE</div>
                <div>NOT DONE</div>
                <div className="d-flex justify-content-between init initiatives-card-row2">
                  <div className="initiatives-card-row2-heading">
                    Relaunch SSO experience
                  </div>
                  <div>
                    <img
                      src={NotDone}
                      className="initiatives-card-row2-img-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="initiatives-card">
              <div className="d-flex justify-content-between initiatives-card-row1">
                <div>TRACK progress</div>
                <div>20%</div>
                <div className="d-flex justify-content-between init initiatives-card-row2">
                  <div className="initiatives-card-row2-heading">
                    Create customer loyalty program
                  </div>
                  <div>
                    <img
                      src={TrackProgress}
                      className="initiatives-card-row2-img-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="initiatives-card">
              <div className="d-flex justify-content-between initiatives-card-row1">
                <div>ACHIEVE MILESTONES</div>
                <div>3 of 5 achieved</div>
                <div className="d-flex justify-content-between init initiatives-card-row2">
                  <div className="initiatives-card-row2-heading">
                    Launch ATLAS product line
                  </div>
                  <div>
                    <img
                      src={Achieved}
                      className="initiatives-card-row2-img-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="initiatives-card">
              <div className="d-flex justify-content-between initiatives-card-row1">
                <div>TRACK STATUS</div>
                <div>ALMOST DONE</div>
                <div className="d-flex justify-content-between init initiatives-card-row2">
                  <div className="initiatives-card-row2-heading">
                    Launch the thingy
                  </div>
                  <div>
                    <img
                      src={AlmostDone}
                      className="initiatives-card-row2-img-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="check-in">
        <div className="check-in-heading">
          <img src={CheckIns} /> &nbsp; CHECK-INS
        </div>
        {["", "", ""].map((v) => (
          <div className="check-in-card mb-3">
            <div className="d-flex gap-4">
              <div>
                <div className="check-in-card-container">
                  {" "}
                  <img
                    src={SimpleDowArrow}
                    className="check-in-card-container-img"
                  />
                </div>
              </div>
              <div>
                <div className="d-flex ">
                  <div className="check-in-date">February 1, 2022 {">"} </div>
                  <div>
                    <span className="fw-bold">Initiative Check-In </span>
                    <span> By</span>{" "}
                    <span className="fw-bold">Stephen Newman</span>
                  </div>
                </div>
                <div className="fw-bolder">Email 100 at risk customers</div>
                <div>
                  <span className="check-in-comments-area">
                    Progress Update:
                  </span>{" "}
                  30 ---{">"} <span className="fw-bolder">40</span>
                </div>
                <div>
                  <span className="check-in-comments-area">
                    Executive Summary:
                  </span>{" "}
                  “Crusing right along.”
                </div>
                <div className="d-flex gap-5 check-in-last-comment">
                  <div className="text-decoration-underline ">
                    View Check-In Details
                  </div>
                  <div className="text-decoration-underline ">
                    View Initiative
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="comments">
        <div className="comments-heading">
          <img src={Comments} /> &nbsp; COMMENTS
        </div>
        <input
          type="text"
          placeholder="Add a comment!"
          className="comments-input"
        />
      </div>
    </StyleBanner>
  );
};

export default Banner;
