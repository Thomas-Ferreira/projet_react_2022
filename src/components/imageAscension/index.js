import React from 'react';
import styled from 'styled-components';
import Avatar from '../avatar';

const ImageAscension = (props) => {
    console.log(props.data);
    return (
        <div>
        <img src={props.data[1]}></img>
        </div>
    );
};

export default ImageAscension;