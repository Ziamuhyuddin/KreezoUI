import React, { useState } from 'react'
import SelectType from './SelectType'
import SetupIntiative from './SetupIntiative'
import { Tabs, Tab } from "react-bootstrap";
import { KeyResultContainer } from '../Objective/KeyResults/Styled';

const NewInitiative = ({handleClose}) => {
  const [key, setKey] = useState("home");

  return (
    <>
    <KeyResultContainer>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="keyresultTabsMain"
      >
        <Tab disabled eventKey="home" title="1. SELECT TYPE">
          <SelectType handleCanvas={handleClose} />
        </Tab>
        <Tab disabled eventKey="profile" title="2. INITIATIVE DETAILS">
        <SetupIntiative/>
        </Tab>
      </Tabs>
    </KeyResultContainer>
    </>
  )
}

export default NewInitiative

















