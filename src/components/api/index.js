import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import ReactECharts from 'echarts-for-react'
import ImageAscension from '../imageAscension';
import Description from '../description';
import styled from 'styled-components';
import Name from '../name';
import Rarity from '../rarity';

const Api = (props) => {

    const dispatch = useDispatch()
    const apiResponse = useSelector(state => state.api.oneServant.data ? state.api.oneServant.data : [])
    const apiError = useSelector(state => state.api.error)

    useEffect(() => {
      dispatch(allTheActions.api.getOneServantWithLore(props.id))
  }, [])

    const option = {
      grid: { top: 8, right: 8, bottom: 24, left: 36 },
      xAxis: {
        type: 'category'
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
        <div>
          <Name nom={apiResponse?.name}  classe={apiResponse?.className} />
          <RarityDiv>
            <Rarity nombre={apiResponse?.rarity} />
          </RarityDiv>
        </div>
        <SecondLine>
        <Description   
        profile ={apiResponse?.profile?.comments}
        />
        <ImageAscension data={apiResponse.extraAssets?.charaGraph?.ascension} rarity={apiResponse?.rarity} />
        </SecondLine>
        <ReactECharts option={option} />
        </>
    );
};

export default Api;

const RarityDiv =styled.div`
display: flex;
justify-content: center;
@media (min-width: 768px) {
    
}
`

const SecondLine = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 768px){
    justify-content: space-between;
    flex-direction: row;
  }
`