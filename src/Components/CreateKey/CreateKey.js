import React, { useState } from "react";
import StyleCreatekey from "./StyleCreateKey";
import { Tab, Tabs } from "react-bootstrap";
import Result1 from "./result1/Result1";
import Result2 from "./result2/Result2";



const CreateKey = ({setkeyResultCanvas}) => {
  const [eventKey, setEventKey] = useState("1");
  const handleTabChange = (val) => {
    setEventKey(val);
  };

  return (
    <StyleCreatekey className="">
      <Tabs activeKey={eventKey} id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="1" title="1. SELECT TYPE" className="tab">
          <Result1 setEventKey={handleTabChange} setkeyResultCanvas={setkeyResultCanvas} />{" "}
        </Tab>{" "}
        <Tab eventKey="2" title="2. KEY RESULT DETAILS" className="tab">
          <Result2 setEventKey={handleTabChange} />{" "}
        </Tab>{" "}
      </Tabs>{" "}
    </StyleCreatekey>
  );
};

export default CreateKey;
