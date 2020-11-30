import axios from 'axios'

const accesKey = 'rQ-_SmO3ayd_uvDdmk1atdqJifxUQahY2IdZM90ux6k'

export const estateAxios = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer Client-ID ${accesKey}`,
  },
})

export const clientAxios = axios.create({
  baseURL: 'http://localhost:4000/',
})

export default (estateAxios, clientAxios)
module.export = clientAxios
module.export = estateAxios
