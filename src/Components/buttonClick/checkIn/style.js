import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  flex-direction: column;
  background: #EFEFEF;
`

export const MainH = styled.div`
  margin-top: 28px;
  margin-left: 26px;
  display: flex;
  flex-direction: column;
  height: 56px;
`

export const Heading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  color: #000000;
`
export const Cal = styled.img`
  width: 11.25px; 
  height: 13.33px;
`
export const Date = styled.div`
  display: flex;
  margin-top: 24px;
`
export const Feb = styled.p`
  margin-left: 7.88px;
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
  width: 80%;
  margin-right: 4%;
  margin-top: 14px; 
  margin-left: 3.5%;
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
export const Remain = styled.div`
  margin-left: 84%; 
  margin-right: 4%;
  margin-top: 9px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`
export const Value = styled.div`
  margin-left: ${(props) => props.left}; 
  margin-top: ${(props) => props.top};
`
export const Re = styled.div`
  height: 52px;
  width: 33.5%;
  margin-left: 1.75%;
  margin-top: 35px;
  background: rgba(9, 9, 9, 0.5); 
  border: 1px solid #2474E7;
  border-radius: 4px;
`
export const Filt = styled.div`
  margin-left: 5.5%;
`
export const Conf = styled.div`
  display: flex; 
  margin-top: ${(props) => props.top};
`
export const Fide = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`
export const Bar = styled.div`
  height: 16px; 
  width: 36px;
  margin-left: ${(props) => props.left};
  border-radius: 8px;
  background: #56655A;
`
export const Circ = styled.div`
  height: 12px;
  width: 12px;
  margin-left: 6px;
  margin-top: 2px; 
  border-radius: 6px;
  background: #FFFFFF;
`
export const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  height: 539px;
  width: 80%; 
  margin-top: 20px; 
  margin-left: 5.35%;
  margin-right: 4%;
  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  box-sizing: border-box;
  border-radius: 8px;
`
export const TopIcons = styled.div`
  height: 56px;
  width: 81%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: static;
  background: #FFFFFF;
  flex: none;
`
export const Figm = styled.div`
  margin-top: 48px; 
  margin-right: 3%; 
  margin-left: 3%;
`
export const Heads = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  color: #000000;
`
export const Desc = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 12px;
  line-height: 30px;

  color: #000000;
`
export const Ico = styled.img`
  margin-top: 21px;
  margin-left: ${(props) => props.left};
  color: ${(props) => props.color};
`
export const BottomIcons = styled.div`
  display: flex;
  margin-top: 18%;
  width: 63%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: static;
  background: #FFFFFF;
  flex: none;
`
export const Cro = styled.div`
  height: 35px; 
  width: 35px; 
  margin-right: 5%; 
  border-radius: 50%; 
  background: rgba(0, 0, 0, 0.1);
`
export const EXX = styled.p`
  margin-left: 10px;
  margin-top: 10px;
  font-size: 16px;
`
export const Boot = styled.img`
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};
`