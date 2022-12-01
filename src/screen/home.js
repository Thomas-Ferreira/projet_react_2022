import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Liste from '../components/liste';
import GlobalStyle from '../config/globalStyle';

const Home = () => {
    return (
        <div>
            <GlobalStyle />
            {/* <Header></Header> */}
            <Liste></Liste> 
        </div>
    );
};

export default Home;


const ContainAll = styled.div`
    min-height:100vh;
    height:100%;
    background-repeat: no-repeat;
    background-size:cover;
`

const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`