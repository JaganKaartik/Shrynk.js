import { JWT_SECRET, SESSION_SECRET } from '../config/default.config'

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

const authRedirectGoogle = (req, res) => {
  const token = jwt.sign(
    {
      data: req.user.userId
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  )
  res.redirect(
    `${clientUrl}?token=${token}&userid=${req.user.userId}&onboarding=${req.user.onboarding}`
  )
}

const authTwitter = passport.authenticate('twitter')

const authRedirectTwitter = (req, res) => {
  const token = jwt.sign(
    {
      data: req.user.userId
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  )
  res.redirect(
    `${clientUrl}?token=${token}&userid=${req.user.userId}&onboarding=${req.user.onboarding}`
  )
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
