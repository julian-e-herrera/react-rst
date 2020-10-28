import { USER_LOGIN, USER_SET } from '../types'
export default (state, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogged: action.payload,
      }
    case USER_SET:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}
