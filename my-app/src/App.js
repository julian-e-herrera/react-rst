import React from 'react'
import './App.scss'
import { Form } from './components/form'
import { Footer } from './components/footer'
import HeaderStyled from '../src/components/styled/header'
import SpanStyled from '../src/components/styled/span'
///
import UserContext from '../src/components/context/userState'
export function App() {
  return (
    <UserContext>
      <div className="App">
        <HeaderStyled>
          <h1>Real Estate Test</h1>
          <SpanStyled>Julian</SpanStyled>
        </HeaderStyled>
        <Form />
        <Footer />
      </div>
    </UserContext>
  )
}

export default App
