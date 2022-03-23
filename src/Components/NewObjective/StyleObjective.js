import styled from "styled-components";


const StyleObjective = styled.div `
min-height: 100vh;
padding: 40px;
 background: #F4F4F4;
 position: relative;
*{padding: 0px;
margin: 0px;
box-sizing: border-box}

.nav-item{

}

.nav-link{
    width: 285px !important;
    height: 24px !important;
    border-bottom: 2px solid #CBD1DC !important;
    font-family: Nunito Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: #CBD1DC !important;
    border: 0px;
    text-align: left;



}
.nav-tabs{
border-bottom: 0 !important;
}



.nav-link.active{
    border: 0px !important;
border-bottom: 2px solid black !important;
color: black !important;
background: transparent
}
/* .nav-tabs .nav-link{
    border: 0 !important;
} */

`;
export default StyleObjective;