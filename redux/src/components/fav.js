import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFav, addFav, getFavAction } from '../actions/estateActions'
export default function Fav({ id }) {
  // let favsInitial = JSON.parse(localStorage.getItem('favs'))
  // if (!favsInitial) {
  //   favsInitial = []
  // }
  const islog = useSelector((state) => state.login.auth)
  console.log(islog)

  const dispatch = useDispatch()
  useEffect(() => {
    const loadEstate = () => dispatch(getFavAction())
    loadEstate()
  }, [])

  const elimiad = (id) => {
    dispatch(deleteFav(id))
  }
  const { favs } = useSelector((state) => state.estate.favs)
  console.log(favs)
  //const [isFav] = favs.includes((favId) => favId === id) //busc en favs
  const [isFavorite, setFavorite] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    //si no esta logeado q vaya al login

    //elimiad(id)
    islog ? elimiad(id) : addingFav(id)
    setFavorite(!isFavorite)
    if (isFavorite) {
      addingFav(id)
    } else {
      deleteFav(id)
    }
  }
  const addingFav = (id) => {
    dispatch(addFav(id))
  }

  // const deleteFav = (id) => {
  //   const updateFavs = favs.filter((fav) => fav !== id)
  //   setFavs(updateFavs)
  // }

  const stile = {
    display: 'contents',
    background: ' white',
    color: 'purple',
    transitionScale: '0.9',
  }
  const [label, emoji] = isFavorite ? ['Add to favorites', '💜'] : ['Remove from favorites', '➖']

  return (
    <>
      <button style={stile} className="Fav" label={label} onClick={handleClick}>
        <span label="Fav" role="img">
          {emoji}
        </span>
      </button>
    </>
  )
}
