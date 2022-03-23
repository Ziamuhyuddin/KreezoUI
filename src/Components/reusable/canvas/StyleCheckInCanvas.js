import styled from "styled-components";
import SwitchButton from "../../../assets/SwitchButton.svg";
const StyleCheckInCanvas = styled.div`
  background: #efefef;
  width: 100%;
  /* height: 100vh; */
  color: #000000;
  padding: 3.5rem 3.4rem;
  padding-right: 10rem;
  .CheckIn {
    &-heading {
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.7rem;
      padding-bottom: 3.7rem;
    }
    &-date {
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6rem;
    }
    &-col-1-heading {
      font-weight: 600;
      font-size: 1.4rem;
      line-height: 1.9rem;
      color: #000000;
      align-items: center;
      padding-top: 1rem;
      margin-bottom: 4.7rem;
    }
    &-col-2-heading {
      background: rgba(2, 2, 2, 0.53);
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.9rem;
      color: #ffffff;
      padding: 1rem 2rem;
      /* margin-bottom: 4.2rem; */
    }
    &-col-2-values {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 3.3rem;
      color: #000000;
      &-heading {
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.9rem;
        color: #000000;
      }
    }
    &-btn {
      width: 17rem;
      height: 4.8rem;
      background: #000000;
      box-shadow: 0px 2px 4px rgba(31, 31, 32, 0.05);
      font-weight: 600;
      font-size: 1.2rem;
      line-height: 1.3rem;
      align-items: center;
      text-align: center;
      /* text-decoration-line: underline; */
      color: #ffffff;
    }
    &-editor {
      width: 100%;
      
      background: #ffffff;
      border: 1px solid #f2f2f2;
      box-sizing: border-box;
      border-radius: 8px;
      margin-bottom: 1rem;
      &-cancelbtn {
        background: transparent;
        color: white;
        border: none !important;
        box-shadow: none !important;
        color: #000000;
      }
    }
    &-result {
      &-input {
        width: 40%;
        height: 5.2rem;
        background: rgba(9, 9, 9, 0.5);
        border: 1px solid #2474e7;
        border-radius: 4px;
        font-size:1.4rem;
        color: #ffffff;
      }
      &-switch {
        float: right !important;
        margin-left: 0.5em;
      //  background: rgba(9, 9, 9, 0.5);
        border-radius: 8px;
        width: 36px;
        height: 16px;
        background-image: url(${SwitchButton});
      }
      &-label {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        color: #000000;
      }
    }
  }
  input[type="number"] {
    position: relative;
    padding-left: 3rem;
  }
  input[type="number"].CheckIn-result-input::-webkit-outer-spin-button,
  input[type="number"].CheckIn-result-input::-webkit-inner-spin-button {
    /* -webkit-appearance: none; */
    width: 1em;
    border-left: 1px solid #bbb;
    opacity: 0.8; 
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    color: #ffffff;
    background-color: none;
  }
  .ck-editor__editable {
    min-height: 25rem;
  }
`;

export default StyleCheckInCanvas;
