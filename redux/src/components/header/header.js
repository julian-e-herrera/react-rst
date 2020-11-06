import React, { Fragment } from 'react'
import HeaderStyled from './header-styled'
import { Link } from 'react-router-dom'
import ButtonStyled from '../../styled/button'
const Header = () => {
  return (
    <HeaderStyled>
      <h1>
        <Link to={'/'}>Real Estate Test</Link>
      </h1>
      <Fragment>
        <ButtonStyled>
          <Link to={'/'}>Login</Link>
        </ButtonStyled>
        <ButtonStyled>
          <Link to={'/newUser'}>Register</Link>
        </ButtonStyled>
      </Fragment>
    </HeaderStyled>
  )
}

export default Header
