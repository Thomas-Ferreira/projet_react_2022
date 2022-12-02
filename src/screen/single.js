import React from 'react';
import Api from '../components/api';
import Header from '../components/header';
import GlobalStyle from '../config/globalStyle';
import { useParams } from 'react-router';

const Single = () => {
    const {id} = useParams() 
    return (
        <div>
            <GlobalStyle />
            <Api id={id}></Api>
        </div>
    );
};

export default Single;