import styled from "styled-components";
import Rectangle from "../../../assets/Rectangle.png";

export const Wrapper = styled.div`
  display: flex;
  height: 1200px;


  .dark-chart img{
    width: 98%;
  }
`;

export const Left = styled.div`
  flex: 7;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
`;
export const Top = styled.div`
  display: flex;
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
`;

export const Right = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  background: #ffffff;
`;

export const Key = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
`;

export const Butt = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.top};
  margin-right: ${(props) => props.right};
  border: ${(props) => props.border};
  background: ${(props) => props.color};
`
export const ButtText = styled.div`
  color: ${(props) => props.color};
  text-align: center;
  margin-top: 3px;
`
export const Head = styled.p`
  height: 15px;
  margin-left: ${(props) => props.left};

  font-style: normal;
  font-weight: ${(props) => props.font};
  font-size: ${(props) => props.fsize};
  line-height: ${(props) => props.lheight};
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #78838c;
`;

export const Redu = styled.div`
  height: 63px;
  margin-left: 22px;

  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: 0.4px;
  color: #000000;
`;

export const Own = styled.div`
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
`

export const Connect = styled.div`
  display: flex;
  align-items: center; 
  margin-left: 89%
`

export const Para = styled.div`
  margin-left: 22px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.5);
`;

export const Circle = styled.div`
  position: relative;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: ${(props) => props.color};
  border-radius: ${(props) => props.radius};
  border: ${(props) => props.border};
  box-sizing: border-box;
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
`;
export const AS = styled.p`
  position: absolute;
  left: 5px;
  top: 3px;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
`;

export const Frame = styled.div`
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};

  font-weight: ${(props) => props.font};
  font-size: 14px;
  line-height: 19px;
  color: ${(props) => props.color};
`;

export const Rect = styled.div`
  background: url(${Rectangle});
  width: 94%;
  height: 313px;
  margin-left: 26px;
  margin-top: 9px;

  background: #FFFFFF;
  border: 1px solid #78838C;
  box-sizing: border-box;
`;

export const Graph = styled.div`
  width: 96%;
  height: 273px;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 11px;
  margin-bottom: 29px;

  background: #00162a;
`;

export const Checks = styled.div`

`
export const Comm = styled.div`
  width: 95%;
  height: ${(props) => props.height};
  margin-top: ${(props) => props.top};
  margin-left: 33px;
  background: #ffffff;
  border: 1px solid #e3e6ec;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(31, 31, 32, 0.05);
`;

export const Input = styled.input`
  width: 85%;
  height: 58px;
  margin-left: 32px;
  margin-top: 28px;
  padding-left: 20px;
  font-size: 14px;
  background: #ffffff;
  border: 1px solid #e3e6ec;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(31, 31, 32, 0.05);
`;

export const Box = styled.div`
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
`;

export const RightT = styled.div`
  display: flex;
  justify-content: space-between;
`;
