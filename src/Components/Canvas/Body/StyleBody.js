import styled from 'styled-components';
import Space from '../../../assets/Space.png'; 
import Meeting from '../../../assets/Meeting.png'; 
import Balcony from '../../../assets/Balcony.png'; 
import Drafts from '../../../assets/Drafts.png'; 

const StyleBody=styled.div`
.body-container{
    margin: 1rem 2rem;
}

.body-2nd-button{
    background-color: white;
    color: #000000;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.6rem;
    align-items: center;
    text-align: center;
    border: 0.25px solid #C2C2C2;
    margin-right: 2rem;
    width: 11rem;
    height: 3.3rem;
   
}

.body-dropdown-menu.form-select{
    color: #000000;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    background: #FFFFFF;
    border: 0.25px solid #C2C2C2;
    width: 7.7rem;
    height: 3.3rem;
    background-image: none;
    padding: 0;
}
.circle-live{
   width: .6rem;
   height: .7rem;
   border-radius: 50%;
   background-color: green;
}
`;

export const StyledNode = styled.div`
.tree{
    justify-content: center;
    align-items: center;
}

  .root-box{
    padding: 5px;
    display: inline-block;
    border: 1px ;
    border-radius: 2px;
    width: 281px;
    height: 72px;
    background-color: black;
    color: #fff;
    &-small-heading{
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.6rem;
        color: #CACED0;
        text-align: left;
    }
    &-big-heading{
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.7rem;
        color: #FFFFFF;
        
    }
  }
  .level-1{
    padding: 5px;
    display: inline-block;
    width: 281px;
    height: 72px;
    background: #FFFFFF;
    border: 0.25px solid #8C9296;
    box-sizing: border-box;
    border-radius: 5px;
    &-small-heading{
        font-weight: 500;
        font-size: 12px; 
        line-height: 16px;
        color: #8C9296;
        text-align: left;
    }
    &-big-heading{
        font-weight: 500;
        font-size: 22px; 
        line-height: 30px;
        text-align: center;
        color: #000000;
    }
  }
  .level-2{
    /* padding: 5px; */
    display: inline-block;
      &-img-section{
        width: 300px;
        height: 166px;
         background-image:linear-gradient(to right,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${Space});
         justify-items: center;
          text-align: left;
          position: relative;
          padding: 1rem 2rem;

         &-small-heading{
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.4px;
            color: #FFFFFF;
            padding-bottom: 0.5rem;
            
         }
         &-large-heading{
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            color: #FFFFFF;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
         }
         &-button{
            border-radius: 50%;
            background-color: #fff;
            font-weight: 700;
            font-size: 1.2rem;
            line-height: 1.6rem;
            color: #000000;
            height: 2.9rem;
            width: 2.9rem;
            padding: 0;
            position: absolute;
            bottom: 1rem;
            left: 1rem;
         }
      }
  }
  .level-2-1{
    /* padding: 5px; */
    display: inline-block;
      &-img-section{
        width: 300px;
        height: 166px;
         background-image:linear-gradient(to right,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(${Balcony});
         justify-items: center;
          text-align: left;
          position: relative;
          padding: 1rem 2rem;

         &-small-heading{
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.4px;
            color: #FFFFFF;
            padding-bottom: 0.5rem;
            
         }
         &-large-heading{
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            color: #FFFFFF;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
         }
         &-button{
            border-radius: 50%;
            background-color: #fff;
            font-weight: 700;
            font-size: 1.2rem;
            line-height: 1.6rem;
            color: #000000;
            height: 2.9rem;
            width: 2.9rem;
            padding: 0;
            position: absolute;
            bottom: 1rem;
            left: 1rem;
         }
      }
  }
  .level-2-2{
    /* padding: 5px; */
    display: inline-block;
      &-img-section{
        width: 300px;
        height: 166px;
         background-image:linear-gradient(to right,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${Meeting});
         justify-items: center;
          text-align: left;
          position: relative;
          padding: 1rem 2rem;

         &-small-heading{
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.4px;
            color: #FFFFFF;
            padding-bottom: 0.5rem;
            
         }
         &-large-heading{
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            color: #FFFFFF;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
         }
         &-button{
            border-radius: 50%;
            background-color: #fff;
            font-weight: 700;
            font-size: 1.2rem;
            line-height: 1.6rem;
            color: #000000;
            height: 2.9rem;
            width: 2.9rem;
            padding: 0;
            position: absolute;
            bottom: 1rem;
            left: 1rem;
         }
      }
  }
  .level-3-2{
    /* padding: 5px; */
    display: inline-block;
      &-img-section{
        width: 300px;
        height: 166px;
         background-image:linear-gradient(to right,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${Drafts});
         justify-items: center;
          text-align: left;
          position: relative;
          padding: 1rem 2rem;

         &-small-heading{
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.4px;
            color: #FFFFFF;
            padding-bottom: 0.5rem;
            
         }
         &-large-heading{
            font-weight: 700;
            font-size: 16px;
            line-height: 16px;
            color: #FFFFFF;
            text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
         }
         &-button{
            border-radius: 50%;
            background-color: #fff;
            font-weight: 700;
            font-size: 1.2rem;
            line-height: 1.6rem;
            color: #000000;
            height: 2.9rem;
            width: 2.9rem;
            padding: 0;
            position: absolute;
            bottom: 1rem;
            left: 1rem;
         }
      }
  }
  .progress-bar{
    width: 300px;
    height: 7px;
  }
`;
export default StyleBody;