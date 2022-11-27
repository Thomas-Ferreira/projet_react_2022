import React, { useState } from 'react'
import { IoStarSharp } from "react-icons/io5"

const Rarity = (props) => {
    return (
        <div>
            {props.nombre} <IoStarSharp />
        </div>
    );
};

export default Rarity;