import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonAscension = (props) => {
//console.log(props);
    return (
        <CustomButton onClick={props.function}>ascension {props.numero}</CustomButton>
    )
}

export default ButtonAscension

const CustomButton = styled.button`
    text-decoration: none;
    color: #000000;
    background-color: #ffffff; 
    font-size: 0.772em;
    &:hover{
        background-color: #1f2557;
        color: #ffffff; 
    }
    &:focus{
        background-color: #1f2557;
        color: #ffffff;
    }
`

