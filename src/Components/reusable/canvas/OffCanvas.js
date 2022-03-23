import React, { useState } from "react";
import Topbar from "../topbar/Topbar";
import StyleBanner from "../../Objective/Banner/StyleBanner";
import {
  AS,
  Butt,
  ButtText,
  Circle,
  Comm,
  Connect,
  Frame,
  Graph,
  Head,
  Input,
  Key,
  Left,
  Own,
  Para,
  Rect,
  Redu,
  Right,
  Smith,
  Wrapper,
} from "./style";
import VectorDark from "../../../assets/VectorDark.png";
import VectorBlack from "../../../assets/VectorBlack.png";
import VectorBlue from "../../../assets/VectorBlue.png";
import VectorPurple from "../../../assets/VectorPurple.png";
import Plus from "../../../assets/Plus.png";
import connected from "../../../assets/connected.png";
import LeftArrow from "../../../assets/LeftArrow.svg";
import charDark from "../../../assets/chatDark.png";
import Comment from "../comment/Comment";
import CheckIn from "../checkins/CheckIn";
import SideBarCanvas from "../SideBarCanvas/Index";
import CheckInCanvas from "./CheckInCanvas";
import EmailAt from "../../buttonClick/EmailAt/EmailAt";
import NewInitiative from '../../NewInitiative/NewInitiative';
import SmalCanvas from '../SideBarCanvas/SmalCanvas'

const OffCanvas = () => {
  const [planFormCanvas, setplanFormCanvas] = useState(false);
  const [formCanvas, setFormCanvas] = useState(false);
  const [initiative, setinitiative] = useState(false)
  const [checkInCanvas, setcheckInCanvas] = useState(false)

  const handleShut = () => setFormCanvas(false);

  const handleClose = () => {
    setplanFormCanvas(false)
    setinitiative(false)
    setcheckInCanvas(false)
  };
  return (
    <StyleBanner>
      <SmalCanvas
        placement="end"
        show={planFormCanvas}
        handleClose={handleClose}
        children={
        <EmailAt 
          track='TRACK OUTPUT'
          heading='Email 100 at risk customers'
          desc='In order to improve our onboarding experience we believe a relaunch of SSO will improve the outcomes.'
          face='98 of 100' color='#4EC33B'
          checks='show'
          setplanFormCanvas={setplanFormCanvas}
        />
      }
      />
      <SmalCanvas
        placement="end"
        show={formCanvas}
        handleClose={handleShut}
        children={
        <EmailAt 
          track='GET IT DONE'
          heading='Relaunch SSO experience'
          desc='In order to improve our onboarding experience we believe a relaunch of SSO will improve the outcomes.'
          face='NOT DONE' color='rgba(0,0,0,0.3)'
          setplanFormCanvas={setFormCanvas}
        />
      }
      />
      <SideBarCanvas show={checkInCanvas} placement='end' handleClose={handleClose} children={<CheckInCanvas setcheckInCanvas={setcheckInCanvas} />}  />
      <SideBarCanvas show={initiative} placement='end' handleClose={handleClose} children={<NewInitiative handleClose={handleClose}/>}  />
      <Topbar  arrow={LeftArrow} color="#30009B" border="1px solid #D8D8D8" />
      <Wrapper>
        <Left>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Key left="25px" top="23px">
              <div>
                <img src={VectorDark} style={{ color: "#4E5AC7" }} alt="" />
              </div>
              <div>
                <Head left="12px" font="600" fsize="14px">
                  KEY RESULT/INCREASE OUTCOME
                </Head>
              </div>
            </Key>
            <Butt
              top="17px"
              right="3%"
              height="24px"
              width="12%"
              border="1px solid #30009B"
              color="#30009B"
            >
              <ButtText onClick={() => setcheckInCanvas(true)} color="white">+Check-In</ButtText>
            </Butt>
          </div>
          <Redu>
            <p>Reduce churn from 10% to 1%</p>
          </Redu>
          <Para>
            Without a significant reduction in customer churn, we will have to
            generate 150% more revenue
          </Para>
          <div style={{ display: "flex" }}>
            <Own top="34px" left="25px">
              <Frame color="rgba(0, 0, 0, 0.5)">Owner</Frame>
              <Circle
                height="28px"
                width="28px"
                radius="14px"
                left="3px"
                top="3px"
                border="1.5px solid #FFFFFF"
                color="#6288D1"
              >
                <AS>AS</AS>
              </Circle>
            </Own>
            <Own top="34px" left="38px">
              <Frame color="rgba(0, 0, 0, 0.5)">Contributors</Frame>
              <Circle top="5px">
                <img src={Plus} alt="" />
              </Circle>
            </Own>
          </div>
          <Connect>
            <img src={connected} alt="" />
            <div>Connect</div>
          </Connect>
          <div className="dark-chart" >
           <img src={charDark}/>
          </div>
          <Key left="35px" top="42px">
            <div>
              <img src={VectorBlack} alt="" style={{ color: "#4E5AC7" }} />
            </div>
            <Head left="27px" font="600" fsize="16px" lheight="140%">
              <div>CHECK_INS</div>
            </Head>
          </Key>
          <Comm top="20px" height='113px'>
            <Comment 
              name='Tim Smith'
              date='9/1/2021'
              check='Checked-In on the Key Result:'
              mail=' Reduce churn from 10% to 1%'
              update='Date Update:'
              value='9% ---> 4%'
              summary='Executive Summary:'
              desc='“Big push -- nice!”'
            />
          </Comm>
          <Comm top="5px" height='119px'>
            <Comment 
              name='Bob Smith'
              date='9/1/2021'
              check='Checked-In on the Initiative:'
              mail='Email 100 at risk customers'
              update='Status Update:'
              value='Done'
              summary='Executive Summary:'
              desc='“Send compelling offer of 20% discount for early renewal + new feature request and the customers loved it!'
              descWidth='860px'
            />
          </Comm>
          <Key left="32px" top="35px">
            <div>
              <img src={VectorPurple} style={{ color: "#4E5AC7" }} alt="" />
            </div>
            <Head left="7px" font="400" fsize="14px" lheight="19px">
              <div>COMMENTS</div>
            </Head>
          </Key>
          <div>
            <Input placeholder="Add a comment"/>
          </div>
        </Left>
        <Right>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{ display: "flex", marginTop: "20px", marginLeft: "30px" }}
            >
              <div>
                <img src={VectorBlue} style={{ color: "#4E5AC7" }} alt="" />
              </div>
              <Head left="27px" font="400" fsize="14px" lheight="19px">
                <div>INITIATIVES</div>
              </Head>
            </div>
            <Butt
              top="20px"
              right="30px"
              width="16%"
              height="22px"
              border="1px solid grey"
              color="#FFFFFF"
              onClick={() => setinitiative(true)}
            >
              <ButtText color="#1C8EFF">+ initiative</ButtText>
            </Butt>
          </div>
          <div
            onClick={() => setplanFormCanvas(true)}
            style={{ marginTop: "50px", marginLeft: "3%" }}
          >
            <CheckIn 
              head='GET IT DONE'
              color='#4EC33B'
              status='DONE!'
              desc='Email 100 at risk customers'
            />
          </div>
          <div
            onClick={() => setFormCanvas(true)} 
            style={{ marginTop: "30px", marginLeft: "3%" }}
          >
            <CheckIn 
              head='GAUGE PROGRESS'
              color='#78838C'
              status='20%'
              desc='Create customer loyalty program'
            />
          </div>
        </Right>
      </Wrapper>
    </StyleBanner>
  );
};

export default OffCanvas;
