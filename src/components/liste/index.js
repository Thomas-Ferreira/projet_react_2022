import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import styled from 'styled-components'

const Liste = () => {

    const dispatch = useDispatch()
    const apiResponse = useSelector(state =>
        state.api.response.data ? state.api.response.data : []
    )
    const apiError = useSelector(state => state.api.error)

    useEffect(() => {
        dispatch(allTheActions.api.getAllServants())
        console.log(apiResponse);
    }, [])

    return (
        <ContainAll>
            {apiResponse.map(item =>(
                <ContainerColumn>
                    <img src={item.face}></img>
                    <div>{item.name}</div>
                    <div>{item.rarity}</div>
                    <div>{item.id}</div>
                </ContainerColumn>
            ))}
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

const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`