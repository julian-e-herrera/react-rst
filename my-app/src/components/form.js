import React, { useState, useLayoutEffect, Fragment } from 'react'
import '../App.scss'
import { Card } from './Card/card'
import Carousel from 'react-elastic-carousel'
import API from '../api/service'
import ButtonStyled from './styled/button'
import Modal from './modal'

const breakpoint = [
  { width: 500, itemsToShow: 1 },
  { width: 720, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
]

export function Form() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [, setShowModal] = useState(false)
  const [showModalFav, setShowModalFav] = useState(false)
  const [inputs, setInputs] = useState('')

  const handleInputChange = (event) => {
    setInputs(event.target.value)
  }

  const sendData = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + inputs)
    event.target.reset()
  }

  useLayoutEffect(() => {
    API.getAll().then(
      (response) => {
        setIsLoaded(true)
        const all = response.data.results
        setItems(all)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [])

  const showFavs = () => {
    let favsLocal = JSON.parse(localStorage.getItem('favs'))
    if (!favsLocal) {
      favsLocal = items
    } else {
      const Favs = items.filter((item) => favsLocal.includes(item.id)) //item favorites
      console.log(Favs)
      return Favs
    }
  }
  const handleClose = () => {
    return setShowModalFav(false)
  }

  const handleClick = () => {
    setShowModalFav(true)
  }
  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...;)</div>
  }
  if (isLoaded) {
    let list =
      items && inputs ? items.filter((item) => item.description.toLowerCase().includes(inputs.toLowerCase())) : items
    return (
      <Fragment>
        <div className="box-search">
          <form id="form_search" onSubmit={sendData}>
            <input
              type="text"
              name="text"
              id="input_value"
              placeholder="Please enter value"
              onChange={handleInputChange}
            ></input>
            <ButtonStyled type="submit">Search</ButtonStyled>

            <ButtonStyled onClick={handleClick}>Favorites</ButtonStyled>
            {showModalFav && (
              <Modal onClose={handleClose}>
                <Carousel breakPoints={breakpoint}>
                  {showFavs().map((ite) => (
                    <Card key={ite.id} {...ite} handleClick={handleClick} />
                  ))}
                </Carousel>
              </Modal>
            )}
          </form>
          <h2>{inputs}</h2>
        </div>
        <Carousel breakPoints={breakpoint}>
          {list.map((ite) => (
            <Card key={ite.id} {...ite} handleClick={handleClick} />
          ))}
        </Carousel>
      </Fragment>
    )
  }
}
