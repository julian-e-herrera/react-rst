import { readFileSync } from 'fs'
import path from 'path'
import { estateAxios } from '../config/axios'
//export const estate = JSON.parse(readFileSync(path.join(__dirname, 'api.json')).toString())
const axios = estateAxios
class Properties {
  static all() {
    return axios.get('./api.json').then((resp) => resp.data)
  }
}
export default Properties
