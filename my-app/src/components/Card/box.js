import React from 'react';
import { Photo } from '../photo';
import { Popup } from '../popup';
import { App } from '../../App';

import './style.scss';


export class Card extends React.Component {
    abrirPopup = () => {
        this.props.handler(true,this.props.id);
      }
    
    render() {
        
            const items  = this.props;
             const sti ={
                 backgroundImage:`url(${items.urls.raw})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
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
                return (
                <div className='pp' style={pp}>
                     <div className="img" style={sti} alt={items.alt_description}></div>
                     <div className="container-text"style={txt}>
                       <a href ='#' onClick={this.abrirPopup}>
                        <h1 className='title'>{items.description}</h1></a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                           Quisquam esse illum exercitationem perferendis accusamus, possimus sed molestiae accusantium necessitatibus neque sit aspernatur</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                           Possimus facere, sequi. Beatae recusandae, officiis sapiente amet quod vero est vel.</p>
                      </div>
                </div>
          )
        }
}






