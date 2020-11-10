import { INIT_DOWN_ESTATE, GET_ESTATE_SUCCESS, DOWN_ESTATE_ERROR } from '../types'
import { estateAxios } from '../config/axios'
import Swal from 'sweetalert2'
//crearuser

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
