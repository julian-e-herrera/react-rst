import { ADD_FAV, ADD_USER, ADD_USER_SUCCESS, ADD_USER_ERROR } from '../types'
import { clientAxios } from '../config/axios.js'
import Swal from 'sweetalert2'
//crearuser
export function createUser(user) {
  return async (dispatch) => {
    dispatch(addUser())

    try {
      //insert at api
      await clientAxios.post('/users', user)
      //if success, update state
      dispatch(addUserSuccess(user))
      //alert
      Swal.fire('Success', 'User loging was succesfully', 'success')
    } catch (error) {
      console.log(error)
      dispatch(addUserError(true))
      Swal.fire({
        icon: 'error',
        title: 'Error login',
        text: 'Was an error,try again',
      })
    }
  }
}

export const setFav = (fav) => {
  return async (dispatch) => {
    dispatch(addFav())
    try {
      // dispatch(addUserSuccess())
      //alert
      Swal.fire('Success', 'User loging was succesfully', 'success')
    } catch (error) {}
  }
}

const addFav = (fav) => ({
  type: ADD_FAV,
  payload: fav,
})

const addUser = () => ({
  type: ADD_USER,
  payload: true,
})

///si se guarda
const addUserSuccess = (user) => ({
  type: ADD_USER_SUCCESS,
  payload: user,
})
//si hubo erro
const addUserError = (fail) => ({
  type: ADD_USER_ERROR,
  payload: fail,
})
