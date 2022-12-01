import React, { useState } from 'react';
import { IoStarSharp } from "react-icons/io5"
import Comments from '../comments';
import Rarity from '../rarity';

const Description = (props) => {
    
    const [isDesc, setIsDesc] = useState(0)
    
    return (
        <div>
            <div>
                <span>{props.name}</span>
                <span>{props.class}</span>
                <Rarity nombre={props.rarity} />
                <Comments comments={props?.profile} />
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Description;