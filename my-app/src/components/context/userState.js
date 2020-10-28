import React, { useReducer } from 'react'
import userContext from './userContext'
import userReducer from './userReducer'
import { USER_LOGIN, USER_SET } from '../types'

const UserState = (props) => {
  const usuarios = [
    {
      id: 1,
      name: 'julian',
      pass: 'admin',
      favs: [],
    },
    {
      name: 'usuario',
      pass: 'noadmin',
      id: 37,
    },
    {
      name: 'alberto',
      pass: '1234',
      favs: [],
      id: 38,
    },
    {
      name: 'nuevo',
      pass: 'nuevo',
      favs: [],
      id: 39,
    },
  ]

  const initialState = {
    isLogged: false,
    users: [],
  }

  const [state, dispatch] = useReducer(userReducer, initialState)

  const showLogin = (login) => {
    dispatch({
      type: USER_LOGIN,
      payload: login,
    })
  }
  const setUsers = () => {
    dispatch({
      type: USER_SET,
      payload: usuarios,
    })
  }

  return (
    <userContext.Provider
      value={{
        isLogged: state.isLogged,
        users: state.users,
        showLogin,
        setUsers,
      }}
    >
      {props.children}
    </userContext.Provider>
  )
}

export default UserState
