import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonAscension from '../buttonAscension';

const Comments = ({comments=[]}) => {

    const [currentComment, setCurrentComment ] = useState('')
    const [isFocused, setIsFocused] = useState(1)

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
            <div>
                {currentComment}
            </div>
        </Container>
    );
};

export default Comments;

const Container = styled.div`
    display: flex;
    margin: 2vh;
`

const DivButton = styled.div`
    //display: flex;
`