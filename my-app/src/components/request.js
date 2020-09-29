const Connection = () => {

const crudder = dominio => recurso => {
    const url = `${dominio}/${recurso}`
    return ({
        create: (x) => fetch(url, {
            method: 'POST',
            body: JSON.stringify(x),
        }).then(x => x.json()),
        get: () => fetch(url).then(x => x.json())
            .catch(e => console.log(e))
    })
}


let Base = crudder('https://jsonplaceholder.typicode.com');
let Photo = Base('photos');
let Description = Base('comments')



const getPhoto = () => {
    return Photo.get();    
}

const getComment = () => {
    return Description.get();    
}


// Photo.get().then(x => {
//     x.filter(res => res.id < 5)
//         .map(getElementPhoto => createCard(getElementPhoto));
// });
// Description.get().then(x => x.filter(res => res.id < 5)
//     .map(getElement => createComment(getElement)));
};
export default Connection;