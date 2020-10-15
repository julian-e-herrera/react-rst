import React, { useState, useLayoutEffect } from 'react'
import './App.css'
import { Card } from './components/Card/box' //card
import { PopupBox } from './components/Card/modalbox' //card
import { PopupCard } from './components/Card/popupCard' //card
import { Form } from './components/form'
import { Footer } from './components/footer'
import Carousel from 'react-elastic-carousel'
import Modal from 'react-modal' ///aplicando a otro comp

const accesKey = 'rQ-_SmO3ayd_uvDdmk1atdqJifxUQahY2IdZM90ux6k'
const endPoint = 'https://api.unsplash.com/search/photos'
const breakpoint = [
  { width: 500, itemsToShow: 1 },
  { width: 720, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
]

export function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [abierto, setAbierto] = useState(false)
  const [id, setId] = useState(1)
  const [items, setItems] = useState([])

  useLayoutEffect(() => {
    fetch(endPoint + '?query=new-york&client_id=' + accesKey)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItems(result.results)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [items])

  const abrirPopup = (param, ide) => {
    setAbierto(param)
    setId(ide)
  }

  let className = 'overlay'

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...;)</div>
  }
  if (abierto) {
    className += ' active'
    return <PopupCard props={items.filter((card) => card.id === id)} handler={abrirPopup} />
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Real Estate Test</h1>
        </header>
        <Form />
        <Carousel breakPoints={breakpoint}>
          {items.map((item) => (
            <Card key={item.id} {...item} handler={abrirPopup} />
          ))}
        </Carousel>
        <Footer />
      </div>
    )
  }
}

export default App
