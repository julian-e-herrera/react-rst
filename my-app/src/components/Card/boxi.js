import React, { useState } from 'react'
import Fav from '../fav'
export function Box(props) {
  const items = props.props
  const [image] = useState(`url(${items.urls.raw})`)
  const sti = {
    backgroundImage: image,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  const txt = {
    // width: ' 55%',
    padding: ' 20px',
    overflowY: 'hidden',
  }
  const pp = {
    width: 'p0%',
    height: ' 500px',
    position: 'relative',
    display: 'flex',
    background: ' white',
  }

  return (
    <div className="pp" style={pp}>
      <div className="img" style={sti} alt={items.alt_description}></div>
      <div className="container-text" style={txt}>
        <h1 className="title">{items.description}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam esse illum exercitationem perferendis
          accusamus, possimus sed molestiae accusantium necessitatibus neque sit aspernatur
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus facere, sequi. Beatae recusandae, officiis
          sapiente amet quod vero est vel.
        </p>
      </div>
      <Fav id={items.id} />
    </div>
  )
}
