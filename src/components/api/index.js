import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import ReactECharts from 'echarts-for-react'

const Api = (props) => {

    const dispatch = useDispatch()
    const apiResponse = useSelector(state =>
        state.api.response.data ? state.api.response.data : [])
    const apiError = useSelector(state => state.api.error)

    useEffect(() => {
      dispatch(allTheActions.api.getOneServantWithLore(props.id))
      console.log(apiResponse);
  }, [])

    console.log(apiResponse);

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
        <ReactECharts option={option}/>
    );
};

export default Api;