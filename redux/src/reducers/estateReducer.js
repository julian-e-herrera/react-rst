import { INIT_DOWN_ESTATE, GET_ESTATE_SUCCESS, DOWN_ESTATE_ERROR } from '../types'

const initialState = {
  estate: [],
  error: false,
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT_DOWN_ESTATE:
      return {
        ...state,
        loading: action.payload,
      }
    case GET_ESTATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        estate: action.payload,
      }
    case DOWN_ESTATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
