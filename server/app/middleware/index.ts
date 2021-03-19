import express from 'express'
import { authRouter, apiRouter, dashRouter } from '../routes'
import { app as connectRedis } from '../config/redis'

const Middleware = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')
const apiLimiter = require('./rateLimit')
const passportSetup = require('../config/passport-setup')
const { CLIENT_ORIGIN } = require('../config/default.config')

Middleware.use(connectRedis)

Middleware.use('/', apiLimiter)

Middleware.use(cookieParser())
Middleware.use(passport.initialize())
Middleware.use(passport.session())

Middleware.use(
  cors({
    orgin: CLIENT_ORIGIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  })
)

Middleware.use(bodyParser.urlencoded({ extended: false }))
Middleware.use(bodyParser.json())
Middleware.use('/', apiRouter)
Middleware.use('/auth', authRouter)
Middleware.use('/dash', dashRouter)

export = Middleware
