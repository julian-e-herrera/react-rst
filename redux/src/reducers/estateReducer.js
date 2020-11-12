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

const initialState = {
  estate: [],
  error: false,
  loading: false,
  favs: [],
  fav_change: null,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case INIT_DOWN_ESTATE:
      return {
        ...state,
        loading: action.payload,
      }
    case GET_ESTATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        estate: action.payload,
      }
    case DOWN_ESTATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case ADD_FAV:
      return {
        ...state,
        favs: [...state.favs, action.payload],
      }
    case SELECTED_FAV:
      return {
        ...state,
        fav_change: action.payload,
      }
    case DELETE_FAV:
      return {
        ...state,
        favs: state.favs.filter((fav) => fav !== state.fav_change),
        fav_change: null,
      }
    case GET_FAVS:
      return {
        ...state,
        loading: action.payload,
      }
    case GET_FAVS_SUCCESS:
      return {
        ...state,
        favs: [...state.favs, action.payload],
      }

    default:
      return state
  }
}
