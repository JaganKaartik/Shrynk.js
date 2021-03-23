import { JWT_SECRET, SESSION_SECRET } from '../config/default.config'
import { redisClient } from '../config/redis'

const passport = require('passport')
const jwt = require('jsonwebtoken')

const {
  NODE_ENV,
  CLIENT_URL_PROD,
  CLIENT_URL_DEV
} = require('../config/default.config')

const clientUrl = NODE_ENV === 'production' ? CLIENT_URL_PROD : CLIENT_URL_DEV

const authGoogle = passport.authenticate('google', {
  scope: ['email', 'profile']
})

const authRedirectGoogle = (res, req) => {
  const token = jwt.sign(
    {
      data: req.user
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  )
  res.redirect(`${clientUrl}?token=${token}&userid=${req.user.userId}`)
}

const authTwitter = passport.authenticate('twitter')

const authRedirectTwitter = (req, res) => {
  const token = jwt.sign(
    {
      data: req.user
    },
    JWT_SECRET,
    { expiresIn: '1h' }
  )
  res.redirect(`${clientUrl}?token=${token}&userid=${req.user.userId}`)
}

const logout = (req, res) => {
  req.logout()
  req.session.destroy((err) => {
    if (err) {
      res.send(err)
    }
    res.redirect('/auth/status')
  })
}

export {
  authGoogle,
  authRedirectGoogle,
  authTwitter,
  authRedirectTwitter,
  logout
}
