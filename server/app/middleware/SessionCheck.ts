/* For Use in case of JWT */

const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/default.config')

export default (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers.authorization // Express headers are auto converted to lowercase
  console.log(req.headers)
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length)
  }
  console.log(token)
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      console.log(decoded)
      // eslint-disable-next-line valid-typeof
      if (typeof err !== null) {
        req.decoded = decoded
        next()
      } else {
        return res.json({
          success: false,
          message: 'Token is not valid'
        })
      }
    })
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    })
  }
}
