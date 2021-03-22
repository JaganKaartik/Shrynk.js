import express from 'express'
import {
  login,
  authGoogle,
  authRedirectGoogle,
  authTwitter,
  authRedirectTwitter,
  logout
} from '../controllers/auth'

const authRouter = express.Router()

authRouter.post('/login', login)
authRouter.get('/google', authGoogle)
authRouter.get('/google/redirect', authRedirectGoogle)
authRouter.get('/twitter', authTwitter)
authRouter.get('/twitter/redirect', authRedirectTwitter)
authRouter.get('/logout', logout)

export = authRouter
