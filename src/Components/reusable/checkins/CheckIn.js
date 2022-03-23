import React from "react";
import { Col } from "react-bootstrap";
// import StyleBanner from "../../Objective/Banner/StyleBanner";
import { Done, StyleBanner } from "./style";

const CheckIn = ({head, status, color, desc}) => {
  return (
    <StyleBanner>
      <Col lg={4}>
        <div className="initiatives-card">
          <div className="d-flex justify-content-between initiatives-card-row1">
            <div>{head}</div>
            <Done color={color}>{status}</Done>
            <div className="d-flex justify-content-between init initiatives-card-row2">
              <div className="initiatives-card-row2-heading">
                {desc}
              </div>
            </div>
          </div>
        </div>
      </Col>
    </StyleBanner>
  );
};

export default CheckIn;
