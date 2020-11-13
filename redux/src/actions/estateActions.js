import {
  INIT_DOWN_ESTATE,
  GET_ESTATE_SUCCESS,
  DOWN_ESTATE_ERROR,
  ADD_FAV,
  SELECTED_FAV,
  DELETE_FAV,
  GET_FAVS,
  GET_FAVS_SUCCESS,
} from '../types'
import { estateAxios, clientAxios } from '../config/axios'

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
  }
}

const isertFav = (id) => ({
  type: ADD_FAV,
  payload: id,
})

export function selectFav(id) {
  return async (dispatch) => {
    dispatch(selFav(id))
    console.log(id)
  }
}

const selFav = (id) => ({
  type: SELECTED_FAV,
  payload: id,
})

export function deleteFav(user) {
  //en realidad es update
  return async (dispatch) => {
    dispatch(selFav(user))
    try {
      const resultado = clientAxios.put(`/users/${user.id}`, user)
      console.log(resultado)
    } catch (error) {}

    console.log(user)
  }
}

const popFav = (id) => ({
  type: DELETE_FAV,
  payload: id,
})

export function getFavAction(user) {
  return async (dispatch) => {
    dispatch(downloadFav())
    try {
      const users = await clientAxios.get(`/users/${user.id}`)
      const listFav = users.data.favs
      //console.log(listFav)
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
