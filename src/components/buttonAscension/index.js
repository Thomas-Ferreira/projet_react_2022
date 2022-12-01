import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonAscension = (props) => {
    return (
        <CustomButton onClick={props.function} isFocused={props.isFocused}>{props.name} {props.numero}</CustomButton>
    )
}

export default ButtonAscension

const CustomButton = styled.button`
    text-decoration: none;
    color: ${props => props.isFocused ? '#ffffff' : '#000000' };
    background-color: ${props => props.isFocused ? '#1f2557' : '#ffffff '} ; 
    font-size: 0.772em;
    &:hover{
        background-color: #1f2557;
        color: #ffffff; 
    }
`

