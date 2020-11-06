import React, { useState } from 'react'
import ButtonStyled from '../../styled/button'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import NewUserLogin from './newUser-styled'
//actionredx
import { createUser } from '../../actions/userActions'
const NewUser = () => {
  const { history } = useHistory()
  ///state del compnente
  const [user, setUser] = useState({
    name: '',
    pass: '',
    confirmPass: '',
    favs: [],
  })

  const { name, password, confirmPass } = user
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
  const submitNewUser = (e) => {
    e.preventDefault()
    // //validar form

    addUser(user)
    //redirect home
    history.push('/') //no estaria andando
  }

  return (
    <NewUserLogin>
      <form onSubmit={submitNewUser}>
        <h3>Sign-in</h3>
        <h4>Please Submit your access.</h4>
        <label htmlFor="usuario">User</label>
        <input type="text" id="user" name="name" value={name} onChange={handleInputChange} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="pass" value={password} onChange={handleInputChange} />
        <label htmlFor="confirmPass">Confirm Password</label>
        <input type="password" id="confirmPass" name="confirmPass" value={confirmPass} onChange={handleInputChange} />
        <ButtonStyled>Sign-in</ButtonStyled>
      </form>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Hubo un console.error();</p> : null}
    </NewUserLogin>
  )
}

export default NewUser
