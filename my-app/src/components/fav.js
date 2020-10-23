import React, { useState } from 'react'

export default function Fav({ id }) {
  const handleClick = () => {
    setFaved(!isFaved)
    //alert('Like this') deberia sumarse a lista de favs
  }
  const stile = {
    display: 'contents',
    background: ' white',
    colot: 'purple',
  }
  const [isFaved, setFaved] = useState(false)
  const [label, emoji] = isFaved ? ['Remove Gif from favorites', '☠'] : ['Add Gif to favorites', '💜']
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
