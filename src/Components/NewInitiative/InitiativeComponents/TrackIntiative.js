import React, { useState } from 'react'
import { Tabs, Tab } from "react-bootstrap";
import { KeyResultContainer } from '../../Objective/KeyResults/Styled';
import SelectType from '../SelectType';
import SetupIntiative from '../SetupIntiative';

const TrackIntiative = ({
 img,Form,handleClose}) => {
   
  const [key, setKey] = useState("profile");

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
          <SelectType />
        </Tab>
        <Tab disabled eventKey="profile" title="2.INITIATIVE DETAILS">
        <SetupIntiative handleCanvas={handleClose} img={img} Form={Form}/>
        </Tab>
      </Tabs>
    </KeyResultContainer>
    </>
  )
}

export default TrackIntiative

















