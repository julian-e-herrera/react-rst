import axios from 'axios'
const userEndPoint = 'http://localhost:3000/mock.json'

export default axios.create({
  baseURL: userEndPoint,
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer Client-ID `,
  },
})
