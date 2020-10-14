import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { Card } from './box' //card

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export function PopupBox(props) {
  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)
  const [card, setCard] = useState(props)
  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>
          <Card />I am a modal
        </div>
      </Modal>
    </div>
  )
}
