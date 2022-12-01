import React, { useState } from 'react'
import { IoStarSharp } from "react-icons/io5"
import styled from 'styled-components';

const Rarity = (props) => {
    return (
        <DivRarity>
            {props.nombre} <IoStarSharp />
        </DivRarity>
    );
};

export default Rarity;

const DivRarity = styled.div`

`