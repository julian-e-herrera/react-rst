import React, { useState, useEffect } from 'react'
import ButtonStyled from '../../styled/button'
import { useDispatch, useSelector } from 'react-redux'

import NewUserLogin from './newUser-styled'
//actionredx
import { createUser } from '../../actions/userActions'
import { searchUser } from '../../actions/loginAction'
const NewUser = () => {
  ///state del compnente
  const [user, setUser] = useState({
    username: '',
    password: '',
    confirmPass: '',
    favs: [],
  })

  const { username, password, confirmPass } = user
  const error = useSelector((state) => state.users.error)

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }
  ///crea una funcion al utilizar use dispatch
  const dispatch = useDispatch()

  ////acceder store del state
  const loading = useSelector((state) => state.users.loading)

  console.log(loading)
  const addUser = (user) => dispatch(createUser(user))

  useEffect(() => {
    const loaduser = () => dispatch(searchUser(user))
    loaduser()
  }, [])

  const getUser = (user) => dispatch(searchUser(user))

  const submitNewUser = (e) => {
    e.preventDefault()
    // //validar form
    if (user.password === user.confirmPass) {
      addUser(user)
      getUser(user)
    }
    console.log('erroooooooooooooor')
    //redirect home
    //history.push('/') //no estaria andando
  }

  return (
    <NewUserLogin>
      <form onSubmit={submitNewUser}>
        <h3>Sign-in</h3>
        <h4>Please Submit your access.</h4>
        <label htmlFor="usuario">User</label>
        <input
          type="text"
          id="user"
          name="username"
          value={username}
          placeholder=" name"
          onChange={handleInputChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleInputChange}
          required
        />
        <label htmlFor="confirmPass">Confirm Password</label>
        <input
          type="password"
          id="confirmPass"
          name="confirmPass"
          value={confirmPass}
          placeholder="Repeat password"
          onChange={handleInputChange}
          required
        />
        <ButtonStyled>Sign-in</ButtonStyled>
      </form>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Hubo un console.error();</p> : null}
    </NewUserLogin>
  )
}

export default NewUser
