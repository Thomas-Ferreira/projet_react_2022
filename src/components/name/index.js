import React from 'react';
import styled from 'styled-components';

const Name = (props) => {
    return (
        <DivName>
            <SyledH2>Name : {props.nom}</SyledH2>
            <SyledH2>Class : {props.classe}</SyledH2>
        </DivName>
    );
};

export default Name;

const SyledH2 = styled.h2`
    font-size: 20px;
    color: #ffffff;
    @media (min-width: 768px) {
        font-size: 30px;
    }
`

const DivName = styled.div`
display: flex;
justify-content: space-around;
margin-top: 2vh;
margin-bottom: 2vh;
background: rgb(9,10,36);
background: linear-gradient(270deg, rgba(9,10,36,1) 0%, rgba(31,37,80,1) 50%, rgba(0,16,133,1) 100%);
@media (min-width: 768px) {
    
}
`