import axios from 'axios'

export const API_SUCCESS = 'API_SUCCESS'
export const API_ERROR = 'API_ERROR'
export const API_SUCCESS_SEARCH = 'API_SUCCESS_SEARCH'

// Thunk function
export const getAllServants = () => dispatch => {
    axios({
      method: 'GET',
      url: `https://api.atlasacademy.io/export/NA/basic_servant.json`,
    })
      .then(response => {
        dispatch({ type: API_SUCCESS, payload: {response, label: 'response'} })
      })
      .catch(error => {
        dispatch({ type: API_ERROR, error: error })
      })
  }

  export const getOneServantWithLore = (param) => dispatch => {
    axios({
      method: 'GET',
      url: `https://api.atlasacademy.io/nice/NA/svt/${param}?lore=true`,
    })
      .then(response => {
        dispatch({ type: API_SUCCESS, payload: {response, label: 'oneServant'} })
      })
      .catch(error => {
        dispatch({ type: API_ERROR, error: error })
      })
  }