import React from 'react'
//import logo from './logo.svg';
import './App.css'
import { Card } from './components/Card/box' //card
import { PopupCard } from './components/Card/popupCard' //card
import { Form } from './components/form'
import { Footer } from './components/footer'
//import { Connection } from './components/api';
//import { CardList } from './components/cardList';
import Carousel from 'react-elastic-carousel'

const accesKey = 'rQ-_SmO3ayd_uvDdmk1atdqJifxUQahY2IdZM90ux6k'
const endPoint = 'https://api.unsplash.com/search/photos'
const breakpoint = [
  { width: 500, itemsToShow: 1 },
  { width: 720, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
]

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      abierto: false,
      id: 1,
      items: [],
    }
  }

  componentDidMount() {
    fetch(endPoint + '?query=new-york&client_id=' + accesKey)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            items: result.results,
          })
          console.log(this.state.items)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  abrirPopup = (param, ide) => {
    this.setState({
      abierto: param,
      id: ide,
    })
  }

  render() {
    let className = 'overlay'
    const { error, isLoaded } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...;)</div>
    }
    if (this.state.abierto) {
      className += ' active'
      return (
        <PopupCard props={this.state.items.filter((card) => card.id === this.state.id)} handler={this.abrirPopup} />
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Real Estate Test</h1>
          </header>
          <Form />
          <Carousel breakPoints={breakpoint}>
            {this.state.items.map((item) => (
              <Card key={item.id} {...item} handler={this.abrirPopup} />
            ))}
          </Carousel>
          <Footer />
          {/* <div className ='box'>
               <Card/>
               <Card/>
               <Card/>
             </div>  */}
          {/* <CardList items={this.state.items}/> */}
        </div>
      )
    }
  }
}
export default App
