import React from 'react';
export class Form extends React.Component {
//deberia agregar comportamiento para q realice las busquedas
	render() {
  	return (
        <div className = "box-search">
    	<form action="search" method="get" id="form_search">
                <select name="option" id="select_option">
                    <option value="">Please choose an option</option>
                    <option value="">title</option>
                    <option value="">body</option>
                </select>
                <input type="text" name="value" id="input_value"placeholder='Please enter value'></input>
                <button className="btn-search">Search</button>
          </form>      
        </div>  
    );
  }
}

