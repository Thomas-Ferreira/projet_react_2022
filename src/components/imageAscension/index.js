import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonAscension from '../buttonAscension';
import { AnimatePresence } from "framer-motion";

const ImageAscension = (props) => {

    const [isImage, setIsImage] = useState(1)
    const [isFocused, setIsFocused] = useState(1)

    const imageSet = (id)=>{
        setIsImage(id)
        setIsFocused(id)
    }

    return (
        <Container>
             <DivImg>
                <StyledImg src={props?.data ? props?.data[isImage] : ''}></StyledImg>
            </DivImg>
            <DivButton>
                <ButtonAscension function={()=>imageSet(1)} numero={1} name={'Ascension'} isFocused={isFocused === 1 } />
                <ButtonAscension function={()=>imageSet(2)} numero={2} name={'Ascension'} isFocused={isFocused === 2 } />
                <ButtonAscension function={()=>imageSet(3)} numero={3} name={'Ascension'} isFocused={isFocused === 3 }/>
                <ButtonAscension function={()=>imageSet(4)} numero={4} name={'Ascension'} isFocused={isFocused === 4 }/>
            </DivButton>
           
        </Container>
    );
};

export default ImageAscension;

const Container = styled.div`
@media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

const DivImg = styled.div`
    background-color: #1f2557;
    @media (min-width: 768px) {
        display: contents;
    }
`

const DivButton = styled.div`
    display: flex;
    justify-content: center;
    
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
@media (min-width: 768px){
    width: 25%;
    height: 25%;
  }
`;