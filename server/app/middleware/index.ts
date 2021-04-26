import express from 'express'
import { authRouter, apiRouter, dashRouter, analyticsRouter } from '../routes'

const Middleware = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')
const apiLimiter = require('./rateLimit')
const passportSetup = require('../config/passport-setup')
const {
  NODE_ENV,
  CLIENT_URL_PROD,
  CLIENT_URL_DEV
} = require('../config/default.config')

const clientUrl = NODE_ENV === 'production' ? CLIENT_URL_PROD : CLIENT_URL_DEV

Middleware.use(cors({ credentials: true, origin: clientUrl }))

Middleware.use('/', apiLimiter)

Middleware.use(cookieParser())
Middleware.use(passport.initialize())
Middleware.use(passport.session())

Middleware.disable('x-powered-by')

Middleware.use(bodyParser.urlencoded({ extended: false }))
Middleware.use(bodyParser.json())
Middleware.use('/', apiRouter)
Middleware.use('/auth', authRouter)
Middleware.use('/dash', dashRouter)
Middleware.use('/analytics', analyticsRouter)

export = Middleware
