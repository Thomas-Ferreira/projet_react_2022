import { API_SUCCESS, API_ERROR, API_SUCCESS_SEARCH } from '../actions/api'

const initialState = {
  response: [],
  oneServant: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case API_SUCCESS:
      return {
        ...state,
        [action.payload.label]: { ...action.payload.response }
      }
    case API_SUCCESS_SEARCH:
      return {
        ...state,
        response: { ...action?.data }
      }
    case API_ERROR:
      return {
        ...state,
        error: { ...action.error }
      }
    default:
      return state
  }
}