const { nanoid } = require('nanoid')
const URLS = require('../models/Url')
const { generatedNanoID, urlCheck } = require('../services/URLServices')
const { CLIENT_ORIGIN } = require('../config/default.config')

const shortenURL = (req, res) => {
  let id = generatedNanoID()
  id = urlCheck(id)
  URLS.create({
    urlCode: id,
    longURL: req.body.longURL,
    shortURL: `${CLIENT_ORIGIN}/${id}`
  })
    .then((resp: JSON) => {
      if (resp) {
        res.send({ success: true })
      } else {
        res.send({ success: false })
      }
    })
    .catch((err) => {
      res.send(err)
    })
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
