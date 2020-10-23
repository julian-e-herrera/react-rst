import React from 'react'
import ButtonStyled from './styled/button'

export function Login() {
  return (
    <div className="popup" id="popup">
      <form>
        <h3>Log-in</h3>
        <h4>Please confirm your access.</h4>
        <label HTMLfor="usuario">User</label>
        <input type="text" id="usuario" />
        <label for="password">Password</label>
        <input type="text" id="password" />
        <ButtonStyled>Log In</ButtonStyled>
      </form>
    </div>
  )
}

export default Login
