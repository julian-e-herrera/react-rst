import { combineReducers } from 'redux'
import userReducer from './userReducer'
import estateReducer from './estateReducer'
import loginReducer from './loginReducer'

export default combineReducers({
  users: userReducer,
  estate: estateReducer,
  login: loginReducer,
})
