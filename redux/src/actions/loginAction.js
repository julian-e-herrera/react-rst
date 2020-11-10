import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, LOGOUT_USER } from '../types'
import { clientAxios } from '../config/axios.js'
import Swal from 'sweetalert2'
import jwt from 'jsonwebtoken'
import { useSelector } from 'react-redux'

export function login(user) {
  //const [jwt,setJwt]=useState(()=> window.sessionStorage.getItem('jwt'))
  const { username, password } = user
  const token = jwt.sign(
    {
      //id: user.id, //aca va el id del ususario q se loguea
      username: username, //
      password: password,
      //favs: user.favs,
    },
    process.env.SECRETWORD,
    { expireIn: '1h' }
  )

  window.sessionStorage.setItem('jwt', token)

  return async (dispatch) => {
    dispatch(loginUser())

    try {
      //get from api
      const validUser = await clientAxios.get(`users/${user.id}`)
      //if success, update state
      dispatch(loginUserSuccess(user))
      //alert
      Swal.fire('Success', 'User loging was succesfully', 'success')
    } catch (error) {
      console.log(error)
      dispatch(loginUserError(true))
      Swal.fire({
        icon: 'error',
        title: 'Error login',
        text: 'Was an error,try again',
      })
    }
  }
}
////////////////////////////////////////////////
export const searchUser = (user) => {
  const { username, password } = user

  // console.log(username)
  //console.log(password)

  return async (dispatch) => {
    dispatch(loginUser())
    try {
      const users = await clientAxios.get(`/users`)
      console.log(users.data)
      //me fijo si existe el usuario
      const validUser = users.data.filter((person) => person.username.toLowerCase().includes(username))
      const encontrado = validUser[0]
      //console.log(encontrado.password === user.password)
      if (encontrado.password === user.password) {
        //  console.log(encontrado)
        dispatch(loginUserSuccess(encontrado))
        //return encontrado
      }
    } catch (error) {
      dispatch(loginUserError(true))

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
