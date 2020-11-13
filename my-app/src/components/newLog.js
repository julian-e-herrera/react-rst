import React, { useState } from 'react'
import API from '../api/service'
import ButtonStyled from './styled/button'

export function NewLogin() {
  const [user, setUser] = useState({
    name: '',
    pass: '',
    confirmPass: '',
    favs: [],
  })

  const { name, password, confirmPass } = user

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="popup" id="popup">
      <form>
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
    </div>
  )
}

export default NewLogin
