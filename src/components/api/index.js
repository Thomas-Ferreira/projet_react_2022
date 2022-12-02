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
      title: {
        text: 'Stats ATK et PV'
      },
      legend: {
        data:['ATK','PV']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap : false,
      },
      yAxis: {
        type: 'value',
        boundaryGap : false,
      },
      series: [
        {
          name: 'ATK',
          data: apiResponse.atkGrowth,
          type: 'line',
          smooth: true,
        },
        {
          name: 'PV',
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
          <ImageAscension data={apiResponse.extraAssets?.charaGraph?.ascension} rarity={apiResponse?.rarity} />
          <Name nom={apiResponse?.name}  classe={apiResponse?.className} />
          <RarityDiv>
            <Rarity nombre={apiResponse?.rarity} />
          </RarityDiv>
        </FirstLine>

        <SecondLine>
        <Description   
        profile ={apiResponse?.profile?.comments}
        />
        </SecondLine>
        
        <DivCharts>
        <ReactECharts option={option} style={{height: 400}} />
        </DivCharts>
        </>
    );
};

export default Api;

const DivCharts = styled.div`
  margin : 2vh;
`

const RarityDiv =styled.div`
display: flex;
justify-content: center;
@media (min-width: 768px) {
    
}
`

const FirstLine = styled.div`
margin-bottom: 2vh;
`

const SecondLine = styled.div`
  display: flex;
  margin-top: 2vh;
  margin-bottom: 3vh;
  @media (min-width: 768px){
    display: block;
  }
`