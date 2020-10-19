import React, { useState, Fragment } from 'react'

export function Form() {
  //deberia agregar comportamiento para q realice las busquedas
  const [inputs, setInputs] = useState({
    option: '',
    text: '',
  })

  const handleSubmit = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    })
  }

  const sendData = (event) => {
    event.preventDefault()
    console.log(inputs.option + ' ' + inputs.text)
  }

  return (
    <Fragment>
      <div className="box-search">
        <form action="search" method="get" id="form_search" onSubmit={sendData}>
          <select name="option" id="select_option" onChange={handleSubmit}>
            <option value="">Please choose an option</option>
            <option name="option" value="title">
              title
            </option>
            <option name="option" value=" body">
              body
            </option>
          </select>
          <input
            type="text"
            name="text"
            id="input_value"
            placeholder="Please enter value"
            //onKeyUp={(event) => this.props.onTextChange(event.target.value)}
            onChange={handleSubmit}
          ></input>
          <button className="btn-search">Search</button>
        </form>
      </div>
    </Fragment>
  )
}
