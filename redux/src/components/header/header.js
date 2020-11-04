import React from 'react'
import HeaderStyled from './header-styled'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <HeaderStyled>
      <h1>
        <Link to={'/'}>Real Estate Test</Link>
      </h1>
    </HeaderStyled>
  )
}

export default Header
