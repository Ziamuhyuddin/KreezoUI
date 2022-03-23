import styled from "styled-components";


const StyleResult1 = styled.div `

min-height: 107vh;
padding-block: 1rem;
font-family: 'Nunito Sans';
.left-side{
    padding-right: 7rem;

}
.r-one-heading{
    h4, p{
        font-weight: 600;
font-size: 1.4rem;
line-height: 1.9rem;
color: rgba(31, 31, 32, 0.4);

    }
    margin-bottom: 3.3rem;

}
.resOneH3{

    font-weight: 700;
font-size: 2.4rem;
line-height: 3rem;
letter-spacing: 0.4px;
color: #000000;
}

.resOneH3~p{
    font-weight: 600;
font-size: 1.4rem;
line-height: 1.9rem;
color: rgba(31, 31, 32, 0.8);
margin-block: 0.7rem;
}
.resCards{
    display: flex;
    justify-content: space-between;
    margin-block: 2rem;

}

.resCard{
    width: 33.3rem;
    height:auto;
    padding-block: 3.4rem;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h4{
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.2rem;
        margin-block: 0.5rem;
        color: rgba(31, 31, 32, 0.8);
    }
    P{
        font-weight: 600;
        font-size: 1.1rem;
        line-height: 1.5rem;
        color: rgba(31, 31, 32, 0.4);
    }
}
.hr{
    margin-block: 5rem;
}

.cancel{
    background-color: white;
    color: black;
    font-size: 1.4rem;
    background: #FFFFFF;
    border: 0.1rem solid #CBD1DC;
    width: 10.2rem;
    height: 3.6rem;
}
.next{
    background:#273643;
    font-size: 1.4rem;
    border: 0.1rem solid #CBD1DC;
width: 10.2rem;
height: 3.6rem;
}
.right-side{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    div{
        margin-top: 2.7rem;
        padding-left: 8rem;
    }
    p{
        text-align: left;
        margin-bottom: 0px;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 140%;
        color: rgba(31, 31, 32, 0.6);
    }
    button{
        margin-block: 3rem;
    }
}

`

export default StyleResult1;