import React, { useState } from 'react';

const ButtonAscension = (props) => {
//console.log(props);
    return (
        <button onClick={props.function}>ascension {props.numero}</button>
    )
}

export default ButtonAscension