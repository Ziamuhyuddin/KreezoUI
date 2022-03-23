import React from "react";
import StyleCheckInCanvas from "./StyleCheckInCanvas";
import { Row, Col, Button,Form } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CheckInCanvas = ({setcheckInCanvas}) => {
  return (
    <StyleCheckInCanvas>
      <div className="CheckIn-heading">
        KEY RESULT CHECK-IN: Get 10k users on the platform
      </div>
      <div className="CheckIn-date">February 22, 2022</div>
      <Row className="mt-4">
        <Col lg={2}>
          <div className="CheckIn-col-1-heading">Executive Summary</div>
          <div className="CheckIn-col-1-heading">Objective Status </div>
          <div className="CheckIn-col-1-heading">Key Result Performance </div>
          <div className="CheckIn-col-1-heading ">Additional Detail</div>
        </Col>
        <Col lg={10}>
          <div className="CheckIn-col-2-heading">
            Going to be a bit slow to start the year, but we’ll be picking
            things up. I am confident in the team's ability to execute what we
            need them to do in 160 charact
          </div>
          <div className=" d-flex justify-content-end  mt-1">
            Characters Remaining: 160
          </div>
          <div className="d-flex justify-content-between mt-5">
            <div>
              <div className="CheckIn-col-2-values-heading">Starting Value</div>
              <div className="CheckIn-col-2-values">0</div>
            </div>
            <div>
              <div className="CheckIn-col-2-values-heading">Previous Value</div>
              <div className="CheckIn-col-2-values">0</div>
            </div>
            <div>
              <div className="CheckIn-col-2-values-heading">Current Value</div>
              <div className="CheckIn-col-2-values">0</div>
            </div>
            <div>
              <div className="CheckIn-col-2-values-heading">Target Value</div>
              <div className="CheckIn-col-2-values">10,000</div>
            </div>
            <div>
              <div className="CheckIn-col-2-values-heading"></div>
              <div className="CheckIn-col-2-values"></div>
            </div>
          </div>
          <div className="CheckIn-result mt-4 d-flex">
            <input type="number" className="CheckIn-result-input" />
            <div>
              
    
            <div class="form-check form-switch">
              <label class="form-check-label CheckIn-result-label" for="flexSwitchCheckDefault">Confidence</label>
              <input class="form-check-input CheckIn-result-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                     
         </div>
            <div class="form-check form-switch">
              <label class="form-check-label CheckIn-result-label" for="flexSwitchCheckDefault">Pacing</label>
              <input class="form-check-input CheckIn-result-switch" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                     
         </div>
              
            </div>
          </div>
          <div className="mt-5 CheckIn-editor">
            <CKEditor
              editor={ClassicEditor}
              data=""
              config={{
                toolbar: {
                  items: [
                    "bold",
                    "italic",
                    "strikethrough",
                    "underline",
                    "subscript",
                    "superscript",
                    "|",
                    "link",
                    "|",
                    "bulletedList",
                    "numberedList",
                    "todoList",
                    "-",
                    "fontfamily",
                    "fontsize",
                    "fontColor",
                    "fontBackgroundColor",
                    "|",
                    "code",
                    "codeBlock",
                    "|",
                    "insertTable",
                    "|",
                    "outdent",
                    "indent",
                    "|",
                    "uploadImage",
                    "blockQuote",
                    "|",
                    "undo",
                    "redo",
                  ],
                },
              }}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>

          <div className="d-flex justify-content-end mt-3 gap-3">
            <Button onClick={() => setcheckInCanvas(false)} className="CheckIn-editor-cancelbtn">Cancel</Button>
            <Button className="bg-dark">Post Check-In</Button>
          </div>
        </Col>
      </Row>
    </StyleCheckInCanvas>
  );
};

export default CheckInCanvas;
