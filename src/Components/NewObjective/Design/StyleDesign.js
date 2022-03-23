import styled from "styled-components";


const StyleDesign = styled.div `

font-family: 'Nunito Sans';
min-height:100vh;
.image-side{
    padding-right: 7rem;

}
 .design-heading h3{
    font-family: Nunito Sans;
    font-size: 2.4rem;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3rem;

}
 .design-heading p{
    font-family: 'Avenir Next';
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: rgba(31, 31, 32, 0.8);

 }


.design-container{
margin-block: 1.8rem;
padding: 1.8rem;
background-color: white;

p{
    font-weight: 600;
font-size: 1.4rem;
line-height: 1.9rem;
color: rgba(31, 31, 32, 0.8);
}

}



.cancel{
    background-color: white;
    font-size: 1.4rem;
    color: black;
    background: #FFFFFF;
border: 1px solid #CBD1DC;
width: 10.2rem;
height: 3.6rem;
}
.next{
    background:#273643;
    border: 1px solid #CBD1DC;
      font-size: 1.4rem;
width: 10.2rem;
height: 3.6rem;
}
.form-control{
    font-size: 1.4rem;
 }
}
.text-side{
    padding: 4.5rem 3.5rem;
    text-align: center;
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;


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
.background{
    margin-inline: -0.5rem;
}
.Line{
    height: 5rem;
    width: 1px;
    background-color:#CBCED6;
    margin-inline: 3rem;
}
.grid{
    display: flex;
    flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin-inline: 0;

}
.designInput{
    margin: 2.5rem 0 1.5rem 0;
    height: 3.7rem;
    padding-inline: 1rem;
    box-shadow: 0px 0.2rem 0.4rem rgba(31, 31, 32, 0.05);
}
.designInput::placeholder{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: rgba(31, 31, 32, 0.3);

}
.textCard{
    margin-right: 2.3rem;
    border: 1px solid #E3E6EC;
    padding:0.5rem 1rem;
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.9rem;
    }
}
.designFooter{
    margin-block:2.6rem;
    /* margin-inline: -1rem; */
}
.select{
    background: #FFFFFF;
    border: 1px solid #E3E6EC;
    height: 3.7rem;
    padding-inline: 1rem;
}
.select option{
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.9rem;
    color: rgba(31, 31, 32, 0.3);
}
/* .select > option{


} */

.breakLine{
    margin-block: 4rem;
}
`;
export default StyleDesign;