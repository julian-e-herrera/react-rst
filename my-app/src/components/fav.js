import React from 'react'

export default function Fav({ id }) {
  const handleClick = () => {
    alert('please contact support')
  }
  const stile = {
    display: 'contents',
    background: ' white',
    colot: 'purple',
  }

  return (
    <>
      <button style={stile} className="Fav" onClick={handleClick}>
        <span label="Fav" role="img">
          💜
        </span>
      </button>
    </>
  )
}
