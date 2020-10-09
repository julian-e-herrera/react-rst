
import React from 'react';
export class Popup extends React.Component{
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
                <div className="popup" id="popup">
                <form>
                    <h3>Log-in</h3>
                    <h4>Please confirm your access.</h4>
                    <label HTMLfor="usuario">Usuario</label>
                    <input type="text" id="usuario"/> 
                    <label for="password">Contraseña</label>
                    <input type="text" id="password"/> 
                    <button className="btn-" >Iniciar Sesión</button>
                    <button className="btn-" onClick={this.abrirPopup}>Cerrar</button>
                </form>
                </div>
            </div>)
        }return (
                <button id="btn-abrir-popup" className="btn-abrir-popup admin"  onClick={this.abrirPopup}>Admin</button>
      )
    }
}
