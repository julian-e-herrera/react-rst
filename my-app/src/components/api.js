import React from 'react'
import axios from 'axios'

const accesKey = 'rQ-_SmO3ayd_uvDdmk1atdqJifxUQahY2IdZM90ux6k'
const endPoint = 'https://api.unsplash.com/search/photos'
export const Connection = () => {
  axios.get(endPoint + '?query=new-york&client_id=' + accesKey).then((response) => {
    console.log(response.data)
  })

  axios(endPoint + '?query=new-york&client_id=' + accesKey)
    //.then((res) => res.json())
    .then(
      (result) => {
        console.log(result)
        this.setState({
          isLoaded: true,
          items: result.results,
        })
        console.log(this.state.items)
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error,
        })
      }
    )
}
export default Connection()
// const crudder = dominio => recurso => {
//     const url = `${dominio}/${recurso}`
//     return ({
//         create: (x) => fetch(url, {
//             method: 'POST',
//             body: JSON.stringify(x),
//         }).then(x => x.json()),
//         get: () => fetch(url).then(x => x.json())
//             .catch(e => console.log(e))
//     })
// }

// let Base = crudder('https://jsonplaceholder.typicode.com');
// let Photo = Base('photos');
// let Description = Base('comments')

// const getPhoto = () => {
//     return Photo.get();
// }

// const getComment = () => {
//     return Description.get();
// }

// // Photo.get().then(x => {
// //     x.filter(res => res.id < 5)
// //         .map(getElementPhoto => createCard(getElementPhoto));
// // });
// // Description.get().then(x => x.filter(res => res.id < 5)
// //     .map(getElement => createComment(getElement)));
// };
// export default Connection;

// //         <div>
// //             <a href = {this.props.url}>
// //                 <img className = 'fotito' src ={this.props.url}></img>
// //                 <span className='span-title'>{this.props.title}</span>
// //             </a>

// //         </div>

//    // componentDidMount() {
//     //   fetch("https://jsonplaceholder.typicode.com/photos")
//     //     .then(res => res.json())
//     //     .then(
//     //       (result) => {
//     //           console.log(result)
//     //         this.setState({
//     //           isLoaded: true,
//     //           items: [...result]
//     //         });
//     //       },
//     //       // Note: it's important to handle errors here
//     //       // instead of a catch() block so that we don't swallow
//     //       // exceptions from actual bugs in components.
//     //       (error) => {
//     //         this.setState({
//     //           isLoaded: true,
//     //           error
//     //         });
//     //       }
//     //     )
//     // }

//     // render() {
//     //   const { error, isLoaded, items } = this.state;
//     //   if (error) {
//     //     return <div>Error: {error.message}</div>;
//     //   } else if (!isLoaded) {
//     //     return <div>Loading...;)</div>;
//     //   } else {
//     //     return (
//     //       <ul>

//     //         {items.filter(res => res.id < 5).map(item => (//sigo dibujando mal todo
//     //           <li key={item.title}>
//     //             <img src={item.url} alt={item.title}></img>
//     //             {item.title}
//     //           </li>
//     //         ))}
//     //       </ul>
//     //     );
//     //   }
//     // }
