import React from "react";
import StyleResult2 from "./StyleResult2";

import { Button, Form } from "react-bootstrap";
import CreateImage2 from "../../../assets/createKeyImage2.png";
const Result2 = (props) => {
  const handleChange = () => {};

  return (
    <StyleResult2 className="row">
      <div className="col-12 col-md-7 left-side">
        <div className="r-one-heading">
          <h4>Q1 - 2021</h4>
          <p>Objective: Be proactive with customer success</p>
        </div>
        <h3 className="resOneH3">Let's set up your new Key Result</h3>

        <div className="create-outer">
          <Form onSubmit={(val) => {}}>
            <div className="create-form">
              <Form.Group className="mb-3" controlId="formObjName">
                <p>Increase Metric</p>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Increase (Select Metric)"
                  className="control1"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formObjdesctiption">
                <Form.Control
                  name="from"
                  onChange={handleChange}
                  placeholder="From (Starting Value)"
                  className="control2"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formObjdesctiption">
                <Form.Control
                  name="to"
                  onChange={handleChange}
                  placeholder="To (Target Value)"
                  className="control3"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formObjdesctiption">
                <Form className="label">Why is this important? (Optional)</Form>
                <Form.Control
                  name="why"
                  onChange={handleChange}
                  placeholder="Describe the Key Result"
                  className="control4"
                />
              </Form.Group>
            </div>

            <hr className="hr" />

            <div className="row d-flex justify-content-between">
              <div className="col">
                <Button
                  className="back"
                  onClick={(e) => {
                    e.preventDefault();
                    props.setEventKey("1");
                  }}
                >
                  Back
                </Button>
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
          </Form>
        </div>
      </div>

      <div className="col-12 col-md-5 right-side text-center ">
        <img className="img-fluid" src={CreateImage2} alt="describe" />
        <h3>Initiatives vs. Key Results</h3>
        <div>
          <p>
            <b>Initiatives</b> move the needle on Key Results. These are the
            things you can control and tangibly work on. Projects, tasks,
            whatever you want to call it, it's the effort you put in!
          </p>
          <p>
            <b>Key Results </b> quantify success of the Objective. They are
            measurable over time but cannot be directly controlled. They are
            outcomes, human behavior or impact that drives business results.
            <br />
            <br />
            Want to learn more? Check out our course about Key Results &
            Initiatives!
          </p>
        </div>
      </div>
    </StyleResult2>
  );
};

export default Result2;
