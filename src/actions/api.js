import axios from 'axios'

export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'
export const API_SUCCESS_SEARCH = 'API_SUCCESS_SEARCH'

// Thunk function
export const getOneServant = (param) => dispatch => {
    axios({
      method: 'GET',
      url: `https://api.atlasacademy.io/basic/NA/svt/`+ param,
    })
      .then(response => {
        dispatch({ type: API_SUCCESS, response: response })
      })
      .catch(error => {
        dispatch({ type: API_ERROR, error: error })
      })
  }

  export const getOneServantWithLore = (param) => dispatch => {
    axios({
      method: 'GET',
      url: `https://api.atlasacademy.io/nice/NA/svt/${param}`,
    })
      .then(response => {
        dispatch({ type: API_SUCCESS, response: response })
      })
      .catch(error => {
        dispatch({ type: API_ERROR, error: error })
      })
  }