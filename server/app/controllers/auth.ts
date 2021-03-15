import jwt from 'jsonwebtoken'

const passport = require('passport')

const { JWT_SECRET } = require('../config/default.config')

const authGoogle = passport.authenticate('google', {
  scope: ['email', 'profile']
})

const authRedirectGoogle = passport.authenticate('google', {
  successRedirect: '/auth/status',
  failureRedirect: '/auth/status'
})

const authTwitter = passport.authenticate('twitter')

const authRedirectTwitter = passport.authenticate('twitter', {
  successRedirect: '/auth/status',
  failureRedirect: '/auth/status'
})

const authStatus = (req, res) => {
  if (req.user) {
    const sess = req.session
    // const token = jwt.sign({ user: req.user }, JWT_SECRET, {
    // expiresIn: 3600
    // })
    res.status(200).send({
      // token,
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
  // req.logout()
  req.session.destroy((err) => {
    if (err) {
      return console.log(err)
    }
    res.redirect('/auth/status')
    // res.redirect('/')
  })
  // res.redirect('/auth/status')
}

export {
  authGoogle,
  authRedirectGoogle,
  authTwitter,
  authRedirectTwitter,
  authStatus,
  logout
}
