import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  overflow: scroll;
`
export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify};
`
export const Key = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
`
export const Head = styled.p`
  height: 15px;
  margin-left: ${(props) => props.left};

  font-style: normal;
  font-weight: ${(props) => props.font};
  font-size: ${(props) => props.fsize};
  line-height: ${(props) => props.lheight};
  letter-spacing: ${(props) => props.spacing};
  color: ${(props) => props.color};
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
export const Para = styled.div`
  margin-left: 27px;
  margin-top: 5px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.5);
`;
export const Own = styled.div`
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
`
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
export const Connect = styled.div`
  display: flex;
  align-items: center; 
  margin-left: 88%
`
export const White = styled.div`
  width: 93.5%; 
  height: 150px; 
  margin-left: 2.8%; 
  margin-right: 4%; 
  margin-top: 11px;
  background: #FFFFFF;
  border: 1px solid #E3E6EC;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(31, 31, 32, 0.05);
`
export const Input = styled.input`
  width: 93.5%;
  height: 58px;
  margin-left: 3.4%;
  padding-left: 20px;
  padding-top: 5px;
  margin-top: 33px;
  margin-right: 4%;
  background: #ffffff;
  border: 1px solid #e3e6ec;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(31, 31, 32, 0.05);
`;
export const Down = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 13px;
  background: #F4F4F4;
`
export const Last = styled.div`
  display: flex; 
  width: 44%;
  margin-top: 15px; 
  margin-left: 56%;
`
export const Can = styled.div`
  height: 40px;
  background: ${(props) => props.color};
  margin-right: ${(props) => props.right};
  width: 45%;
  text-align: center;
`
export const P = styled.p`
  margin-top: 12px;
`