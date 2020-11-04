import { combineReducers } from 'redux'
import userReducer from './userReducer'
import estateReducer from './estateReducer'

export default combineReducers({
  users: userReducer,
  estate: estateReducer,
})
