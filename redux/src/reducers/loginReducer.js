import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, LOGOUT_USER } from '../types'

const initialState = {
  auth: null,
  user: null,
  error: false,
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER: //check these three
      return {
        ...state,
        loading: action.payload,
      }
    case LOGOUT_USER: //check these three
      return {
        ...state,
        auth: action.payload,
        user: null,
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        auth: true,
        user: action.payload,
      }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        auth: false,
        error: action.payload,
      }

    default:
      return state
  }
}
