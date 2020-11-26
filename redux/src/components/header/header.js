import React, { Fragment, useState, useEffect } from 'react'
import HeaderStyled, { FormSearch } from './header-styled'
import { Link } from 'react-router-dom'
import ButtonStyled from '../../styled/button'
import Modal from '../modal'
import NewUser from '../newUser/newUser'
import Login from '../login/login'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/loginAction'

const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [showLoginModal, setLoginModal] = useState(null)

  const handleClose = () => {
    setShowModal(false)
  }

  const handleClick = () => {
    setShowModal(true)
  }
  const handleCloseLog = () => {
    setLoginModal(false)
  }

  const handleClickLog = () => {
    setLoginModal(true)
  }
  const dispatch = useDispatch()

  const auth = useSelector((state) => state.login.auth)
  const authUser = useSelector((state) => state.login.user)

  const lgoutUser = () => dispatch(logout())
  useEffect(() => {
    lgoutUser()
  }, [])

  const outUser = () => dispatch(logout())
  const handleLogout = (e) => {
    e.preventDefault()
    outUser()
  }
  return (
    <Fragment>
      <HeaderStyled>
        <h1 data-testid="title">
          <Link to={'/'}>Real Estate Test</Link>
        </h1>
        {auth ? (
          <Fragment>
            <ButtonStyled onClick={handleLogout}>Logout</ButtonStyled>
            <ButtonStyled onClick={handleLogout}>{authUser.username}</ButtonStyled>
          </Fragment>
        ) : (
          <Fragment>
            <ButtonStyled onClick={handleClick}>Sig-in</ButtonStyled>
            {showModal && (
              <Modal onClose={handleClose}>
                <NewUser />
              </Modal>
            )}

            <ButtonStyled onClick={handleClickLog}>Login</ButtonStyled>
            {showLoginModal && (
              <Modal onClose={handleCloseLog}>
                <Login />
              </Modal>
            )}
          </Fragment>
        )}
      </HeaderStyled>
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
