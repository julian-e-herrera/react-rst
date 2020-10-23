import React from 'react'
import ReactDOM from 'react-dom'
import ModalStyled from './styled/modal'
import ButtonStyled from './styled/button'

function Modal({ children, onClose }) {
  return (
    <ModalStyled>
      {/* <div className="modal-contenido"> */}
      <ButtonStyled onClick={onClose}>Close</ButtonStyled>
      {children}
      {/* </div> */}
    </ModalStyled>
  )
}
export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById('modal-root'))
}
