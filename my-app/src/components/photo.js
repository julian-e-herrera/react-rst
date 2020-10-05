import React from 'react';
import { Card } from './Card/card'

export const accesKey = 'rQ-_SmO3ayd_uvDdmk1atdqJifxUQahY2IdZM90ux6k';
export const endPoint = 'https://api.unsplash.com/search/photos';
export class Photo extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        abierto: false,
        id :1 ,
        items: null
      };
    }
  
    // change(list){
    //   this.state.setState({
    //     isLoaded: true,
    //     items: list
    //   });
    // }

    componentDidMount() {
        fetch(endPoint + '?query=building/random&client_id=' + accesKey) 
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
              this.setState({
                isLoaded: true,
                items: result.results[1]
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
      
        // let response = await fetch(endPoint + '?query=' + query + 
        // '&client_id=' + accesKey); 
        
  

        abrirPopup=()=>{
          this.setState({abierto: !this.state.abierto});
        }
    
        render(){
      
          const open = this.state.abierto;
          const { error, isLoaded, items } = this.state;



          let className = "overlay";

          if (error) {
                return <div>Error: {error.message}</div>;
              } else if (!isLoaded) {
                return <div>Loading...;)</div>;
              }
             else {
              //     return (
                    
              //               <a href ='#' onClick={PopupCard}>
          
              //             <img className ='fotito' src={items.urls.raw} alt={items.alt_description}></img>
              //             <span className='span-title'>{items.description}</span> 
              //           </a>
                        
        
              //     );
              //   }


            if(open){
                className += ' active';
                return(<div className={className} id="overlay">
                    <div className="popup card" id="popup">
                    <form>
                        <Card />
                        <button className="btn-" onClick={this.abrirPopup}>Cerrar</button>
                    </form>
                    </div>
                </div>)
            }return (
                 <div >
                   <a href ='#' onClick={this.abrirPopup}>
          
                      <span className='span-title'>{items.description}</span> 
                       <img className ='fotito' src={items.urls.raw} alt={items.alt_description}></img>
                    </a>
              
                </div>
          )
        }














  

      // render() {
        
      //   const { error, isLoaded, items } = this.state;
      //   console.log(items)
        
      //   if (error) {
      //     return <div>Error: {error.message}</div>;
      //   } else if (!isLoaded) {
      //     return <div>Loading...;)</div>;
      //   } else {
      //     return (
            
      //               <a href ='#' onClick={PopupCard}>
  
      //             <img className ='fotito' src={items.urls.raw} alt={items.alt_description}></img>
      //             <span className='span-title'>{items.description}</span> 
      //           </a>
                

      //     );
      //   }
      // }

  
}

}