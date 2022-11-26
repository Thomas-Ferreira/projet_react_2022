import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonAscension from '../buttonAscension';

const ImageAscension = (props) => {

    const [isImage, setIsImage] = useState(1)

    return (
        <div>
            <div>
            <ButtonAscension function={()=>setIsImage(1)} numero={1} />
            <ButtonAscension function={()=>setIsImage(2)} numero={2} />
            <ButtonAscension function={()=>setIsImage(3)} numero={3} />
            <ButtonAscension function={()=>setIsImage(4)} numero={4} />
            </div>
            <div>
                <img src={props?.data ? props?.data[isImage] : ''}></img>
            </div>
        </div>
    );
};

export default ImageAscension;

const styledDiv = styled.div`

`;