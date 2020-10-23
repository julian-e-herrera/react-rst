import axios from 'axios'
import api from './api'
import apiUser from './apiUser'

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

async function getUser(id) {
  try {
    const response = await api.get(`/users/${id}`)
    return response
  } catch (error) {
    console.error(error)
    return error.message
  }
}
////////////////users
const createUser = (data) => {
  return apiUser.post('/users', data)
}

const getUsers = () => {
  return apiUser.get('/users')
  // console.log(response.data)
  // console.log(response.status)
  // console.log(response.statusText)
  // console.log(response.headers)
  // console.log(response.config)
}

const updateUser = (id, data) => {
  return apiUser.put(`/users/${id}`, data)
}

const removeUser = (id) => {
  return axios.delete(`/users/${id}`)
}

const removeAllUsers = () => {
  return axios.delete(`/users/`)
}

const findByTitle = (title) => {
  return axios.get(`?title=${title}`)
}

export default {
  getAll,
  getUser,
  createUser,
  updateUser,
  removeUser,
  removeAllUsers,
  findByTitle,
  getUsers,
}
