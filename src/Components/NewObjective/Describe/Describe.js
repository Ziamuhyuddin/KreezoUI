import React, { useState } from "react";
import StyleDescribe from "./StyleDescribe";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from "react-bootstrap";
import ObjDescribeImage from "../../../assets/objDescribeImage.png";



const Describe = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    describe: "",
    date: "",
    alignment: "",
  });

  const handleChange = (e) => {};

  return (
    <StyleDescribe className="row">
      <div className="col-12 col-md-7 form-side">
        <div className="describe-heading">
          <h3>Create a New Objective</h3>
          <p className="mb-3">Enter the Details of your new objective</p>
        </div>
        <div className="describe-outer">
          <Form
            onSubmit={(val) => {
              console.log("val are: ", val);
            }}
          >
            <div className="describe-form">
              <Form.Group className="mb-3" controlId="formObjName">
                <Form.Label>What is to be achieved?</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Name the objective"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formObjdesctiption">
                <Form.Label>Why is this important?</Form.Label>
                <Form.Control
                  name="describe"
                  onChange={handleChange}
                  as="textarea"
                  rows="3"
                  placeholder="Describe and give context about the Objective"
                />
              </Form.Group>
              <div className="row d-flex justify-content-between">
                <div className="col-5">
                  <Form.Group className="mb-3" controlId="formDate">
                    <Form.Label>Time Frame</Form.Label>

                    <DatePicker
                      name="date"
                      className="form-control"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Form.Group>
                </div>
                <div className="col-5">
                  <Form.Group className="mb-3" controlId="formAlignment">
                    <Form.Label>Alignment</Form.Label>
                    <Form.Control
                      type="text"
                      name="alignment"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>

            <hr className="hr" />

            <div className="row d-flex justify-content-between">
              <div className="col">
                <Button onClick={() => props.setnewObjectiveCanvas(false)} className="cancel">Cancel</Button>
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

      <div className="col-12 col-md-5 text-side ">
        <img className="img-fluid" src={ObjDescribeImage} alt="describe" />
        <h3>Why Objectives are important!</h3>
        <p>
          Put some thought into your Objectives before broadcasting to the
          entire company. These are the critical priorities you want to achieve,
          and you will be qnuantifying achievement with Key Results! Keep them
          concise, compelling, and motivating!
        </p>

        <Button className="next"> View Course</Button>
      </div>
    </StyleDescribe>
  );
};

export default Describe;
