const rateLimit = require('express-rate-limit')

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message:
    'Too many api-hits created from this IP, please try again after a minute'
})

export = apiLimiter
