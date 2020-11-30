import * as cardStyled from './card-styled'
import React, { useState } from 'react'
import Modal from '../modal'
import Fav from '../fav'

const Card = (props) => {
  const item = props
  const [image] = useState(item.urls.raw)
  const date = item.user.updated_at.split('-')
  const day = date[2].split('T')
  const [showModalCard, setShowModalCard] = useState(false)

  const handleClick = () => {
    return setShowModalCard(true)
  }
  const handleClose = () => {
    return setShowModalCard(false)
  }
  return (
    <div data-testid="property">
      {showModalCard && (
        <Modal onClose={handleClose}>
          <cardStyled.Container>
            <cardStyled.Card_container>
              <cardStyled.Card_styled>
                <cardStyled.Card_topLink href="#">
                  <cardStyled.Card_imageContains image={image}>
                    <cardStyled.Title>New listing</cardStyled.Title>
                    <picture alt={item.description}>
                      <cardStyled.Img_card src={image} />
                    </picture>
                  </cardStyled.Card_imageContains>
                  <cardStyled.Card_wrapper>
                    <cardStyled.Card_location>
                      {item.user.location != 'null' ? item.user.location : 'New York'}
                    </cardStyled.Card_location>
                    <cardStyled.Card_street>{item.description}</cardStyled.Card_street>
                    <cardStyled.Card_propertyDetail>
                      <li>{item.user.name}</li>
                      <li>{item.likes} LK</li>
                      <li>5.1 BA</li>
                      <li>{item.user.total_likes}TL</li>
                    </cardStyled.Card_propertyDetail>
                  </cardStyled.Card_wrapper>
                </cardStyled.Card_topLink>
                <cardStyled.Card_bottom>
                  <div>{day[0] + '/' + date[1] + '/' + date[0]}</div>
                  <span></span>
                  <div>
                    <Fav id={item.id} />
                  </div>
                </cardStyled.Card_bottom>
              </cardStyled.Card_styled>
            </cardStyled.Card_container>
          </cardStyled.Container>
        </Modal>
      )}
      <cardStyled.Container>
        <cardStyled.Card_container>
          <cardStyled.Card_styled>
            <cardStyled.Card_topLink href="#" onClick={handleClick}>
              <cardStyled.Card_imageContains image={image}>
                <cardStyled.Title>New listing</cardStyled.Title>
                <picture alt={item.description}>
                  <cardStyled.Img_card src={image} />
                </picture>
              </cardStyled.Card_imageContains>
              <cardStyled.Card_wrapper>
                <cardStyled.Card_location>
                  {item.user.location != 'null' ? item.user.location : 'New York'}
                </cardStyled.Card_location>
                <cardStyled.Card_street>{item.description}</cardStyled.Card_street>
                <cardStyled.Card_propertyDetail>
                  <li>{item.user.name}</li>
                  <li>{item.likes} LK</li>
                  <li>5.1 BA</li>
                  <li>{item.user.total_likes}TL</li>
                </cardStyled.Card_propertyDetail>
              </cardStyled.Card_wrapper>
            </cardStyled.Card_topLink>
            <cardStyled.Card_bottom>
              <div>{day[0] + '/' + date[1] + '/' + date[0]}</div>
              <span></span>
              <div>
                <Fav id={item.id} />
              </div>
            </cardStyled.Card_bottom>
          </cardStyled.Card_styled>
        </cardStyled.Card_container>
      </cardStyled.Container>
    </div>
  )
}
export default Card
