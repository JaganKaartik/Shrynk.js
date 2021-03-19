export default (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.status(401).json({
      authenticated: false,
      message: 'user has not been authenticated - session invalid'
    })
  }
}
