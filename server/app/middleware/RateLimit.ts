const rateLimit = require('express-rate-limit')

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 50,
  message:
    'Too many accounts created from this IP, please try again after a minute'
})

export = apiLimiter
