import express from 'express'
import { authRouter, apiRouter, dashRouter, analyticsRouter } from '../routes'

const Middleware = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')
const apiLimiter = require('./rateLimit')
const passportSetup = require('../config/passport-setup')
const { NODE_ENV, CLIENT_URL } = require('../config/default.config')

if (NODE_ENV !== 'production') {
  Middleware.use(cors({ credentials: true, origin: CLIENT_URL }))
}

Middleware.use('/', apiLimiter)

Middleware.use(cookieParser())
Middleware.use(passport.initialize())
Middleware.use(passport.session())

Middleware.use(bodyParser.urlencoded({ extended: false }))
Middleware.use(bodyParser.json())
Middleware.use('/', apiRouter)
Middleware.use('/auth', authRouter)
Middleware.use('/dash', dashRouter)
Middleware.use('/analytics', analyticsRouter)

export = Middleware
