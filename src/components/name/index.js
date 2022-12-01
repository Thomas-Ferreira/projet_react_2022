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
    @media (min-width: 768px) {
        font-size: 30px;
    }
`

const DivName = styled.div`
display: flex;
justify-content: space-around;
margin-top: 2vh;
margin-bottom: 2vh;
@media (min-width: 768px) {
    
}
`