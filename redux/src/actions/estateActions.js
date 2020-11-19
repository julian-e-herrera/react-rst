import {
  INIT_DOWN_ESTATE,
  GET_ESTATE_SUCCESS,
  DOWN_ESTATE_ERROR,
  ADD_FAV,
  SELECTED_FAV,
  DELETE_FAV,
  UPDATE_FAV,
  GET_FAVS,
  GET_FAVS_SUCCESS,
} from '../types'
import { estateAxios, clientAxios } from '../config/axios'
import { useSelector } from 'react-redux'

export function getEstateAction() {
  return async (dispatch) => {
    dispatch(downloadEstate())

    try {
      const response = await estateAxios.get('search/photos?query=new-york')
      //console.log(response.data.results)
      dispatch(downloadEstateSuccess(response.data.results))
    } catch (error) {
      dispatch(DownloadEstateError(true))
    }
  }
}

const downloadEstate = () => ({
  type: INIT_DOWN_ESTATE,
  payload: true,
})
///si se baja
const downloadEstateSuccess = (estate) => ({
  type: GET_ESTATE_SUCCESS,
  payload: estate,
})

//si hubo erro
const DownloadEstateError = (fail) => ({
  type: DOWN_ESTATE_ERROR,
  payload: fail,
})

///favrites*/////////////////*////
export function addFav(id) {
  return (dispatch) => {
    dispatch(isertFav(id))
    console.log('entro al action de agregar')
  }
}

const isertFav = (id) => ({
  type: ADD_FAV,
  payload: id,
})

export function selectFav(id) {
  ////////////////////////////////////////////
  return async (dispatch) => {
    dispatch(selFav(id))
    console.log(id)
  }
}

const selFav = (id) => ({
  type: SELECTED_FAV,
  payload: id,
})

// export function deleteFav(user) {
//   //en realidad es update
//   return async (dispatch) => {
//     dispatch(selFav(user))
//     try {
//       const resultado = clientAxios.put(`/users/${user.id}`, user)
//       console.log(resultado)
//     } catch (error) {}

//     console.log(user)
//   }
// }
export function deleteFav(id) {
  return async (dispatch) => {
    dispatch(delFav(id))
    console.log('entro al action de borrar')
  }
}

export function setUpdateFav(id, user) {
  //update el usuario
  return async (dispatch) => {
    dispatch(updatedFav(user))
    try {
      const resultado = clientAxios.put(`/users/${id}`, user)
      console.log(resultado.body)
      /// dispatch(addFav(user))
    } catch (error) {}
    //dispatch(favsUser(true))
    console.log(user)
    console.log(' entro setUpdate')
  }
}

const updatedFav = (user) => ({
  /////esta en login
  type: UPDATE_FAV,
  payload: user,
})

const delFav = (id) => ({
  type: DELETE_FAV,
  payload: id,
})

export function getFavAction(user) {
  return async (dispatch) => {
    dispatch(downloadFav())
    try {
      const users = await clientAxios.get(`/users/${user.id}`)
      const listFav = users.data.favs
      console.log('entro a las listas dl user')
      dispatch(favsUser(listFav))
    } catch (error) {
      //action de error

      console.log(error)
    }
  }
}
export function getFavAct() {
  return async (dispatch) => {
    dispatch(downloadFav())
    try {
      const user = useSelector((state) => state.login.user)
      const listFav = user.favs
      console.log('entro a las listas dl user')
      dispatch(favsUser(listFav))
    } catch (error) {
      //action de error

      console.log(error)
    }
  }
}
const downloadFav = () => ({
  type: GET_FAVS,
  payload: true,
})
const favsUser = (favs) => ({
  type: GET_FAVS_SUCCESS,
  payload: favs,
})
