import React, { useEffect, useState } from 'react'
export default function Fav({ id }) {
  let favsInitial = JSON.parse(localStorage.getItem('favs'))
  if (!favsInitial) {
    favsInitial = []
  }
  const [favs, setFavs] = useState(favsInitial)
  const [isFavorite, setFavorite] = useState(false)

  const handleClick = (e) => {
    //abstraer logica en componente padre
    e.preventDefault()
    setFavorite(!isFavorite)
    if (isFavorite) {
      addFav(id)
    } else {
      deleteFav(id)
    }
  }
  const addFav = (id) => {
    setFavs([...favs, id])
  }

  const deleteFav = (id) => {
    const updateFavs = favs.filter((fav) => fav !== id)
    setFavs(updateFavs)
  }
  useEffect(() => {
    if (favsInitial) {
      localStorage.setItem('favs', JSON.stringify(favs))
    } else {
      localStorage.setItem('favs', JSON.stringify([]))
    }
  }, [favs])

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
