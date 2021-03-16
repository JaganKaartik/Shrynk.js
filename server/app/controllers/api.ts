const URLS = require('../models/URL')
const { generateId, urlCheck } = require('../services/URLServices')
const { CLIENT_ORIGIN } = require('../config/default.config')

const shortenURL = (req, res) => {
  const id = generateId()
  const checkedId = urlCheck(id)
  URLS.create({
    urlCode: checkedId,
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
  URLS.findOne({ urlCode: req.params.code })
    .then((data: JSON) => {
      console.log(data)
      // res.redirect(data.longURL)
    })
    .catch((err) => {
      res.send(err)
    })
}

export { shortenURL, redirectToURL }
