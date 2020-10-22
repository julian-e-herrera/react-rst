import React from 'react'
import './App.scss'
import { Form } from './components/form'
import { Footer } from './components/footer'

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Real Estate Test</h1>
      </header>
      <Form />
      <Footer />
    </div>
  )
}

export default App
