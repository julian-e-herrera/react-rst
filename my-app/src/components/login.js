import React from 'react'
export function Login() {
  return (
    <div>
      <div className="popup" id="popup">
        <form>
          <h3>Log-in</h3>
          <h4>Please confirm your access.</h4>
          <label HTMLfor="usuario">User</label>
          <input type="text" id="usuario" />
          <label for="password">Password</label>
          <input type="text" id="password" />
          <button className="btn-">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
