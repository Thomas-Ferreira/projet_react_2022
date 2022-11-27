import React, { useState } from 'react';
import { IoStarSharp } from "react-icons/io5"
import Rarity from '../rarity';

const Description = (props) => {
    //console.log("🚀 ~ file: index.js ~ line 4 ~ Description ~ props", props)
    //console.log(props.profile.length);

    const [isDesc, setIsDesc] = useState(0)
    
    return (
        <div>
            <div>
                <span>{props.name}</span>
                <span>{props.class}</span>
                <Rarity nombre={props.rarity} />
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Description;