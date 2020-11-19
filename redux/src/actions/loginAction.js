import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, LOGOUT_USER, UPDATE_FAV } from '../types'
import { clientAxios } from '../config/axios.js'
import Swal from 'sweetalert2'

export const searchUser = (user) => {
  const { username, password } = user
  return async (dispatch) => {
    dispatch(loginUser())
    try {
      const users = await clientAxios.get(`/users`)
      console.log(users.data)
      //me fijo si existe el usuario
      const validUser = users.data.filter((person) => person.username.toLowerCase().includes(username))
      const encontrado = validUser[0]
      if (!encontrado) {
        failLog()
      } else if (encontrado.password === password) {
        //  console.log(encontrado)
        dispatch(loginUserSuccess(encontrado))
        Swal.fire('Success', 'User loging was succesfully', 'success')
      }
    } catch (error) {
      dispatch(loginUserError(true))

      Swal.fire({
        icon: 'error',
        title: 'Error login',
        text: 'Username or password are wrong,please try again',
      })

      console.log(error)
    }
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutUser(false))
  }
}

const loginUser = () => ({
  type: LOGIN_USER,
  payload: true,
})
const logoutUser = (fail) => ({
  type: LOGOUT_USER,
  payload: fail,
})

///si se guarda
const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
})
//si hubo erro
const loginUserError = (fail) => ({
  type: LOGIN_USER_ERROR,
  payload: fail,
})
const failLog = () => {
  Swal.fire({
    icon: 'error',
    title: 'Error login',
    text: 'Username or password are wrong,please try again',
  })
}
///////////////FAVS
export function setUpdateFav(id, user) {
  //update el usuario
  return async (dispatch) => {
    dispatch(updatedFav(user))
    try {
      const resultado = await clientAxios.put(`/users/${id}`, user)
      console.log(resultado)
    } catch (error) {
      console.log(error)
    }
    console.log(user)
    console.log(' entro setUpdate')
  }
}

const updatedFav = (user) => ({
  type: UPDATE_FAV,
  payload: user,
})
