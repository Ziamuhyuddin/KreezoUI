import styled from "styled-components";
import Align from "../../assets/Allignment.png";
const StyleAlign = styled.div`
  .align-banner {
    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ),
      url(${Align});
    width: 100%;
    height: 153px;
    color: #ffffff;
    padding: 2.3rem 4.8rem;
    &-heading {
      font-weight: 700;
      font-size: 36px;
      line-height: 49px;
      padding-bottom: 1rem;
    }
    &-paragraph {
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }
  }
  .align-container{
      background-color: #FBFBFB;
      padding: 2rem 2rem;
      &-requests {
        border-bottom: 2px solid #000000;
        color: #000000;
        padding-bottom: .5rem;
        margin-bottom: 1.5rem;
        &-1stheading {
          font-weight: 700;
          font-size: 16px;
          line-height: 22px;
          padding-right: 3rem;
        outline-offset: 5px;
        }
        &-2ndheading {
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
        }
        &-btn{
            align-items: center;
            padding: 3px 12px;
            width: 162px;
            height: 32px;
            background: #000000;
            box-shadow: 0px 2px 4px rgba(31, 31, 32, 0.05);
            margin-left: auto;
        }
      }

      &-objective{
        
        height: 52px;
        background: #FFFFFF;
        border: 1px solid #E3E6EC; 
        align-items:center;
        color: #78838C;
        margin-bottom: 8rem;
        &-heading{
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 0.4px;
            padding-right: 2rem;
        }

           &-btn{
            width: 92px;
            height: 28px;
            background: #D3264F;
            align-items: center;
            box-shadow: 0px 2px 4px rgba(31, 31, 32, 0.05);
            margin-left: auto;
          }
      }
      &-table{
        margin: 0 auto;
          &-heading{
            background: #F7F9FC;
            border: 1px solid #E3E6EC;
            box-sizing: border-box;
            border-radius: 4px 4px 0px 0px;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
           color: #4B4B4C;
          }
          &-data{
             background-color: #FFFFFF;
             font-weight: 400;
             font-size: 14px;
             line-height: 19px;
             color: #000000;
             
          }
      }
    }
    .table>:not(:first-child) {
        border: 1px solid #E3E6EC;
}
`;
export default StyleAlign;
