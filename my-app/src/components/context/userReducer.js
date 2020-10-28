import { USER_LOGIN, USER_GET } from '../types'
export default (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogged: action.payload,
      }
    case USER_GET:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}
