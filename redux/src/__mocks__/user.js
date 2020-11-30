import { readFileSync } from 'fs'
import path from 'path'
import { clientAxios } from '../config/axios'
// const estate = JSON.parse(readFileSync(path.join(__dirname, 'user.json')).toString())
// module.exports = estate

const axios = clientAxios

// class Users {
//   static all() {
//     return axios.get('./user.json').then((resp) => resp.data)
//   }
// }

// module.export = Users
class Users {
  static all() {
    return axios.get('./user.json').then((resp) => resp.data)
  }
}

export default Users
