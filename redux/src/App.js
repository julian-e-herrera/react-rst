import './App.css'
import React from 'react'
import Header from './components/header/header'
import Home from './components/home'
import Fav from './components/fav'
import NewUser from './components/newUser/newUser'
import Card from './components/newCard/newCard'
import Footer from './components/footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//redux
// import { Provider, connect } from 'react-redux'
// import store from './store'
function App() {
  return (
    <Router>
      {/* <Provider store={store}> */}
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/fav" component={Fav}></Route>
          <Route exact path="/newUser" component={NewUser}></Route>
          <Route exact path="/newCard" component={Card}></Route>
        </Switch>
        <Footer />
      </div>
      {/* </Provider> */}
    </Router>
  )
}

export default App
