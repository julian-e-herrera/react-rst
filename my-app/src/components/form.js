import React, { useState, Fragment } from 'react'
//import setInput from '../App'

export function Form() {
  //deberia agregar comportamiento para q realice las busquedas
  const [inputs, setInputs] = useState('')
  // option: '',
  // text: '',
  // })

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setInputs({
      inputs,
      [event.target.name]: event.target.value,
    })
  }

  const sendData = (event) => {
    event.preventDefault()
    //setInput(inputs.option, inputs.text) /////
    console.log('enviando datos...' + inputs.text + ' ') // + inputs.option)
    //event.target.reset() //limpia
    return inputs
  }

  return (
    <Fragment>
      <div className="box-search">
        <form action="search" id="form_search" onSubmit={sendData}>
          {/* <select name="option" id="select_option" onChange={handleInputChange}>
            <option value="">Please choose an option</option>
            <option name="option" value="title">
              title
            </option>
            <option name="option" value=" body">
              body
            </option>
          </select> */}
          <input
            type="text"
            name="text"
            id="input_value"
            placeholder="Please enter value"
            //onKeyUp={(event) => this.props.onTextChange(event.target.value)}
            onChange={sendData}
            onKeyUp={handleInputChange}
          ></input>
          <button type="submit" className="btn-search">
            Search
          </button>
        </form>
      </div>
    </Fragment>
  )
}
