export default (req, res, next) => {
  if (!req.session) {
    res.status(401).json({
      authenticated: false,
      message: 'user has not been authenticated - session invalid'
    })
  } else {
    next()
  }
}
