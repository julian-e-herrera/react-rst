import axios from 'axios'
import api from './api'
// const accesKey = 'rQ-_SmO3ayd_uvDdmk1atdqJifxUQahY2IdZM90ux6k'
// const endPoint = 'https://api.unsplash.com/search/photos'

async function getAll() {
  try {
    //const response = await axios.get(endPoint + '?query=new-york&client_id=' + accesKey)
    const response = await api.get('search/photos?query=new-york')
    // console.log(response.data)
    // console.log(response.status)
    // console.log(response.statusText)
    // console.log(response.headers)
    // console.log(response.config)
    return response
  } catch (error) {
    console.error(error)
    return error.message
  }
}

async function get(id) {
  try {
    const response = await api.get(`/photos/${id}`)
    return response
  } catch (error) {
    console.error(error)
    return error.message
  }
}

const create = (data) => {
  return axios.post('/photos/', data)
}

const update = (id, data) => {
  return axios.put(`/photos/${id}`, data)
}

const remove = (id) => {
  return axios.delete(`/photos/${id}`)
}

const removeAll = () => {
  return axios.delete(`/photos/`)
}

const findByTitle = (title) => {
  return axios.get(`?title=${title}`)
}

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
}
