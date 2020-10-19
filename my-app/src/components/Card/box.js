import Modal from 'react-modal'
import React, { useState, useEffect } from 'react'

export function Card(props) {
  const items = props

  const [image, setImage] = useState(`url(${items.urls.raw})`)

  const abrirPopup = () => {
    props.handler(true, items.id)
    setIsOpen(true)
  }
  const sti = {
    backgroundImage: image,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  const txt = {
    width: ' 60%',
    padding: ' 50px',
    overflowY: 'hidden',
  }
  const pp = {
    width: '100%',
    height: ' 500px',
    position: 'relative',
    display: 'flex',
    background: ' white',
  }

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

  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
    setImage(`url(${props.urls.raw})`)
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false)
  }

  if (items.abierto) {
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
            <Card props={props} />I am a modal
          </div>
        </Modal>
      </div>
    )
  } else {
    return (
      <div className="pp" style={pp}>
        <div className="img" style={sti} alt={items.alt_description}></div>
        <div className="container-text" style={txt}>
          <a href="#" onClick={abrirPopup}>
            <h1 className="title">{items.description}</h1>
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam esse illum exercitationem perferendis
            accusamus, possimus sed molestiae accusantium necessitatibus neque sit aspernatur
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus facere, sequi. Beatae recusandae,
            officiis sapiente amet quod vero est vel.
          </p>
        </div>
      </div>
    )
  }
}
