import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import styled from 'styled-components'
import ListeRow from '../listeRow';
import { motion } from 'framer-motion';

const Liste = () => {

    const dispatch = useDispatch()
    const apiResponse = useSelector(state =>
        state.api.response.data ? state.api.response.data : []
    )
    const apiError = useSelector(state => state.api.error)

    useEffect(() => {
        dispatch(allTheActions.api.getAllServants())
    }, [])
    
    return (
        <ContainAll>
            {apiResponse.map(item =>{
                return<> 
                <motion.div
                whileInView={{ x: 0 }}
                initial={{ x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}>
                <ListeRow name={item.name} face={item.face} rarity={item.rarity} id={item.id} ></ListeRow>
                </motion.div>
                </>
            })}
        </ContainAll>
    );
};

export default Liste;

const ContainAll = styled.div`
    min-height:100vh;
    height:100%;
    background-repeat: no-repeat;
    background-size:cover;
`