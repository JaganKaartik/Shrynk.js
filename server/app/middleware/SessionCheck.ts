/* For Use in case of JWT */

const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/default.config')

export default (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers.authorization // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length)
  }
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (!err) {
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
