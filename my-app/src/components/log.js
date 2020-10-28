import React, { useState, useContext, Fragment, useEffect } from 'react'
import UserContext from './context/userContext'
import ButtonStyled from './styled/button'

export function Login() {
  const userContext = useContext(UserContext)
  const { isLogged, showLogin, setUsers } = userContext
  const [user, setUser] = useState({
    name: '',
    pass: '',
  })

  useEffect(() => {
    setUsers()
  }, [])

  const { name, password } = user

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const sendData = (event) => {
    event.preventDefault()

    console.log(user)
  }

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <Fragment>
      {isLogged ? (
        <ButtonStyled onClick={() => showLogin(false)}>Logout</ButtonStyled>
      ) : (
        <div className="popup" id="popup">
          <form onSubmit={sendData}>
            <h3>Log-in</h3>
            <h4>Please confirm your access.</h4>
            <label htmlFor="usuario">User</label>
            <input type="text" id="user" name="name" value={name} onChange={handleInputChange} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="pass" value={password} onChange={handleInputChange} />
            <ButtonStyled onClick={() => showLogin(true)}>Log In</ButtonStyled>
          </form>
        </div>
      )}
    </Fragment>
  )
}

export default Login
