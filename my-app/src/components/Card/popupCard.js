import React from 'react';
import {Card} from './card';


export class PopupCard extends React.Component{
    state={
      abierto: false,
    }
  
 abrirPopup=()=>{
      this.setState({abierto: !this.state.abierto});
    }

    render(){
  
      const open = this.state.abierto;
      let className = "overlay";
        if(open){
            className += ' active';
            return(<div className={className} id="overlay">
                <div class="popup" id="popup">
                <form>
                    <Card />
                    <button className="btn-" onClick={this.abrirPopup}>Cerrar</button>
                </form>
                </div>
            </div>)
        }return (
             <div >
                    <button id="btn-abrir-popup" className="btn-abrir-popup"  onClick={this.abrirPopup}>Admin</button>
            </div>
      )
    }
}