import React from 'react';
import { Photo } from '../photo';

import './style.scss';


export class Card extends React.Component {
    
    
    constructor(props) {
       super(props)
        this.state = {
          error: null,
          isLoaded: false,
          id :1 ,
          items: null
        };
      }
      componentDidMount() {
          fetch(`https://jsonplaceholder.typicode.com/comments/1`) 
            .then(res => res.json())
            .then(
              (result) => {
                  console.log(result)
                this.setState({
                  isLoaded: true,
                  items: result
                });
              },
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }
        render() {
          const { error, isLoaded, items } = this.state;
          if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...;)</div>;
          } else {
            return (
            
              <div className = 'card'>
                  <Photo />
                  <ul className = 'description'>
                    <li>{items.name}</li>
                    <li>{items.email}</li>
                    <li>{items.body}</li>
                  </ul>
                </div>
            //  <div>
            //   <Photo />
            // <div class="container-text">
            // <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
            // <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam esse illum exercitationem perferendis accusamus, possimus sed molestiae accusantium necessitatibus neque sit aspernatur</p>
            // <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus facere, sequi. Beatae recusandae, officiis sapiente amet quod vero est vel.</p>
            // </div>
            // </div>
            );
          }
        }
        
      }












// function Photo (props) {
    
//     return (
//         <div>
//             <a href = {this.props.url}>
//                 <img className = 'fotito' src ={this.props.url}></img>
//                 <span className='span-title'>{this.props.title}</span>
//             </a>

//         </div>
//     )
// }

// function Comment(props) {
//     return (
//         <div>
//             <ul>
//                 <li>{this.props.name}</li>
//                 <li>{this.props.mail}</li>
//                 <li>{this.props.body}</li>
//             </ul>
//         </div>
//     )
    
// }