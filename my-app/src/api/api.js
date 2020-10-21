import axios from 'axios'
const accesKey = 'rQ-_SmO3ayd_uvDdmk1atdqJifxUQahY2IdZM90ux6k'
const endPoint = 'https://api.unsplash.com/'

export default axios.create({
  baseURL: endPoint,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer Client-ID ${accesKey}`,
  },
})
