import styled from 'styled-components';
import ObjectiveBalcony from '../../../assets/ObjectiveBalcony.png';
const StyleBanner=styled.div`

.objective-banner{
  background-image:linear-gradient(to right,rgba(0,0,0,0.6),rgba(0,0,0,0.6)) ,url(${ObjectiveBalcony});
  height: 31.8rem;
  background-size: cover;
  padding: 1rem 2.1rem;
  color: #fff;
  position: relative;
  &-btn1{
      text-transform: uppercase;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.9rem;
  }
  &-btn2{
    width: 9.1rem;
    height: 2.3rem;
    background-color: #000000;
    border: 0.25px solid #FFFFFF;
    box-shadow: 0px 2px 4px rgba(31, 31, 32, 0.05);
    margin-right:1rem ;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.3rem;
    text-align: center;
  }
  &-mainheading{
    font-weight: 700;
    font-size: 4.2rem;
    line-height: 5.7rem;
  }
  &-paragraph{
    font-weight: 400;
    font-size: 1.4rem;
   line-height: 1.9rem;
   width: 88%;
  }
  &-para{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: #E3E3E3;
  }
  &-para2{
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.9rem;
    padding-bottom: 2.6rem;
    
  }
  &-btnlabel{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: rgba(255, 255, 255, 0.8);
  }
  &-button1{
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    background-color: #6388D1;
    border: 1.5px solid #FFFFFF;
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &-icon-book{
        position: absolute;
        bottom: -0.8rem;
        left: 0.6rem;
        /* width: .7rem;
        height: .91rem; */
    }
  }
&-button2{
    background-color: #F0F7FD;
    border-radius: 50%;
    padding: 0;
    height: 3rem;
    width: 3rem;
    text-align: center;
    color: #000000;
   
  .icon{
    margin: 1rem 0;
  }
} 
&-successrate{
    width: 13rem;
    height: 13rem;
    color:#02BB00;
    font-weight: 600;
    font-size: 4rem;
    line-height: 5.5rem;
    text-align: center;
    background-color: #FFFFFF;
    position: absolute;
    top: 9.9rem;
    right: 2.7rem;
    border-radius: 50%;
    border: 1rem solid #02BB00;
    padding-top: 2.5rem;
} 
}

.key-result{
  background-color: #F4F4F4;
  padding: 2rem 3.8rem;
  &-btn1{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: #393939;
    text-transform: uppercase;
  }
  &-btn2{
    background-color: #FFFFFF;
    color: #4E5AC7;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.3rem;
    align-items: center;
    text-align: center;
  }
  &-cards{
    background-color: #FFFFFF;
    border: 1px solid #E3E6EC; 
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(31, 31, 32, 0.05);
    padding: 2rem 2rem;
    height: 16em;
    cursor: pointer;
    &-1st-heading{
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
      letter-spacing: 0.4px;
      color: rgba(105, 122, 134, 0.5);
      padding-bottom: 1rem;
    }
    &-2nd-heading{
      font-weight: 600;
      font-size: 2rem;
      line-height: 2.7rem;
      letter-spacing: 0.4px;
      color: #000000;
      padding-bottom: 3rem;
    }
    &-progressBar{
      width: 31%;
    }
  }
}
.initiatives{
  background: #FDFDFD;
  padding: 4rem 4rem;
  &-card{
    position: relative;
    width: 41rem;
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
       width: 40.6rem;
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
  padding:2.1rem 3.6rem;
  font-size: 1.4rem;
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
        align-items:center;
        padding-top: .5rem;
        &-img{
          height:1.6rem;
          width: 1.8rem;
      }
    }
  }
  &-date{
    font-weight: 400;
    font-size: 12px;
     line-height: 22px;
    color: #1F1F20;
  }
  &-comments-area{
    font-weight: 400;
    line-height: 140%;
    color: rgba(9, 9, 10, 0.5);
  }
  &-last-comment{
    font-weight: 400; 
    line-height: 19px;
    color: #1F1F20;

  }
}
.comments{
  background: #FDFDFD;
  width: 100%;
  height: 26.4rem;
  padding: 2.1rem 3.6rem;
  &-heading{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: #393939;
    padding-bottom: 5.5rem; 
  }
  &-input{
    margin-left: 3rem;
    width: 50%;
    height: 5rem;
    background: #FFFFFF;
    border: 1px solid #E3E6EC;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(31, 31, 32, 0.05);
    padding: 0 1rem;
    font-size: 1.4rem;
  }
}
`;
export default StyleBanner;