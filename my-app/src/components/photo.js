import React from 'react';


export const accesKey = 'rQ-_SmO3ayd_uvDdmk1atdqJifxUQahY2IdZM90ux6k';
export const endPoint = 'https://api.unsplash.com/search/photos';
export class Photo extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        id :1 ,
        items: null
      };
    }
  
    change(list){
      this.state.setState({
        isLoaded: true,
        items: list
      });
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/photos/1`) 
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
      
        // let response = await fetch(endPoint + '?query=' + query + 
        // '&client_id=' + accesKey); 
        
  
  

      render() {
        
        const { error, isLoaded, items } = this.state;
        console.log(items)
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...;)</div>;
        } else {
          return (
               
                    <a href = {items.url}>
                {/* <li key={items.title}> */}
                  <img className ='fotito' src={items.url} alt={items.title}></img>
                  <span className='span-title'>{items.title}</span> 
                {/* </li> */}
                </a>
                

          );
        }
      }

  
}