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
  passport.authenticate('google', {
    failureRedirect: '/',
    session: false
  })
  const token = req.session
  req.cookie('x-auth-cookie', token)
  res.redirect(clientUrl)
}

const authTwitter = passport.authenticate('twitter')

const authRedirectTwitter = (req, res) => {
  passport.authenticate('twitter', {
    failureRedirect: '/',
    session: false
  })
  const token = jwt.sign(
    {
      data: req.body
    },
    'secret',
    { expiresIn: '1h' }
  )
  console.log(token)
  res.cookie('jwt', token)
  res.redirect(clientUrl)
}

const authStatus = (req, res) => {
  if (req.user) {
    console.log(`Session is ${req.session}`)
    const sess = req.session
    res.status(200).send({
      success: true,
      message: 'User has successfully authenticated',
      user: req.user,
      cookies: req.cookies
    })
  } else {
    res.status(401).send({
      success: false,
      message: 'user failed to authenticate.'
    })
  }
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
  authStatus,
  logout
}
