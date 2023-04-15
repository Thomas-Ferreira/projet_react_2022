import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Liste from '../components/liste';
import GlobalStyle from '../config/globalStyle';

const Home = () => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Liste /> 
        </div>
    );
};

export default Home;