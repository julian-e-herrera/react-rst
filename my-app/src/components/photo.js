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
                <li key={items.title}>
                  <img src={items.url} alt={items.title}></img>
                  {items.title} 
                </li>
          );
        }
      }

  }




   // componentDidMount() {
    //   fetch("https://jsonplaceholder.typicode.com/photos")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //           console.log(result)
    //         this.setState({
    //           isLoaded: true,
    //           items: [...result]
    //         });
    //       },
    //       // Note: it's important to handle errors here
    //       // instead of a catch() block so that we don't swallow
    //       // exceptions from actual bugs in components.
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     )
    // }
  
    // render() {
    //   const { error, isLoaded, items } = this.state;
    //   if (error) {
    //     return <div>Error: {error.message}</div>;
    //   } else if (!isLoaded) {
    //     return <div>Loading...;)</div>;
    //   } else {
    //     return (
    //       <ul>
             
    //         {items.filter(res => res.id < 5).map(item => (//sigo dibujando mal todo
    //           <li key={item.title}>
    //             <img src={item.url} alt={item.title}></img>
    //             {item.title} 
    //           </li>
    //         ))}
    //       </ul>
    //     );
    //   }
    // }