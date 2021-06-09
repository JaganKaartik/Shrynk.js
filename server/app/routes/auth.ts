import express from 'express'
import {
  authGoogle,
  authGithub,
  authRedirectHandler
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
  authRedirectHandler
)
authRouter.get('/github', authGithub)
authRouter.get(
  '/github/redirect',
  passport.authenticate('github', {
    failureRedirect: '/',
    session: false
  }),
  authRedirectHandler
)

export = authRouter
