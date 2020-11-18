import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFav, addFav, getFavAction, dileteFav } from '../actions/estateActions'
import Modal from '../components/modal'
import Login from '../components/login/login'

export default function Fav({ id }) {
  const auth = useSelector((state) => state.login.auth)
  const authUser = useSelector((state) => state.login.user)
  const { favs } = auth ? authUser : []
  const [isFavorite, setFavorite] = useState(auth && favs.includes(id))
  const [showLoginModal, setLoginModal] = useState(null)
  const [label, emoji] = isFavorite ? ['Add to favorites', '💜'] : ['Remove from favorites', '🤍']
  const dispatch = useDispatch()

  const loadEstate = () => dispatch(getFavAction(authUser))

  const cambiarfav = (id) => {
    ///va a l onclick
    dispatch(selectFav(id))
  }

  const handleClose = () => {
    setLoginModal(false)
  }
  console.log(isFavorite)

  const updateFavs = () => {
    //favs.includes((ide) => ide === id) && setFavorite(true)
  }
  const showF = () => {
    if (auth) setFavorite(favs.includes(id))
  }
  useEffect(() => {
    auth && loadEstate()
    auth && updateFavs()
    showF()
  }, [favs])

  const clean = (id) => {
    dispatch(dileteFav(id))
  }

  //console.log(isFavorite)
  const handleClick = (e) => {
    e.preventDefault()
    cambiarfav(id)
    //si no esta logeado q vaya al login
    !auth ? setLoginModal(true) : changefav()
  }
  const addingFav = (id) => {
    dispatch(addFav(id))
  }

  const changefav = () => {
    handleClose()
    if (isFavorite) {
      clean(id)
    } else {
      addingFav(id)
    }
    setFavorite(!isFavorite)
  }

  const stile = {
    //move this to styled components
    display: 'contents',
    background: ' white',
    color: 'purple',
    transitionScale: '0.9',
  }

  return (
    <>
      <button style={stile} className="Fav" label={label} onClick={handleClick}>
        <span label="Fav" role="img">
          {emoji}
        </span>
      </button>
      {showLoginModal && (
        <Modal onClose={handleClose}>
          <Login />
        </Modal>
      )}
    </>
  )
}
