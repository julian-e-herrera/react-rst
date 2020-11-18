import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFav, addFav, getFavAction, dileteFav, setUpdateFav } from '../actions/estateActions'
import Modal from '../components/modal'
import Login from '../components/login/login'

export default function Fav({ id }) {
  const auth = useSelector((state) => state.login.auth)
  const authUser = useSelector((state) => state.login.user)
  const { favs } = auth ? authUser : []
  const [isFavorite, setFavorite] = useState(auth && favs.includes(id))
  const [showLoginModal, setLoginModal] = useState(null)
  const [label, emoji] = isFavorite ? ['Add to favorites', '💜'] : ['Remove from favorites', '🤍']

  const [updUser, saveUpd] = useState({
    username: '',
    password: '',
    favs: [],
  })

  const favChange = useSelector((state) => state.estate.fav_change)
  const userLog = useSelector((state) => state.login.user)

  const dispatch = useDispatch()

  const loadEstate = () => {
    dispatch(getFavAction(authUser))
  }
  loadEstate()
  const makeCopy = () => {
    saveUpd({
      ...updUser,
      username: userLog.username,
      password: userLog.password,
      favs: userLog.favs,
    })
  }

  const cambiarfav = (id) => {
    dispatch(selectFav(id))
  }

  const handleClose = () => {
    setLoginModal(false)
  }
  console.log(isFavorite)

  const updateFavs = () => {
    saveUpd({
      ...updUser,
      username: userLog.username,
      password: userLog.password,
      favs: authUser.favs,
    })
    dispatch(setUpdateFav(userLog.id, updUser))
  }
  const showF = () => {
    if (auth) setFavorite(favs.includes(id))
  }

  useEffect(() => {
    //saveUpd(favChange)
    //auth && loadEstate()
    //auth && updateFavs()
    showF()
    auth && makeCopy()
  }, [favChange])

  const clean = (id) => {
    dispatch(dileteFav(id))
  }

  //console.log(isFavorite)
  const handleClick = (e) => {
    e.preventDefault()
    //si no esta logeado q vaya al login
    !auth ? setLoginModal(true) : changefav()
    cambiarfav(id)
    //auth && makeCopy()
  }
  const addingFav = (id) => {
    dispatch(addFav(id))
  }

  const changefav = () => {
    handleClose()
    if (isFavorite) {
      clean(id)
      updateFavs()
    } else {
      addingFav(id)
      updateFavs()
    }
    setFavorite(!isFavorite)
  }

  const stile = {
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
