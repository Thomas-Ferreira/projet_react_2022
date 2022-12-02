import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ButtonAscension from '../buttonAscension';
import { motion } from 'framer-motion'

const Comments = ({comments=[]}) => {

    const [currentComment, setCurrentComment ] = useState('')
    const [isFocused, setIsFocused] = useState(0)

    const CommentSet = (id, comment)=>{
        setCurrentComment(comment)
        setIsFocused(id)
    }

    return (
        <Container>
            <DivButton>
                {
                comments.map(item=>{
                    return <ButtonAscension function={() => CommentSet(item.id, item.comment)} numero={item.id} name={'Comment'} isFocused={isFocused === item.id} />
                })}
            </DivButton>
            {currentComment ? 
            <DivComment>
                {currentComment}
            </DivComment> 
            :
            <DivComment>
            Some trivia and informations about this character
            </DivComment>}
        </Container>
    );
};

export default Comments;

const DivComment = styled.div`
    background-color: #1f2557;
    margin: 2vh;
    padding-right: 1vh;
    padding-left: 1vh;
    padding-top: 5vh;
    padding-bottom: 5vh;
    border-radius: 20px;
    font-size: 15px;
    color: #ffffff;
    text-align: justify;
    @media (min-width: 768px){
        font-size: 18px;
    }
`

const Container = styled.div`
    display: flex;
    background-color: #1f2557;
    margin-top: 2vh;
    margin-bottom: 2vh;
    @media (min-width: 768px) {
        display: block;
    }
`

const DivButton = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px){
        flex-direction: row;
        justify-content: center;
    }
`