import React, { useReducer } from 'react'
import userContext from './userContext'
import userReducer from './userReducer'
import { USER_LOGIN, USER_GET, GET_FAVS } from '../types'

const UserState = (props) => {
  const usuarios = [
    {
      id: 1,
      name: 'julian',
      pass: 'admin',
      favs: ['XS3q-m3aGEM', 'Rww63pSEAkk', '548KRAe7_L0'],
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
  const getUsers = () => {
    dispatch({
      type: USER_GET,
      payload: usuarios,
    })
  }
  const getFavs = () => {
    dispatch({
      type: GET_FAVS,
      payload: usuarios.favs,
    })
  }

  return (
    <userContext.Provider
      value={{
        isLogged: state.isLogged,
        users: state.users,
        showLogin,
        getUsers,
        getFavs,
      }}
    >
      {props.children}
    </userContext.Provider>
  )
}

export default UserState
