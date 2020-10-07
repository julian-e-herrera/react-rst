import React from 'react';
import { Photo } from '../photo';
import { Popup } from '../popup';
import './style.scss';


export class Card extends React.Component {
    abrirPopup=()=>{
        this.setState({abierto: !this.props.abierto});
      }
    
        render() {
            const items  = this.props;
            const sti ={
                backgroundImage:`url(${items.urls.raw})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '40%'
            };
            const  txt ={
                width:' 60%',
                padding:' 50px',
                overflowY : 'hidden'
            };
            const pp ={
                width: '100%',
                height:' 500px',
                position: 'relative',
                display: 'flex',
                background:' white',
                
            }
          
          let className = "overlay";

              if(items.abierto){
                className += ' active';
                return(<div className={className} id="overlay">
                    <div className="popup card" id="popup">
                        <form>
                            <div >
                                 <span className='span-title'>{items.description}</span> 
                                  <img className ='fotito' src={items.urls.raw} alt={items.alt_description}></img>
                            </div>
                            <ul className = 'description'>
                                 <li>{items.alt_description}</li>
                                 <li>{items.likes}</li>
                                <li>{items.description}</li>
                             </ul>
                        <button className="btn-" onClick={this.abrirPopup}>Cerrar</button>
                    </form>
                    </div>
                </div>)
            }return (
                //  <div className = 'card'>
                //   <div >
                //    <a href ='#' onClick={this.abrirPopup}>
                //       <span className='span-title'>{items.description}</span> 
                //        <img className ='fotito' src={items.urls.raw} alt={items.alt_description}></img>
                //     </a>
                //     </div>
                //         <ul className = 'description'>
                //             <li>{items.alt_description}</li>
                //             <li>{items.likes}</li>
                //             <li>{items.description}</li>
                //         </ul>
                // </div>
                <div className='pp' style={pp}>
               <div className="img" style={sti}></div>
               <div className="container-text"style={txt}>
               <a href ='#' onClick={this.abrirPopup}>
                   <h1>{items.description}</h1></a>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam esse illum exercitationem perferendis accusamus, possimus sed molestiae accusantium necessitatibus neque sit aspernatur</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus facere, sequi. Beatae recusandae, officiis sapiente amet quod vero est vel.</p>
               </div>
               </div>
          )
        }





      }







