import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import ReactECharts from 'echarts-for-react'
import ImageAscension from '../imageAscension';

const Api = (props) => {

    const dispatch = useDispatch()
    const apiResponse = useSelector(state =>
        state.api.response.data ? state.api.response.data : [])
    const apiError = useSelector(state => state.api.error)

    const [ascension, setAscension] = useState([])

    useEffect(() => {
      dispatch(allTheActions.api.getOneServantWithLore(props.id))
      //console.log(apiResponse);
      setAscension(apiResponse.extraAssets.charaGraph.ascension)
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
        <ImageAscension data={ascension}></ImageAscension>
        <ReactECharts option={option} />
        </>
    );
};

export default Api;