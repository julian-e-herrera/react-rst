import React, { useEffect, useState } from 'react'
import API from '../api/service'
import ButtonStyled from './styled/button'

export function Login() {
  const [user, setUser] = useState({
    name: '',
    pass: '',
  })

  useEffect(() => {
    API.getUsers().then(
      (response) => {
        const all = response
        console.log(all)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])

  const sendData = (event) => {
    event.preventDefault()
    setUser({ ...user, [event.target.name]: event.target.value })
    console.log(user)
  }

  return (
    <div className="popup" id="popup">
      <form onSubmit={sendData}>
        <h3>Log-in</h3>
        <h4>Please confirm your access.</h4>
        <label HTMLfor="usuario">User</label>
        <input type="text" id="user" name="name" />
        <label for="password">Password</label>
        <input type="password" id="password" name="pass" />
        <ButtonStyled>Log In</ButtonStyled>
      </form>
    </div>
  )
}

export default Login
