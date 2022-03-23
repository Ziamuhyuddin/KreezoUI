import React from "react";
import { AS, Circle, Tim, Checkd, Churn, Descrip } from "./style";

const Comment = ({name, date, check, mail, update, value, summary, desc, descWidth}) => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Circle
          height="32px"
          width="32px"
          radius="16px"
          left="11px"
          top="8px"
          border="1.5px solid #FFFFFF"
          color="#1FAE8C"
        >
          <AS>WS</AS>
        </Circle>
        <div>
          <Tim top="14px" fweight="600" fsize="14px" line="19px">
            {name}
          </Tim>
        </div>
        <div>
          <Tim top="15px" fweight="400" fsize="12px" line="16px">
            {date}
          </Tim>
        </div>
      </div>
      <Descrip >
        <Checkd left="54px" >{check}</Checkd>
        <Churn left="0px" deco="underline">
          {mail}
        </Churn>
      </Descrip>
      <Descrip>
      <Checkd left="54px" top='2px'>{update}</Checkd>
      <Churn left="0px" top='2px'>{value}</Churn>
      </Descrip>
      <Descrip width={descWidth}>
      <Checkd left="52px" top='2px'>{summary}</Checkd>
      <Churn left="0px" top='2px'>{desc}</Churn>
      </Descrip>
    </>
  );
};

export default Comment;
