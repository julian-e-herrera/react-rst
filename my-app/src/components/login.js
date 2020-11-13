import React, { useState } from 'react'
import API from '../api/service'
import ButtonStyled from './styled/button'

export function Login() {
  const [user, setUser] = useState({
    name: '',
    pass: '',
    favs: [],
  })
  const [isLoggin, setLoggin] = useState(false)
  const [users, setUsers] = useState([])

  async function checkUser() {
    API.getUsers().then(
      (response) => {
        const all = response.data
        console.log(all)
        setUsers(all)
        //console.log(users)
        //console.log(true)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  const filterUser = (data) => {
    const uno = (users.filter((test) => data.name == test.name), {})
    console.log(uno)
    return uno
  }

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const sendData = (event) => {
    event.preventDefault()
    console.log(filterUser(user))
    console.log(user)
  }

  return (
    <div className="popup" id="popup">
      <form>
        <h3>Log-in</h3>
        <h4>Please confirm your access.</h4>
        <label htmlFor="usuario">User</label>
        <input type="text" id="user" name="name" onChange={handleInputChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="pass" onChange={handleInputChange} />
        <ButtonStyled onClick={sendData}>Log In</ButtonStyled>
      </form>
    </div>
  )
}

export default Login
