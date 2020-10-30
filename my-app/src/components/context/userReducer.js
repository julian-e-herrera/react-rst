import { USER_LOGIN, USER_GET, GET_FAVS } from '../types'
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
    case GET_FAVS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}
