import React from 'react';
import styled from 'styled-components';

const Name = (props) => {
    return (
        <DivName>
            <span>Name : {props.nom}</span>
            <span>Class : {props.classe}</span>
        </DivName>
    );
};

export default Name;

const DivName = styled.div`
display: flex;
justify-content: space-around;
margin-top: 2vh;
margin-bottom: 2vh;
@media (min-width: 768px) {
    
}
`