import React, { useState } from 'react'
import { IoStarSharp } from "react-icons/io5"
import styled from 'styled-components';

const Rarity = ({nombre=1}) => {
    return (
        <DivRarity>
            {nombre} <IoStarSharp size={30} />
        </DivRarity>
    );
};

export default Rarity;

const DivRarity = styled.div`
    font-size: 25px;
    color: #FFD700;
    display:flex;
    align-items:center;
`