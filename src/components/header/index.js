import React, { useState } from 'react';
import styled from 'styled-components';
import { BiMenu } from "react-icons/bi"

const Header = () => {

  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const displaySearch = () => {
    setIsSearchVisible(!isSearchVisible)
    console.log("has clicked");
  }

    return (
        <DivHeader>
          <button onClick={displaySearch}>
            < BiMenu size={30} />
          </button>
          <motionDiv />
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
  height: 5vh;
  width: 100%;
  background-color: rgb(9,10,36);
  color: #ffffff;
`

const StyledH1 = styled.h1`
  font-size: 20px;
  text-align: center;
`
