import './App.css'
import React from 'react'
import Header from './components/header/header'
import Home from './components/home'
import Favs from './components/favs'
import NewUser from './components/newUser/newUser'
import Footer from './components/footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//redux
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/favs" component={Favs}></Route>
            <Route exact path="/newUser" component={NewUser}></Route>
          </Switch>
          <Footer />
        </div>
      </Provider>
    </Router>
  )
}

export default App
