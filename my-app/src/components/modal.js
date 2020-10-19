import React from 'react'
import '../App.scss'

export function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <div className="modal-contenido">
        <button className="btn-" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
