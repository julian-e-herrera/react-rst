import React from 'react'
import { useState } from 'react'
import Modal from './modal'
import Login from './login'
import FooterStyled from './styled/footer'
import ButtonStyled from './styled/button'

export function Footer() {
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => {
    return setShowModal(false)
  }

  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <div>
      <ButtonStyled onClick={handleClick}>Admin</ButtonStyled>
      {showModal && (
        <Modal onClose={handleClose}>
          <Login />
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
