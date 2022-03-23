import styled from "styled-components";


const StyleResult2 = styled.div `

min-height: 100vh;
padding-block: 1rem;
font-family: 'Nunito Sans';
.left-side{
    padding-right: 7rem;

}
 .r-one-heading{

    margin-bottom: 3.3rem;

    h4, p{
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.9rem;
        color: rgba(31, 31, 32, 0.4);

    }

}

.resOneH3{

    font-weight: 700;
font-size: 2.4rem;
line-height: 3rem;
letter-spacing: 0.4px;
color: #000000;
}


.create-form{

    margin-block: 1.8rem;
padding:2.6rem 9rem 3rem 2rem;
background-color: white;

    p{
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.2rem;
        color: rgba(31, 31, 32, 0.8);
    }
    .form-control{
       height: 6.9rem;
       background: #FFFFFF;
       border: 0.1rem solid #E1E1E1;
       padding-inline: 2rem;
    }
   .label{
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: rgba(31, 31, 32, 0.8);
    margin-block: 2rem;
   }
}
.control1{
   font-weight: 700;
   font-size: 2.3rem;
   line-height: 3.1rem;
   color: black;
}
.control2, .control3{
    font-weight: 400;
font-size: 2.3rem;
line-height: 3.1rem;
display: flex;
align-items: center;
color: rgba(31, 31, 32, 0.5);

}
.control4{
    height: 3.7rem !important;
}
.control4::placeholder{
    color: #A3A3AE;
    font-weight: 600;
    font-size: 1.4rem;
}

.hr{
    margin-block: 5rem;
}

.back{
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
.right-side{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    padding: 7rem 8rem;
    background-color: white;
    h3{
        margin-block: 3rem;
    }
    div{
        margin-top: 2.7rem;
        padding-left: 8rem;
    }
    p{
        text-align: left;
        margin-bottom: 1rem;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 140%;
        color: rgba(31, 31, 32, 0.6);
    }

}

`

export default StyleResult2;