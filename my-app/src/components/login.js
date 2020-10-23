import React, { useState } from 'react'
import API from '../api/service'
import ButtonStyled from './styled/button'

export function Login() {
  const [user, setUser] = useState({
    name: '',
    pass: '',
    favs: [],
  })
  async function request() {
    API.createUser(user).then(
      (response) => {
        const all = response.data
        console.log(all)
      },
      (error) => {
        console.log(error)
      }
    )
  }
  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const sendData = (event) => {
    event.preventDefault()
    request()
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
        <ButtonStyled type="submit" onClick={sendData}>
          Log In
        </ButtonStyled>
      </form>
    </div>
  )
}

export default Login
