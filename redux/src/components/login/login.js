import React, { useState, useEffect } from 'react'
import ButtonStyled from '../../styled/button'
import LoginStyled from './login-styled'
import { useDispatch, useSelector } from 'react-redux'
import { searchUser } from '../../actions/loginAction'

const Login = () => {
  ///state del compnente
  const [userI, setUser] = useState({
    username: '',
    password: '',
  })

  const handleInputChange = (event) => {
    setUser({ ...userI, [event.target.name]: event.target.value })
  }
  // console.log(userI)
  ///build function to use dispatch
  const dispatch = useDispatch()

  const loaduser = () => dispatch(searchUser(userI))
  useEffect(() => {
    loaduser()
  }, [])

  ////access store  state
  const loading = useSelector((state) => state.login.loading)
  // console.log(loading)
  const addUser = (user) => dispatch(searchUser(user))
  //make error was incomplete

  const handleSubmit = (e) => {
    e.preventDefault()
    addUser(userI)
  }
  return (
    <LoginStyled>
      <form onSubmit={handleSubmit}>
        <h3>Log-in</h3>
        <h4>Please Submit your access.</h4>
        <label htmlFor="usuario">User</label>
        <input
          type="text"
          id="user"
          name="username"
          value={userI.username}
          placeholder=" name"
          onChange={handleInputChange}
          data-testid="username"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userI.password}
          placeholder="passsword"
          onChange={handleInputChange}
          data-testid="password"
          required
        />

        <ButtonStyled data-testid="btn-sing-in">Sign-in</ButtonStyled>
      </form>
      {/* {loading ? <p>Loading...</p> : null} */}
      {/* {error ? <p>Hubo un console.error();</p> : null} */}
    </LoginStyled>
  )
}

export default Login
