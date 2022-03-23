import styled from 'styled-components';
export const AddContributionMain = styled.div`
z-index: 5;
width: 62.7rem;
background-color: white;
font-family: 'Sen', sans-serif;
border: 1px solid rgba(0, 0, 0, 0.5);
.head-div{
    background-color: black;
    display: flex;
    justify-content: space-between;
   
    padding: 1rem;
    align-items: center;
   
    h4{
        
font-size: 1.2rem;
font-style: normal;
font-weight: 700;
line-height: 1.6rem;
letter-spacing: 0em;
text-align: left;

    }
}
.industry-div{  
font-size: 1.2rem;
font-style: normal;
font-weight: 400;
line-height: 1.3rem;
letter-spacing: 0em;
color: #000000;
padding: 2.5rem 0.7rem;
}
.process-div{
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    align-items: center;
    color: #000000;
    .cancel-btn{
font-size: 1.2rem;
font-style: normal;
font-weight: 400;
line-height: 1.6rem;
letter-spacing: 0em;
outline: none;
border: none;
width: 
6.6rem;
height: 
2.7rem;
    }
    .contribute-btn{
        height: 3.3rem;
width: 13.4rem;
outline: none;
border: none;
font-size: 1.2rem;
font-style: normal;
font-weight: 500;
line-height: 1.6rem;
letter-spacing: 0em;
text-align: center;
background: rgba(196, 196, 196, 0.5);

    }
}
`
export const AddContributionLeft = styled.div`
border-right: 1px solid rgba(0, 0, 0, 0.5);
border-bottom: 1px solid rgba(0, 0, 0, 0.5);
.inner-div{
    padding: 0 2.5rem;
}

`
export const AddContributionRight = styled.div`
border-bottom: 1px solid rgba(0, 0, 0, 0.5);
height: 27.7rem;
overflow-y: auto;
padding: 0 3rem;
.label{
font-size: 1.2rem;
font-style: normal;
font-weight: 400;
line-height: 1.6rem;
letter-spacing: 0em;
text-align: left;
color: #000000;
}
`