import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonAscension from '../buttonAscension';

const ImageAscension = (props) => {

    const [isImage, setIsImage] = useState(1)

    return (
        <div>
            <div>
            <ButtonAscension function={()=>setIsImage(1)} numero={1} name={'Ascension'} />
            <ButtonAscension function={()=>setIsImage(2)} numero={2} name={'Ascension'} />
            <ButtonAscension function={()=>setIsImage(3)} numero={3} name={'Ascension'} />
            <ButtonAscension function={()=>setIsImage(4)} numero={4} name={'Ascension'} />
            </div>
            <div>
                <StyledImg src={props?.data ? props?.data[isImage] : ''}></StyledImg>
            </div>
        </div>
    );
};

export default ImageAscension;

const StyledImg = styled.img`
    width: 50%;
    height: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
@media (min-width: 768px){
    width: 100%;
    height: 100%;
  }
`;