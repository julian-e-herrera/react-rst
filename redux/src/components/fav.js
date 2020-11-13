import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFav, addFav, getFavAction } from '../actions/estateActions'
import Modal from '../components/modal'
import Login from '../components/login/login'

export default function Fav({ id }) {
  const auth = useSelector((state) => state.login.auth)
  const authUser = useSelector((state) => state.login.user)
  const { favs } = auth ? authUser : []

  const [showLoginModal, setLoginModal] = useState(null)

  const handleClose = () => {
    setLoginModal(false)
  }
  const [isFavorite, setFavorite] = useState(auth && favs.includes(id))
  const dispatch = useDispatch()
  const loadEstate = () => dispatch(getFavAction(authUser))
  const updateFavs = () => {
    favs.some((fav) => fav === id) && setFavorite(true)
  }

  useEffect(() => {
    auth && loadEstate()
    auth && updateFavs()
  }, [favs])

  const clean = (id) => {
    dispatch(deleteFav(id))
  }

  //console.log(isFavorite)
  const handleClick = (e) => {
    e.preventDefault()
    //si no esta logeado q vaya al login
    !auth ? setLoginModal(true) : changefav()
  }
  const addingFav = (id) => {
    dispatch(addFav(id))
  }

  const changefav = () => {
    handleClose()
    setFavorite(!isFavorite)
    if (isFavorite) {
      addingFav(id)
    } else {
      deleteFav(id)
    }
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
      {showLoginModal && (
        <Modal onClose={handleClose}>
          <Login />
        </Modal>
      )}
    </>
  )
}
