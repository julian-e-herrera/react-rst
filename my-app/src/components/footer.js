import React from 'react'
import { useState } from 'react'
import Modal from './modal'
import Login from './log'
import FooterStyled from './styled/footer'
import ButtonStyled from './styled/button'
import NewLogin from './newLog'

export function Footer() {
  const [showModal, setShowModal] = useState(false)
  const [showRg, setShowRg] = useState(false)

  const handleClose = () => {
    return setShowModal(false)
  }

  const handleClick = () => {
    setShowModal(true)
  }
  const rgShow = () => {
    setShowRg(true)
  }
  const rgClose = () => {
    return setShowRg(false)
  }

  return (
    <div>
      <ButtonStyled onClick={handleClick}>Login</ButtonStyled>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login />
        </Modal>
      )}
      <ButtonStyled onClick={rgShow}>Register</ButtonStyled>
      {showRg && (
        <Modal onClose={rgClose}>
          <NewLogin />
        </Modal>
      )}

      <FooterStyled>
        <div className="container">
          {/* <button id="btn-abrir-popup" class="btn-abrir-popup">Admin</button> */}
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()}{' '}
              <a href="https://www.linkedin.com/in/julian-e-herrera/" target="blank">
                {' '}
                Julian Herrera{' '}
              </a>{' '}
              | All rights reserved | Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </FooterStyled>
    </div>
  )
}

export default Footer
