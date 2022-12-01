import React, { useState } from 'react';
import styled from 'styled-components';
import Comments from '../comments';

const Description = (props) => {
    
    return (
        <DivComment>
            <Comments comments={props?.profile} />
        </DivComment>
    );
};

export default Description

const DivComment = styled.div`
    display: flex;
    @media (min-width: 768px) {
        display: block;
    }
`

