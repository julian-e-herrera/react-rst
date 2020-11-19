import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFav, addFav, getFavAction, deleteFav } from '../actions/estateActions'
import { setUpdateFav } from '../actions/loginAction'
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
    ///va al onclick
    dispatch(selectFav(id))
  }

  const handleClose = () => {
    setLoginModal(false)
  }
  console.log(isFavorite)
  ////////
  const estate = useSelector((state) => state.estate.favs)
  const [userCopy, setCopy] = useState({
    username: '',
    password: '',
    favs: [],
  })
  const copy = () => {
    setCopy({
      username: authUser.username,
      password: authUser.password,
      favs: estate,
    })
    console.log(estate)
  }
  const updateFavs = () => {
    //dispatch(setUpdateFav(authUser.id, userCopy))
    console.log(estate)
  }

  //////////
  const showF = () => {
    if (auth) setFavorite(favs.includes(id))
  }
  useEffect(() => {
    auth && loadEstate()
    auth && copy()
    showF()
  }, [favs])

  const clean = (id) => {
    dispatch(deleteFav(id))
  }

  //console.log(isFavorite)
  const handleClick = (e) => {
    e.preventDefault()
    cambiarfav(id)
    //si no esta logeado q vaya al login
    !auth ? setLoginModal(true) : changefav()
    //deberia enviar el update luego de la modificacion
    auth && updateFavs()
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
    //updateFavs()
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
