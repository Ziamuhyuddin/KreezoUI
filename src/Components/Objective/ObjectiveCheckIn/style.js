import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #EFEFEF;
`
export const Flex = styled.div`
  display: flex;
`
export const MainH = styled.div`
  margin-top: 35px;
  margin-left: 41px;
  display: flex;
  flex-direction: column;
  height: 56px;
`

export const Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: #000000;
`
export const Date = styled.div`
  display: flex;
  margin-top: 37px;
`
export const Feb = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: #000000;
`
export const Exec = styled.div`
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};
  width: ${(props) => props.width};
  font-weight: ${(props) => props.fweight};
  font-size: ${(props) => props.fsize};
  line-height: ${(props) => props.lheight};

  color: #000000;
`
export const Grey = styled.div`
  height: 42px; 
  width: 73.65%;
  margin-right: 8.5%;
  margin-top: 45px; 
  margin-left: 5.5%;
  background: rgba(2,2,2,0.53);
`
export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  margin-top: 12px;
  margin-left: 25px;

  color: #FFFFFF;
`
export const Bars = styled.div`
width: 170px;
height: 48px;
background: black;
margin-top: 61px; 
margin-left: ${(props) => props.left};
`
export const P = styled.p`
 color: #FFFFFF;
 margin-top: 17.5px;
 margin-left: ${(props) => props.left};
 font-weight: 600;
font-size: 12px;
line-height: 13px;
`