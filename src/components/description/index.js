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
    
    @media (min-width: 768px) {
        max-width: 650px;
    }
`

