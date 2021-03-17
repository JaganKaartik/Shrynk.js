import { IResult } from '../interface'

const URLS = require('../models/URL')
const { generateID, validID, urlCheck } = require('../services/URLServices')
const { CLIENT_ORIGIN } = require('../config/default.config')

export * from '../interface'

const shortenURL = async (req, res) => {
  const id = generateID()
  const checkedId = await validID(id)
  const urlCheckResp = await urlCheck(req.body.longURL)
  if (urlCheckResp) {
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
  } else {
    res.send('URL Not Valid')
  }
}

const redirectToURL = (req, res) => {
  URLS.findOne({ urlCode: req.params.code })
    .then((data: IResult) => {
      res.redirect(data.longURL)
    })
    .catch((err) => {
      res.send(err)
    })
}

export { shortenURL, redirectToURL }
