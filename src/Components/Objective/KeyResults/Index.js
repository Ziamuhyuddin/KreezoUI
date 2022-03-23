import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import ResultDetail from "./ResultDetail";
import SelectType from "./SelectType";
import { KeyResultContainer } from "./Styled";

const Index = () => {
  const [key, setKey] = useState("home");

  return (
    <KeyResultContainer>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="keyresultTabsMain"
      >
        <Tab eventKey="home" title="1. Select Type">
          <SelectType />
        </Tab>
        <Tab eventKey="profile" title="2. Key Result Details">
          <ResultDetail />
        </Tab>
      </Tabs>
    </KeyResultContainer>
  );
};

export default Index;
