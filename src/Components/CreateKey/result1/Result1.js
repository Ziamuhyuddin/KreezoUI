import React from "react";
import StyleResult1 from "./StyleResult1";

import { Button } from "react-bootstrap";
import CreateImage from "../../../assets/createTextImage.png";
import Decrease from "../../../assets/createDecrease.png";
import Increase from "../../../assets/createIncrease.png";

const Result1 = (props) => {
  return (
    <StyleResult1 className="row ">
      <div className="col-12 col-md-7 left-side">
        <div className="r-one-heading">
          <h4>Q1 - 2021</h4>
          <p>Objective: Be proactive with customer success</p>
        </div>
        <h3 className="resOneH3">Let's set up your new Key Result</h3>
        <p>What metric would you like to improve?</p>

        <div className="resCards">
          <div className="resCard">
            <img src={Increase} alt="" />
            <h4>Increase Metric</h4>
            <p>Ex: Increase sales to $1M MRR</p>
          </div>
          <div className="resCard">
            <img src={Decrease} alt="" />
            <h4>Decrease Metric</h4>
            <p>Ex: Decrease customer churn to 10% </p>
          </div>
        </div>

        <hr className="hr" />

        <div className="row d-flex justify-content-between">
          <div className="col">
            <Button onClick={() => props.setkeyResultCanvas(false)} className="cancel">Cancel</Button>
          </div>
          <div className="col d-flex justify-content-end">
            <Button
              type="submit"
              className="next"
              onClick={(e) => {
                e.preventDefault();
                props.setEventKey("2");
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-5 right-side text-center ">
        <img className="img-fluid" src={CreateImage} alt="describe" />
        <h3>Key Results vs. KPIs</h3>
        <div>
          <p>Key Results are always measurable and verifiable.</p>
          <p>Key Results are not “tasks.”</p>
          <p>Key Results are influenced, but not controlled.</p>
          <p>Key Results are measurable over time.</p>
          <p>Key Results are metrics you want to IMPROVE.</p>
          <p>Key Results are either outcomes or impact.</p>
          <p>Key Results are your most critical priorities.</p>
          <p>KPIs are any metric related to any part of your business.</p>
          <p>KPIs are “business as usual.”</p>
          <p>KPIs are what you build data visualizations dashboards with.</p>
          <p>KPIs are lacking context and focused effort to improve.</p>
          <p>All Key Results are KPIs, but not all KPIs are Key Results.</p>
        </div>
        <Button className="next">Learn More</Button>
      </div>
    </StyleResult1>
  );
};

export default Result1;
