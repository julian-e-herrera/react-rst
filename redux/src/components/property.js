import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export const Property = (props) => {
  const item = props
  const [image] = useState(item.urls.raw)
  const sti = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%', ///abstraer esto en un styled component
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
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
  }
  const [showModalCard, setShowModalCard] = useState(false)

  const handleClick = () => {
    return setShowModalCard(true)
  }
  const handleClose = () => {
    return setShowModalCard(false)
  }

  return (
    <div>
      {/* {showModalCard && (
          <Modal onClose={handleClose}>
            <Box props={items}></Box>
          </Modal>
        )}
   */}
      <div className="pp" style={pp}>
        <div className="img" style={sti} alt={item.alt_description}></div>
        <div className="container-text" style={txt}>
          <Link to="#" onClick={handleClick}>
            <h1 className="title">{item.description}</h1>
          </Link>
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
export default Property
