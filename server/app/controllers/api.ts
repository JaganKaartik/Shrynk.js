const URLS = require('../models/Url')

const shortenURL = (req, res) => {
  /* Sample Placeholder Controller */
  res.send(req.params.code)
}

const redirectToURL = (req, res) => {
  res.send(req.params.code)
  URLS.findOne({ urlCode: req.params.code })
    .then((data: JSON) => {
      res.redirect(data.longURL)
    })
    .catch((err) => {
      res.send(err)
    })
}

export { shortenURL, redirectToURL }
