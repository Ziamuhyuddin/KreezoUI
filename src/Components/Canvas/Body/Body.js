import React, { useState } from "react";
import { Row, Col, Button, ProgressBar, Form } from "react-bootstrap";
import StyleBody from "./StyleBody";
import { Tree, TreeNode } from "react-organizational-chart";
import { StyledNode } from "./StyleBody";
import { useNavigate } from "react-router-dom";
import SideBarCanvas from "../../reusable/SideBarCanvas/Index";
import Objective from '../../NewObjective/Objective';

const Body = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(true);
  const [newObjectiveCanvas, setnewObjectiveCanvas] = useState(false);

  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  const handleClose = () => {
    setnewObjectiveCanvas(false)
  };


  return (
    <div>
     <SideBarCanvas placement='end' show={newObjectiveCanvas} handleClose={handleClose} children={<Objective setnewObjectiveCanvas={setnewObjectiveCanvas} />}  />
      <StyleBody>
        <div className="body-container">
          <Row>
            <Col lg={10}>
              <Form.Select
                className="body-dropdown-menu"
                onChange={(e) => handleSelect(e)}
              >
                <option
                  value="1"
                  className="bg-white border border-white text-dark text-center"
                >
                  2022 / Q1
                </option>
                <option
                  value="2"
                  className="bg-white border border-white text-dark text-center "
                >
                  2022 / Q2
                </option>
                <option
                  value="3"
                  className="bg-white border border-white text-dark text-center"
                >
                  2022 / Q3
                </option>
                <option
                  value="4"
                  className="bg-white border border-white text-dark text-center"
                >
                  2022 / Q4
                </option>
              </Form.Select>
            </Col>

            <Col lg={2} className="d-flex">
              <Button
                onClick={() => setnewObjectiveCanvas(true)}
                className="body-2nd-button"
              >
                {" "}
                + Objective{" "}
              </Button>

              <Form.Select
                className="body-dropdown-menu"
                onChange={(e) => handleSelect(e)}
              >
                <option
                  value="1"
                  className="bg-secondary border border-white text-white text-center"
                >
                  Draft
                </option>
                <option
                  value="2"
                  className="bg-white border border-white text-dark text-center "
                >
                  Live
                </option>
                <option
                  value="3"
                  className="bg-warning border border-white text-dark text-center"
                >
                  Pending
                </option>
                <option
                  value="4"
                  className="bg-dark border border-white text-white text-center"
                >
                  Archive
                </option>
              </Form.Select>
            </Col>
          </Row>
        </div>
        <div className="tree">
          <Tree
            lineWidth={"20px"}
            lineHeight={"40px"}
            lineColor={"rgba(120, 131, 140, 0.23)"}
            lineBorderRadius={"14px"}
            label={
              <StyledNode>
                <div className="root-box">
                  <div className="root-box-small-heading">Company</div>
                  <div className="root-box-big-heading">ACME Company</div>
                </div>
              </StyledNode>
            }
          >
            <TreeNode
              label={
                <StyledNode>
                  <div className="level-1">
                    <div className="level-1-small-heading">Pillar</div>
                    <div className="level-1-big-heading">Go-to-Market</div>
                  </div>
                </StyledNode>
              }
            >
              {value != 4 ? (
                <>
                  <TreeNode
                    label={
                      <StyledNode>
                        <div className="level-2">
                          <div className="level-2-img-section">
                            <div className="level-2-img-section-small-heading">
                              OBJECTIVE
                            </div>
                            <div className="level-2-img-section-large-heading">
                              Launch a Flipping Satellite Into Space Like Whoa!
                            </div>
                            <Button className="level-2-img-section-button">
                              SN
                            </Button>
                          </div>
                          <div className="progress-bar">
                            <ProgressBar variant="danger" now={10} />
                          </div>
                        </div>
                      </StyledNode>
                    }
                  />
                </>
              ) : null}
            </TreeNode>
            <TreeNode
              label={
                <StyledNode>
                  <div className="level-1">
                    <div className="level-1-small-heading">Pillar</div>
                    <div className="level-1-big-heading">Customers</div>
                  </div>
                </StyledNode>
              }
            >
              {value != 4 ? (
                <>
                  <TreeNode
                    label={
                      <StyledNode>
                        <div
                          className="level-2-1"
                          onClick={() => navigate("/objective")}
                        >
                          <div className="level-2-1-img-section">
                            <div className="level-2-1-img-section-small-heading">
                              OBJECTIVE
                            </div>
                            <div className="level-2-1-img-section-large-heading">
                              Be proactive about customer success
                            </div>
                            <Button className="level-2-1-img-section-button">
                              SN
                            </Button>
                          </div>
                          <div className="progress-bar">
                            <ProgressBar variant="success" now={50} />
                          </div>
                        </div>
                      </StyledNode>
                    }
                  >
                    {value == 1 ? (
                      <>
                        <TreeNode
                          label={
                            <StyledNode>
                              <div className="level-2-1">
                                <div className="level-3-2-img-section">
                                  <div className="level-3-2-img-section-small-heading">
                                    OBJECTIVE
                                  </div>
                                  <div className="level-3-2-img-section-large-heading">
                                    Generate some referrals!
                                  </div>
                                  <Button className="level-3-2-img-section-button">
                                    SN
                                  </Button>
                                </div>
                                <div className="progress-bar">
                                  <ProgressBar variant="info" now={25} />
                                </div>
                              </div>
                            </StyledNode>
                          }
                        />
                      </>
                    ) : null}
                  </TreeNode>
                </>
              ) : null}
            </TreeNode>
            <TreeNode
              label={
                <StyledNode>
                  <div className="level-1">
                    <div className="level-1-small-heading">Pillar</div>
                    <div className="level-1-big-heading">Employees</div>
                  </div>
                </StyledNode>
              }
            >
              {value != 4 ? (
                <>
                  <TreeNode
                    label={
                      <StyledNode>
                        <div className="level-2-2">
                          <div className="level-2-2-img-section">
                            <div className="level-2-2-img-section-small-heading">
                              OBJECTIVE
                            </div>
                            <div className="level-2-2-img-section-large-heading">
                              Build a High-Five Type of Culture!
                            </div>
                            <Button className="level-2-2-img-section-button">
                              SN
                            </Button>
                          </div>
                          <div className="progress-bar">
                            <ProgressBar variant="warning" now={40} />
                          </div>
                        </div>
                      </StyledNode>
                    }
                  >
                    {value == 3 ? (
                      <TreeNode
                        label={
                          <StyledNode>
                            <div className="level-2-2">
                              <div className="level-2-2-img-section">
                                <div className="level-2-2-img-section-small-heading">
                                  OBJECTIVE
                                </div>
                                <div className="level-2-2-img-section-large-heading">
                                  Build a High-Five Type of Culture!
                                </div>
                                <Button className="level-2-2-img-section-button">
                                  SN
                                </Button>
                              </div>
                              <div className="progress-bar">
                                <ProgressBar variant="primary" now={5} />
                              </div>
                            </div>
                          </StyledNode>
                        }
                      />
                    ) : null}
                  </TreeNode>
                </>
              ) : null}
            </TreeNode>
          </Tree>
        </div>
      </StyleBody>
    </div>
  );
};

export default Body;
