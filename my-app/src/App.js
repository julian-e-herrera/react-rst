import React from 'react'
import './App.scss'
import { Form } from './components/form'
import { Footer } from './components/footer'
import HeaderStyled from '../src/components/styled/header'
import SpanStyled from '../src/components/styled/span'

export function App() {
  return (
    <div className="App">
      <HeaderStyled>
        <h1>Real Estate Test</h1>
        <SpanStyled>Julian</SpanStyled>
      </HeaderStyled>
      <Form />
      <Footer />
    </div>
  )
}

export default App
