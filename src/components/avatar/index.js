import React from 'react';
import styled from 'styled-components';

const Avatar = ({image}) => {
    return ( <Picture size={50} src={image} /> )
};

export default Avatar;

const Picture = styled.img`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;