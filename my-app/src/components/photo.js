import React from 'react';



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
      render() {
        const { error, isLoaded, items } = this.state;
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
