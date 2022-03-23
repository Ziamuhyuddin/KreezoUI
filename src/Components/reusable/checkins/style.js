import styled from "styled-components";
import bg from "../../../assets/bg.png";

export const Get = styled.div`
  background-image: url(${bg});
  cursor: pointer;
  width: 94%;
  height: 71px;
  background-repeat: no-repeat;
`;

export const Fade = styled.p`
  margin-left: ${(props) => props.left};
  margin-top: ${(props) => props.top};

  font-weight: 700;
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lheight};
  display: flex;
  align-items: center;
  letter-spacing: ${(props) => props.spacing};
  text-transform: uppercase;

  color: ${(props) => props.color};
`;

export const Done = styled.p`
  // margin-left: 55.31%;
  margin-top: -5.5%;

  font-weight: 900;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: 1.4px;
  text-transform: uppercase;

  color: ${(props) => props.color};
`;

export const StyleBanner = styled.div`
.initiatives{
  background: #FDFDFD;
  padding: 4rem 4rem;
  &-card{
    position: relative;
    width: 36rem;
    height: 7.1rem;
    border: 1px solid rgba(120, 131, 140, 0.5);
    clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%);
    background-color: rgba(120, 131, 140, 0.5);
    border-radius: 4px;
    padding-left: 3rem;
    text-align: center;
    &::before{
      content: "";
      display: block;
       position: absolute;
       z-index: 50;
       top: 0px;
      left: 1px;
       height: 6.9rem; 
       width: 35.6rem;
       background-color: #FFFFFF;
       clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%);

    }

    &-row1{
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 1.4px;
      color: #78838C;
      padding-top: .6rem ;
      padding-left: 5rem;
      padding-right: 2rem;
      padding-bottom: 2rem;
    }
    &-row2{
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 100;
      font-weight: 600;
      font-size: 1.5rem;
      line-height: 2rem;
      letter-spacing: .4px;
      color: #000000;
      
      padding-left: 5rem;
      padding-right: 1rem;
      &-heading{
        padding: 2.4rem 0;
      }
      &-img{
        padding-top: 0.3rem;
      }
      &-img-1{
        padding: 1.5rem 2rem;
      }
      &-img-2{
        padding:0rem 0rem;
        margin-top: -.8rem;
      }
      &-img-3{
        padding:1rem 2rem;
      }
      &-img-4{
        padding:0rem 1rem;
        margin-top: -.9rem;
      }
    }
  }

}

.check-in{
  background: #F4F4F4;
  padding:1rem 2rem;
  &-heading{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: #393939;
    padding-bottom: 3.4rem;
  }
  &-card{
    background: #FFFFFF;
    border: 1px solid #E3E6EC;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(31, 31, 32, 0.05);
    width: 100%; 
    height: 152px;
    padding:1rem 1rem;

      &-container{
        background: #00BBB0;
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        text-align: center;
        align-items: center;
        padding-top: 1rem;
        &-img{
          height:1.6rem;
          width: 1.8rem;
      }
    }
  }
}
`