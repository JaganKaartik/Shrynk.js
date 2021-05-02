import { JWT_SECRET, SESSION_SECRET } from '../config/default.config'

const passport = require('passport')
const jwt = require('jsonwebtoken')

const { NODE_ENV, CLIENT_URL } = require('../config/default.config')

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
    `${CLIENT_URL}/app/home?token=${token}&userid=${req.user.userId}&onboarding=${req.user.onboarding}`
  )
}

// const authTwitter = passport.authenticate('twitter')

// const authRedirectTwitter = (req, res) => {
//   const token = jwt.sign(
//     {
//       data: req.user.userId
//     },
//     JWT_SECRET,
//     { expiresIn: '24h' }
//   )
//   res.redirect(
//     `${clientUrl}/app/home?token=${token}&userid=${req.user.use
//   srId}&onboarding=${req.user.onboarding}`
//   )
// }

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
  // authTwitter,
  // authRedirectTwitter,
  logout
}
