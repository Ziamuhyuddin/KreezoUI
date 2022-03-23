import styled from "styled-components";


const StyleDescribe = styled.div `

    height:100%;
    font-family: 'Nunito Sans';
.form-side{
    padding-right: 7rem;

}
 .describe-heading h3{
    font-family: Nunito Sans;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem;
    letter-spacing: 0.4000000059604645px;
    text-align: left;

}
 .describe-heading p{
    font-family: 'Avenir Next';
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: rgba(31, 31, 32, 0.5);
    margin-block: 0.5rem;
 }

 .form-control{
     height: 3.7rem;
     padding: .9rem 1.4rem;
     font-size: 1.4rem;
 }
 .form-control::placeholder{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: rgba(31, 31, 32, 0.3);

}
 .form-label{
     margin-bottom: 0.7rem;
     font-family: 'Nunito Sans';
     font-style: normal;
     font-weight: 600;
     font-size: 1.4rem;
     line-height: 1.9rem;

     .form-control::placeholder{
    font-family: 'Nunito Sans';
font-style: normal;
font-weight: 600;
font-size: 1.4rem;
line-height: 1.9rem;
}

color: rgba(31, 31, 32, 0.8);
 }
 .describe-form{
     padding: 1.4rem 1.8rem  10rem;
     background: white;
     border: 0.5px solid #78838C;
 }

.cancel{
    background-color: white;
    color: black;
    font-size: 1.4rem;
    background: #FFFFFF;
    border: 1px solid #CBD1DC;
    width: 10.2rem;
    height: 3.6rem;
}
.next{
    background:#273643;
    font-size: 1.4rem;
    border: 1px solid #CBD1DC;
width: 10.2rem;
height: 3.6rem;
}
.hr{
    margin-block: 4rem;
}
.text-side{
    padding: 4.5rem 3.5rem;
    text-align: center;
    background-color: white;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100vh;

    h3{
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.7rem;
        text-align: center;
        color: rgba(31, 31, 32, 0.8);
        margin-block: 2.5rem;

    }
    p{
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 140%;
        text-align: center;
        color: rgba(31, 31, 32, 0.6);

    }
    button{
        margin-top: 3rem;
    }
}

`;
export default StyleDescribe;