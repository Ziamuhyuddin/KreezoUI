import styled from "styled-components";

export const KeyResultContainer = styled.div`
  position: relative;
  background-color: #F4F4F4;
  /* height: 100vh; */

  .keyresultTabsMain {
    position: absolute;
    left: 30px;
    top: 30px;

    .nav-item {
      width: 200px;
    }

    .nav-link {
      border: none;
      width: 100%;
      text-align: left;
      color: #273643;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      background-color: #F4F4F4;
    }
    .nav-link.active {
      border-bottom: 2px solid #273643;
    }
  }
`;

export const SelectTypeContainer = styled.div`
    .selecttypecontentMain{
        display: flex;
        justify-content: space-between;

        &-content{
            margin-top: 9rem;
            padding-left: 3rem;
        }
    }

`;
