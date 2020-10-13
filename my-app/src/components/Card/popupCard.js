import React from 'react'
import { App } from '../../App'

export class PopupCard extends React.Component {
  state = {
    abierto: false,
  }

  abrirPopup = () => {
    this.setState({ abierto: !this.state.abierto })
  }

  render() {
    console.log(this.props.props)
    const carta = this.props.props[0]
    const stilo = {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
    }
    const texto = {
      width: '100%',
      height: '60%',
      padding: '80px',
    }

    const interno = {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
    }

    const open = this.state.abierto
    let className = 'overlay'
    if (open) {
      className = 'overlay'
      return <App />
    } else {
      className += ' active'
      return (
        <div>
          <div className={className} id="overlay">
            <div className="popup card " id="popup">
              <div style={interno}>
                <div>
                  <img src={carta.urls.raw} style={stilo}></img>
                </div>

                <div className="container-text">
                  <h1>{carta.description}</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam esse illum exercitationem
                    perferendis accusamus, possimus sed molestiae accusantium necessitatibus neque sit aspernatur
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus facere, sequi. Beatae recusandae,
                    officiis sapiente amet quod vero est vel.
                  </p>
                  <li>{carta.user.bio}</li>
                  <li>{carta.likes}</li>
                </div>
                <button className="btn-" onClick={this.abrirPopup}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
