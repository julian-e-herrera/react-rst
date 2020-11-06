import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Text } from './property-style'

export const Property = (props) => {
  const item = props
  const [image] = useState(item.urls.raw)
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
      <Container>
        {/* <div className="img" style={sti} alt={item.alt_description}></div> */}
        <Card image={image}></Card>
        <Text>
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
        </Text>
      </Container>
    </div>
  )
}
export default Property
