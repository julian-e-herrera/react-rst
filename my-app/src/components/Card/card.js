import Modal from '../modal'
import React, { useState } from 'react'
import { Box } from './boxi' //card

export function Card(props) {
  const items = props
  const [image, setImage] = useState(`url(${items.urls.raw})`)
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

  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    return setShowModal(true)
  }
  const handleClose = () => {
    return setShowModal(false)
  }

  return (
    <div>
      {showModal && (
        <Modal onClose={handleClose}>
          <Box props={items}></Box>
        </Modal>
      )}

      <div className="pp" style={pp}>
        <div className="img" style={sti} alt={items.alt_description}></div>
        <div className="container-text" style={txt}>
          <a href="#" onClick={handleClick}>
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
    </div>
  )
}
