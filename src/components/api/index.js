import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'

const Api = () => {

    const dispatch = useDispatch()
    const apiResponce = useSelector(state =>
        state.api.response.data ? state.api.response.data : []
    )
    const apiError = useSelector(state => state.api.error)
    //console.log(apiResponce);

    useEffect(() => {
        dispatch(allTheActions.api.getOneServant(200100))
    }, [])

    return (
        <div>
            {apiResponce.name}
        </div>
    );
};

export default Api;