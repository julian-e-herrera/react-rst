const jwt = require('jsonwebtoken')
//importar usuari q se esta guardando

exports.buildUser = async () => {
  const payload = {
    user: {
      id: user.id,
    },
  }
  jwt.sign(
    payload,
    process.env.SECRET,
    {
      expiresIn: 3600,
    },
    (error, token) => {
      if (error) throw error
      res.json({ token })
    }
  )
}
