import React from 'react'
import FooterStyled from '../styled/footer'

export function Footer() {
  return (
    <div>
      {/* <ButtonStyled onClick={handleClick}>Login</ButtonStyled>
      {showModal && (
        <Modal onClose={handleClose}>
          <Link to="/newUser" onClick={handleClick}></Link>
        </Modal>
      )}
      <ButtonStyled onClick={rgShow}>Register</ButtonStyled>
      {showRg && <Modal onClose={rgClose}></Modal>} */}

      <FooterStyled>
        <div className="container">
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
