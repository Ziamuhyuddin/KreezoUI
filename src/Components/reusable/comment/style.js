import styled from 'styled-components'

export const Circle = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background: ${(props) => props.color}; 
  border-radius: ${(props) => props.radius};
  border: ${(props) => props.border}; 
  box-sizing: border-box;
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left}
`
export const AS = styled.p`
  margin-left: 6px;
  margin-top: 5px;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF;
`

export const Tim = styled.div`
  width: 70px;
  height: 19px;
  margin-left: 9px;
  margin-top: ${(props) => props.top};

  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: ${(props) => props.fweight};
  font-size: ${(props) => props.fsize};
  line-height: ${(props) => props.line};

  color: #1F1F20;
`

export const Checkd = styled.div`
  // width: 274px;
  height: 20px;
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;

  color: rgba(31, 31, 32, 0.49);
`

export const Churn = styled.div`
  // width: 76%;
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};
  padding-left: 5px;
  // padding-bottom: 13px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  text-decoration-line: ${(props) => props.deco};
`

export const Descrip = styled.div`
  display: flex;
  width: ${(props) => props.width};
`