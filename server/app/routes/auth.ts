import express from 'express'
import {
  authGoogle,
  authRedirectGoogle,
  authGithub,
  authRedirectGithub,
  logout
} from '../controllers/auth'

const passport = require('passport')

const authRouter = express.Router()

authRouter.get('/google', authGoogle)
authRouter.get(
  '/google/redirect',
  passport.authenticate('google', {
    failureRedirect: '/',
    session: false
  }),
  authRedirectGoogle
)
authRouter.get('/github', authGithub)
authRouter.get(
  '/github/redirect',
  passport.authenticate('github', {
    failureRedirect: '/',
    session: false
  }),
  authRedirectGithub
)
authRouter.get('/logout', logout)

export = authRouter
