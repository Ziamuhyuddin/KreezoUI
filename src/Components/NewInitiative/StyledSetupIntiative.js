import styled from "styled-components";
import { InitRightButtons } from "./StyledInitiative";

export const SetupStyledMain = styled.div`
  font-family: Nunito Sans;
  padding-left: 4rem;
  h3 {
    margin-top: 8.5rem;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.4px;
    color: #000000;
  }
  p {
    display: flex;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.9rem;
    letter-spacing: 0em;
    color: rgba(31, 31, 32, 0.8);
    .head {
      font-weight: 800;
      display: inline-block;
      margin-right: 3px;
    }
  }
`;
export const GetItDoneMain = styled.div`
  border: 1px solid #78838c;
  padding: 2rem;
  background-color: white;
  .get-done {
    display: flex;
    align-items: center;
    .text {
      margin-left: 1.8rem;
      margin-top: 1rem;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2.2rem;
      letter-spacing: 0em;
    }
  }
`;
export const SetupIntiativeLeft = styled.div`
  padding-right: 4rem;
`;
export const GetItDoneRight = styled.div`
  font-family: Nunito Sans;
  padding: 0 2rem;

  .main-head {
    font-size: 1.6rem;
    font-weight: 800;
    line-height: 2.2rem;
    letter-spacing: 0em;
    margin-top: 2rem;
    color: rgba(31, 31, 32, 0.8);
  }
  img {
    width: 100%;
    height: auto;
    margin-top: 2.3rem;
  }
  .inner-text {
    padding: 2.5rem 0;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
    letter-spacing: 0em;

    .below-text {
      font-family: Nunito Sans;
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 2.2rem;
      letter-spacing: 0em;
    }
  }
`;

export const SetupLabel = styled.div`
  .label {
    font-family: Nunito Sans;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.9rem;
    letter-spacing: 0em;
    margin-bottom: 0.7rem;
    margin-top: 3rem;
  }
  .input-group {
    .input {
      background-color: red;
    }
  }
`;
export const SetupInitMoreBtn = styled(InitRightButtons)`
  margin-top: 1rem;
  padding-bottom: 3rem;
`;
