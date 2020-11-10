import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from '../types'

const initialState = {
  favs: [],
  token: '',
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
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        login: true,
        // users: [...state.users, action.payload],
      }
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        login: false,
        error: action.payload,
      }
    default:
      return state
  }
}
