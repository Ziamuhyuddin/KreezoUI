import React from "react";
import Topbar from "../../reusable/topbar/Topbar";
import ArrowBlack from "../../../assets/ArrowBlack.png";
import VectorBlue from "../../../assets/VectorBlue.png";
import VectorBlack from "../../../assets/VectorBlack.png";
import VectorPurple from "../../../assets/VectorPurple.png";
import Plus from "../../../assets/Plus.png";
import connected from "../../../assets/connected.png";
import Comment from "../../reusable/comment/Comment";
import { Key, Head, Wrapper, Butt, ButtText, Para, Own, Frame, Circle, AS, Connect, White, Input, Flex, Down, Last, Can, P } from "./style";

const EmailAt = ({track, heading, desc, face, color, checks , setplanFormCanvas}) => {
  return (
    <Wrapper>
      <Topbar arrow={ArrowBlack} color="#009BFE" border="1px solid #D8D8D8" />
      <Flex justify="space-between">
        <Key left="28px" top="27px">
          <div>
            <img src={VectorBlue} style={{ color: "#4E5AC7" }} alt="" />
          </div>
          <div>
            <Head
              left="11px"
              font="600"
              fsize="14px"
              color="#78838C"
              spacing="1.4px"
            >
              INITIATIVE/{track}
            </Head>
          </div>
        </Key>
        <Butt
          top="21px"
          right="4.5%"
          height="22px"
          width="11%"
          border="1px solid #009BFE"
          color="#009BFE"
        >
          <ButtText color="white">+Check-In</ButtText>
        </Butt>
      </Flex>
      <Flex justify="space-between">
        <Key left="27px" top="17px">
          <Head font="700" fsize="24px" color="#000000" spacing="0.4px">
            {heading}
          </Head>
        </Key>
        <Butt top="22px" right="4.5%">
          <Head font="800" fsize="20px" color={color}>
            {face}
          </Head>
        </Butt>
      </Flex>
      <Para>
        {desc}
      </Para>
      <Flex>
        <Own top="17px" left="27px">
          <Frame color="rgba(0, 0, 0, 0.5)">Owner</Frame>
          <Circle
            height="28px"
            width="28px"
            radius="14px"
            left="3px"
            top="4px"
            border="1.5px solid #FFFFFF"
            color="#6288D1"
          >
            <AS>AS</AS>
          </Circle>
        </Own>
        <Own top="17px" left="39px">
          <Frame color="rgba(0, 0, 0, 0.5)">Contributors</Frame>
          <Circle top="4px">
            <img src={Plus} alt="" />
          </Circle>
        </Own>
      </Flex>
      <Connect>
        <img src={connected} alt="" />
        <div>Connect</div>
      </Connect>
      <Down>
        <Flex justify="space-between">
          <Key left="25px" top="34px">
            <div>
              <img src={VectorBlack} style={{ color: "#4E5AC7" }} alt="" />
            </div>
            <div>
              <Head
                left="12px"
                font="600"
                fsize="14px"
                color="#78838C"
                spacing="1.4px"
              >
                CHECK_INS
              </Head>
            </div>
          </Key>
        </Flex>
        {checks ? 
        <White>
          <Comment 
            name='Will Smith'
            date='9/1/2021'
            check='Checked-In on the Initiative'
            mail='Email 100 at risk customers'
            update='Status Update'
            value='Done'
            summary='Executive Summary'
            desc='“Send compelling offer of 20% discount for early renewal it!”'
            descWidth='79.25%'
          />
        </White> : ''}
        <Key left="25px" top="54px">
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
        <Last>
          <Can onClick={() => setplanFormCanvas(false)} color='white' right='2%'>
            <P  >Cancel</P>
          </Can>
          <Can onClick={() => setplanFormCanvas(false)} color='rgba(80, 98, 115, 0.5)' right='3%'>
            <P>Save</P>
          </Can>
        </Last>
      </Down>
    </Wrapper>
  );
};

export default EmailAt;
