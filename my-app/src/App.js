import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card/card';
import { Form } from './components/form';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         
  { /*Edit <code>src/App.js</code> and save to reload.*/}
        
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
      <Card/>
    </div>
  );
}

export default App;
