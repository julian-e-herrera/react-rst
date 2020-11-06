import React, { Fragment, useState } from 'react'
import HeaderStyled, { FormSearch } from './header-styled'
import { Link } from 'react-router-dom'
import ButtonStyled from '../../styled/button'
import Modal from '../modal'
import NewUser from '../newUser/newUser'
const Header = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    console.log('estaria entrando')
    setShowModal(false)
  }

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <Fragment>
      <HeaderStyled>
        <h1>
          <Link to={'/'}>Real Estate Test</Link>
        </h1>
        <ButtonStyled onClick={handleClick}>
          Sig-in
          {/* <Link to={'/newUser'}>Register</Link> */}
        </ButtonStyled>
        {showModal && (
          <Modal onClose={handleClose}>
            <NewUser />
          </Modal>
        )}

        <ButtonStyled>
          <Link to={'/'}>Login</Link>
        </ButtonStyled>
      </HeaderStyled>{' '}
      <div className="box-search">
        <FormSearch>
          <input type="text" name="text" id="input_value" placeholder="Please enter value"></input>
          <ButtonStyled type="submit">Search</ButtonStyled>
        </FormSearch>
      </div>
    </Fragment>
  )
}

export default Header
