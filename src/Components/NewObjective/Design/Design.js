import React from "react";
import StyleDesign from "./StyleDesign";
import "react-datepicker/dist/react-datepicker.css";
import { Button, FormControl, Form } from "react-bootstrap";
import DesignImage from "../../../assets/designPicture.png";
import DesignBackground from "../../../assets/designBack1.png";
import Gallery2 from "../../../assets/designBack2.png";
import Gallery3 from "../../../assets/designBack3.png";
import Gallery4 from "../../../assets/designback4.png";
import Gallery5 from "../../../assets/designBack5.png";
import Gallery6 from "../../../assets/designBack6.png";
import Gallery7 from "../../../assets/designBack7.png";
import Gallery8 from "../../../assets/designBack8.png";
import FooterCard1 from "../../../assets/designCard1.png";
import FooterCard2 from "../../../assets/designCard2.png";
import FooterCard3 from "../../../assets/designCard3.png";
import FooterCard4 from "../../../assets/designCard4.png";

const Design = (props) => {
  return (
    <StyleDesign className="row">
      <div className="col-12 col-md-7 image-side">
        <div className="design-heading">
          <h3>Select an Inspirational Background</h3>
          <p className="mb-3">
            Find an inspirational and relevant image for the OKR Viewer page.
          </p>
        </div>

        <div className="design-container">
          <p>Background</p>
          <div className="background d-flex align-items-center">
            <div>
              <img src={DesignBackground} alt="background" />
            </div>
            <div className="Line"></div>
            <div className="grid">
              <div className="image">
                <img src={Gallery2} alt="" />
              </div>
              <div className="image">
                <img src={Gallery2} alt="" />
              </div>
              <div className="image">
                <img src={Gallery3} alt="" />
              </div>
              <div className="image">
                <img src={Gallery4} alt="" />
              </div>
              <div className="image">
                <img src={Gallery5} alt="" />
              </div>
              <div className="image">
                <img src={Gallery6} alt="" />
              </div>
              <div className="image">
                <img src={Gallery7} alt="" />
              </div>
              <div className="image">
                <img src={Gallery8} alt="" />
              </div>
            </div>
          </div>

          <FormControl className="designInput" placeholder="Show unsplash" />

          <div className="textCards d-flex justify-content-start">
            <div className="textCard">
              {" "}
              <p>abstract</p>
            </div>
            <div className="textCard">
              <p>business</p>
            </div>
            <div className="textCard">
              <p>teamwork</p>
            </div>
            <div className="textCard">
              <p>technology</p>
            </div>
            <div className="textCard">
              <p>space</p>
            </div>
            <div className="textCard">
              <p>people</p>
            </div>
          </div>
          <div className="designFooter d-flex justify-content-between mx-0">
            <img src={FooterCard1} alt="" />
            <img src={FooterCard2} alt="" />
            <img src={FooterCard3} alt="" />
            <img src={FooterCard4} alt="" />
            <img src={FooterCard4} alt="" />
          </div>
        </div>
        {/* white container ends here */}
        <Form.Select
          className="select form-control"
          aria-label="Default select example"
        >
          <option>select One</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <hr className="breakLine" />

        <div className="row d-flex justify-content-between">
          <div className="col">
            <Button
              onClick={(e) => {
                e.preventDefault();
                props.setEventKey("1");
              }}
              className="cancel"
            >
              back
            </Button>
          </div>
          <div className="col d-flex justify-content-end">
            <Button className="next">Create</Button>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-5 text-side ">
        <img src={DesignImage} alt="design" />
        <h3>People. Focus. Results.</h3>
        <p>
          Learn how to write OKRs that inspire, motivate, and drive measurable
          performance with our on-demand course called “The Fundamanetals of
          OKRs” -- Check it out!
        </p>

        <Button className="next"> View Course</Button>
      </div>
    </StyleDesign>
  );
};

export default Design;
