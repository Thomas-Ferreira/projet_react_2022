import React from 'react';
import styled from 'styled-components';

const Avatar = ({image}) => {
    return ( <Picture size={50} src={image} /> )
};

export default Avatar;

const Picture = styled.img`
  width: 7vh;
  height: 7vh;
@media (min-width: 768px){
  width: 10vh;
  height: 10vh;
}
`;