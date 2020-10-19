import React from 'react'
import { useState } from 'react'
import Modal from './modal'
import Login from './login'

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
      <button id="btn-abrir-popup" class="btn-abrir-popup" onClick={handleClick}>
        {showModal && (
          <Modal onClose={handleClose}>
            <Login />
          </Modal>
        )}
        Admin
      </button>
      <div className="main-footer">
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
      </div>
    </div>
  )
}

export default Footer
