import * as cardStyled from './card-styled'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Fav from '../fav'
//	#FF0000 red

const Card = (props) => {
  const item = props
  const [image] = useState(item.urls.raw)
  const date = item.user.updated_at.split('-')
  const day = date[2].split('T')
  return (
    <cardStyled.Container>
      <cardStyled.Card_container>
        <cardStyled.Card_styled class="ListingCard__ListingCardWrapper-k9s72e-7 iEgKFW">
          <cardStyled.Card_topLink
            href="/florida-real-estate/for-sale/palm-beach/226-fairview-rd/6199711"
            class="ListingCard__TopSectionLink-k9s72e-18 jXIexr"
          >
            <cardStyled.Card_imageContains image={image} class="ListingCard__ImageContainer-k9s72e-0 fIirnk">
              <cardStyled.Title class="ListingCard__Flag-k9s72e-2 ListingCard__BlackFlag-k9s72e-3 MmNjX">
                New listing
              </cardStyled.Title>
              <picture alt="Homes for sale in South Florida | View 226 Fairview Rd | 3 Beds, 5.1 Baths">
                <cardStyled.Img_card src={image} />
              </picture>
            </cardStyled.Card_imageContains>
            <cardStyled.Card_wrapper class="ListingCard__ContentWrapper-k9s72e-6 hXDbcy">
              <cardStyled.Card_location class="ListingCard__Location-k9s72e-9 xxXpM">
                {item.user.location != 'null' ? item.user.location : 'New York'}
              </cardStyled.Card_location>
              <cardStyled.Card_street class="ListingCard__Street-k9s72e-10 drqBCT">
                {item.description}
              </cardStyled.Card_street>
              <cardStyled.Card_propertyDetail class="ListingCard__PropertyDetails-k9s72e-11 bTyswJ">
                <li>{item.user.name}</li>
                <li>{item.likes} LK</li>
                <li>5.1 BA</li>
                <li>3,905 SF</li>
              </cardStyled.Card_propertyDetail>
            </cardStyled.Card_wrapper>
          </cardStyled.Card_topLink>
          <cardStyled.Card_bottom class="ListingCard__BottomSection-k9s72e-19 jpshcz">
            <div class="ListingCard__Price-k9s72e-12 paDwB">{day[0] + '/' + date[1] + '/' + date[0]}</div>
            <span></span>
            <div class="ListingCard__FaveContainer-k9s72e-1 jUYaDc fave">
              <Fav id={item.id} />
              {/* <svg width="24" height="21" viewBox="0 0 24 21" stroke="#000000" fill="#ffffff">
                <path d="M12 19.612l9.844-9.954c2.041-2.064 2.041-5.425 0-7.489A5.144 5.144 0 0 0 18.16.625a5.145 5.145 0 0 0-3.685 1.544L12 4.672l-.445-.45-2.03-2.053A5.146 5.146 0 0 0 5.84.625a5.144 5.144 0 0 0-3.684 1.544h0c-2.041 2.064-2.041 5.425 0 7.489L12 19.612z"></path>
              </svg> */}
            </div>
          </cardStyled.Card_bottom>
        </cardStyled.Card_styled>
      </cardStyled.Card_container>
    </cardStyled.Container>
  )
}

export default Card
