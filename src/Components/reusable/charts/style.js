import styled from 'styled-components'

export const Main = styled.div`
  position: relative;
  width: 644px;
  height: 194px;
  left: ${(props) => props.left};
  top: 410px;

  background: #FFFFFF;
  border: 1px solid #E3E6EC;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(31, 31, 32, 0.05);
`
export const Progress = styled.div`
  position: absolute;
  width: 186px;
  height: 17px;
  margin-left: ${(props) => props.left};
  top: 129px;

  background: #DAE2FB;
  border-radius: 1px;
`

export const Variant = styled.div`
  position: absolute;
  width: 4.42px;
  height: 17.31px;
  left: 16.58px;
  top: 128.58px;

  background: linear-gradient(0deg, #D3264F, #D3264F), #4EC33B;
`
export const Incre = styled.p`
  position: absolute;
  height: 32.97px;
  left: 18.58px;
  top: 18px;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.4px;

  color: rgba(105, 122, 134, 0.5);
`
export const Heading = styled.div`
  position: absolute;
  height: 60.06px;
  left: 18.58px;
  top: 38px;
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  align-items: center;
  letter-spacing: 0.4px;
  color: #000000;
`
