import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Api = () => {

    const dispatch = useDispatch()
    const apiResponse = useSelector(state =>
        state.api.response.data ? state.api.response.data : []
    )
    const apiError = useSelector(state => state.api.error)

    const [dataCharts, setDataCharts] = useState([])
    const [atkGrowth, setAtkGrowth] = useState()
    const [hpGrowth, setHpGrowth] = useState()

    /*const addAtk =(index, value) => {
        const newValue={
            id : index,
            atk : value
        }
        setAtkGrowth([...atkGrowth, newValue])
    }

    const addHp =(index, value) => {
        const newValue={
            id : index,
            atk : value
        }
        setHpGrowth([...hpGrowth, newValue])
    }*/

    const addData = (level, atk, hp) => {
        const newData ={
            level : level,
            atk : atk,
            hp : hp
        }
        setDataCharts([...dataCharts, newData])
    }


    useEffect(() => {
        dispatch(allTheActions.api.getOneServantWithLore(200100))
    }, [])

    if (!apiResponse.length && apiResponse.length === undefined) {
        setAtkGrowth(apiResponse.atkGrowth)
        setHpGrowth(apiResponse.hpGrowth)
        /*for (let index = 0; index <= atkGrowth.length && index <= hpGrowth; index++) {
            addData(index, atkGrowth[index].length, hpGrowth[index].length)
        }*/
        console.log(atkGrowth);
        console.log(apiResponse);
    }

    return (
       <div>
<ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={dataCharts}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="atk" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="hp" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
       </div>
    );
};

export default Api;