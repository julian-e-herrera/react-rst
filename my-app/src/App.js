import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card/box';//card
import { Form } from './components/form';
import { Footer } from './components/footer';
import { CardList } from './components/cardList';
//import { CardList } from './components/cardList';
import  Carousel  from 'react-elastic-carousel';


export const accesKey = 'rQ-_SmO3ayd_uvDdmk1atdqJifxUQahY2IdZM90ux6k';
export const endPoint = 'https://api.unsplash.com/search/photos';
const breakpoint =[
  {width :500 ,itemsToShow : 1}, {width : 720 ,itemsToShow : 2},
   {width : 1200 ,itemsToShow : 3}, {width : 1500 ,itemsToShow : 4}
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      //abierto: false,
      id :1 ,
      items: null
    };
    
  }

  componentDidMount() {
    fetch(endPoint + '?query=new-york&client_id=' + accesKey) 
      .then(res => res.json())
      .then(
        (result) => {
            console.log(result)
          this.setState({
            isLoaded: true,
            items: result.results
          });console.log(this.state.items)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }



render (){
  

  const { error, isLoaded } = this.state;
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...;)</div>;
  }
 else {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          <h1>Real State Test</h1>
        </a>
        </p>
      </header>
      <Form/>
      {/* <div className ='box'>
        <Card/>
        <Card/>
        <Card/>
       </div>  */}
       <Carousel breakPoints={breakpoint}>
         {/* <CardList items={this.state.items}/> */}
         {this.state.items.map(item => <Card key={item.id} {...item} />)}
        </Carousel>
      <Footer/>
    </div>
  );
}
}
}
export default App;
