import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <DivHeader>
          <StyledH1></StyledH1>
        </DivHeader>
      )
};

export default Header;

const DivHeader = styled.header`
  margin-top: 0;
  width: 100%;
  text-decoration: none;
  left: 0;
  top: 0;
  display: flex;
  height: 80px;
  width: 100%;
  background-color: grey;
  color: #ffffff;
`

const StyledH1 = styled.h1`
  font-size: 20px;
  text-align: center;
`
