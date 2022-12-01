import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ButtonAscension from '../buttonAscension';

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
            <ButtonAscension function={()=>imageSet(1)} numero={1} name={'Ascension'} isFocused={isFocused === 1 } />
            <ButtonAscension function={()=>imageSet(2)} numero={2} name={'Ascension'} isFocused={isFocused === 2 } />
            <ButtonAscension function={()=>imageSet(3)} numero={3} name={'Ascension'} isFocused={isFocused === 3 }/>
            <ButtonAscension function={()=>imageSet(4)} numero={4} name={'Ascension'} isFocused={isFocused === 4 }/>
            </DivImg>
            <div>
                <StyledImg src={props?.data ? props?.data[isImage] : ''}></StyledImg>
            </div>
        </Container>
    );
};

export default ImageAscension;

const Container = styled.div`
    background-color: #1f2557;
    //margin-top: 2vh;
    //margin-bottom: 2vh;
    margin: 2vh;
    padding-top: 5vh;
    padding-bottom: 5vh;
    border-radius: 20px;
`

const DivImg = styled.div`
    display: flex;
    justify-content: center;
`

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