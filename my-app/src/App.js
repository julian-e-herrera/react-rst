import React, { useState, useLayoutEffect } from 'react'
import './App.scss'
import { Card } from './components/Card/box' //card
import { PopupCard } from './components/Card/popupCard' //card
import { Form } from './components/form'
import { Footer } from './components/footer'
import Carousel from 'react-elastic-carousel'
import API from './service/service'
import { Modal } from './components/modal'

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
  const [inputString, setInput] = useState('')
  const [showModal, setShowModal] = useState(false)

  useLayoutEffect(() => {
    API.getAll().then(
      (response) => {
        setIsLoaded(true)
        const all = response.data.results
        //console.log(all)
        setItems(all)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [])

  const handleClose = () => {
    setShowModal(false)
  }

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
    console.log('entra')
    className += ' active'
    //return <PopupCard props={items.filter((card) => card.id === id)} handler={abrirPopup} />
    return (
      <Modal onClose={handleClose}>
        <Card props={items.filter((card) => card.id === id)}></Card>
      </Modal>
    )
  } else {
    //setList(items.filter((item) => item.name.toLowerCase().includes(inputString.toLowerCase())))
    return (
      <div className="App">
        <header className="App-header">
          <h1>Real Estate Test</h1>
        </header>
        <Form onChange={(text) => setInput({ inputString: text })} />
        <Carousel breakPoints={breakpoint}>
          {items
            .filter((item) => item.description.toLowerCase().includes(inputString.toLowerCase()), [])
            .map((ite) => (console.log(ite), (<Card key={ite.id} {...ite} handler={abrirPopup} />)))}
        </Carousel>
        <Footer onClose={handleClose} />
      </div>
    )
  }
}

export default App
