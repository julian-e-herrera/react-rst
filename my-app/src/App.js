import React, { useState, useLayoutEffect } from 'react'
import './App.scss'
import { Card } from './components/Card/card' //card
import { Form } from './components/formi'
import { Footer } from './components/footer'
import Carousel from 'react-elastic-carousel'
import API from './api/service'

const breakpoint = [
  { width: 500, itemsToShow: 1 },
  { width: 720, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
]

export function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [inputString, setInput] = useState('')
  const [showModal, setShowModal] = useState(false)

  useLayoutEffect(() => {
    API.getAll().then(
      (response) => {
        setIsLoaded(true)
        const all = response.data.results
        setItems(all)
        //console.log(all)
      },
      (error) => {
        setIsLoaded(true)
        setError(error)
      }
    )
  }, [])

  const handleClick = () => {
    setShowModal(true)
  }

  const changeText = (text) => {
    setInput(text)
  }

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...;)</div>
  }
  if (isLoaded) {
    // let list =
    //   items && inputString
    //     ? items.filter((item) => item.description.toLowerCase().includes(inputString.toLowerCase()))
    //     : []
    // console.log(list)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Real Estate Test</h1>
        </header>

        {/* //setList(items.filter((item) => item.name.toLowerCase().includes(inputString.toLowerCase()))) */}

        <Form />
        {/* <Carousel breakPoints={breakpoint}>
          {list
            // .filter((item) => item.description.toLowerCase().includes(inputString.toLowerCase()), [])
            .map((ite) => (
              <Card key={ite.id} {...ite} handleClick={handleClick} />
            ))}
        </Carousel> */}
        <Footer />
      </div>
    )
  }
}

export default App
