import styled from 'styled-components'

export const Body = styled.div`
  width: 100%;
  height: 45px;
  left: 0px;
  top: 0px;
  background: ${(props) => props.color};
  border: ${(props) => props.border};
  box-sizing: border-box;
`

export const Left = styled.div`
  cursor: pointer;
  margin-top: 15.87px;
  margin-bottom: 15.87px;
  margin-left: 25px;
`

export const Cross = styled.div`
  margin-left: 96%; 
  margin-top: 14.27px; 
  height: 17.5px; 
  width: 17.5px; 
  border-radius: 8.75px; 
  border: 2px solid white; 
  color: white;
`

export const Ex = styled.div`
  font-size: 14px; 
  margin-top: -34px; 
  margin-left: 2px;
  // background: white;
`