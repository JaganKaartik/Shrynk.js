const passport = require('passport')
const jwt = require('jsonwebtoken')

const { JWT_SECRET, CLIENT_URL } = require('../config/default.config')

const authGoogle = passport.authenticate('google', {
  scope: ['email', 'profile']
})

const authGithub = passport.authenticate('github')

const authRedirectHandler = (req, res) => {
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

export { authGoogle, authRedirectHandler, authGithub }
