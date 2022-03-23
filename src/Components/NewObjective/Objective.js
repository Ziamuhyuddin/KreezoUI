import React, { useState } from "react";
import StyleObjective from "./StyleObjective";
import { Tab, Tabs } from "react-bootstrap";
import Describe from "./Describe/Describe";
import Design from "./Design/Design";


const   Objective = ({setnewObjectiveCanvas}) => {
  const [eventKey, setEventKey] = useState("1");
  const handleTabChange = (val) => {
    setEventKey(val);
  };
 
  return (
    <StyleObjective className="">
      <Tabs activeKey={eventKey} id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="1" title="1.DESCRIBE" className="tab">
          <Describe setEventKey={handleTabChange} setnewObjectiveCanvas={setnewObjectiveCanvas} />
        </Tab>
        <Tab eventKey="2" title="2.DESIGN & ASSIGN" className="tab">
          <Design setEventKey={handleTabChange} />
        </Tab>
      </Tabs>
    </StyleObjective>
  );
};

export default Objective;
