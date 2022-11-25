import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import ReactECharts from 'echarts-for-react'
import ImageAscension from '../imageAscension';
import Description from '../description';
import styled from 'styled-components';

const Api = (props) => {

    const dispatch = useDispatch()
    const apiResponse = useSelector(state => state.api.oneServant.data ? state.api.oneServant.data : [])
    //console.log("🚀 ~ file: index.js ~ line 11 ~ Api ~ apiResponse", apiResponse)
    const apiError = useSelector(state => state.api.error)

    useEffect(() => {
      dispatch(allTheActions.api.getOneServantWithLore(props.id))
  }, [])

    const option = {
      grid: { top: 8, right: 8, bottom: 24, left: 36 },
      xAxis: {
        type: 'category',
        data: apiResponse.level,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: apiResponse.atkGrowth,
          type: 'line',
          smooth: true,
        },
        {
          data:apiResponse.hpGrowth,
          type: 'line',
          smooth: true,
        },
      ],
      tooltip: {
        trigger: 'axis',
      },
    };

    return (
        <>
        <FirstLine>
        <Description 
        name ={apiResponse?.name} 
        class ={apiResponse?.className} 
        rarity ={apiResponse?.rarity} 
        profile ={apiResponse?.profile?.comments}
        />
        <ImageAscension data={apiResponse.extraAssets?.charaGraph?.ascension} rarity={apiResponse?.rarity} />
        </FirstLine>
        <ReactECharts option={option} />
        </>
    );
};

export default Api;

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
`;