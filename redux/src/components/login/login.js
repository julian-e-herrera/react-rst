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

  ///crea una funcion al utilizar use dispatch
  const dispatch = useDispatch()

  useEffect(() => {
    const loaduser = () => dispatch(searchUser(userI))
    loaduser()
  }, [])

  const userLog = useSelector((state) => state.login.user)

  //console.log(userLog)

  ////acceder store del state
  const loading = useSelector((state) => state.login.loading)
  console.log(loading)
  const addUser = (user) => dispatch(searchUser(user))
  //FALTA MARCAR ERROR CUANDO EL LOGUEO ES ERRONEO,RECORDAR AGREGAR BOTON PARA
  //VER FAVS PENSAR SI CREAR UN CARRUSEL BUEVO O UNA ESTRUCTURA NUEVA

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
          required
        />

        <ButtonStyled>Sign-in</ButtonStyled>
      </form>
      {/* {loading ? <p>Loading...</p> : null} */}
      {/* {error ? <p>Hubo un console.error();</p> : null} */}
    </LoginStyled>
  )
}

export default Login
