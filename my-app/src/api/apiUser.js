import axios from 'axios'
const userEndPoint = 'http://localhost:3000/'

export default axios.create({
  baseURL: userEndPoint,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer Client-ID `,
  },
})
