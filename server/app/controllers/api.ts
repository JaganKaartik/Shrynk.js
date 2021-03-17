import { IResult } from '../interface'

const Joi = require('joi')
const URLS = require('../models/URL')
const { generateID, validID, urlCheck } = require('../services/URLServices')
const { CLIENT_ORIGIN } = require('../config/default.config')

const shortenURL = async (req, res) => {
  const id = generateID()
  const checkedId = await validID(id)
  const urlCheckResp = await urlCheck(req.body.longURL)
  if (urlCheckResp) {
    await URLS.create({
      userId: req.user.userId,
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
    res.status(422).json({
      message: 'Input URL not Valid'
    })
  }
}

const redirectToURL = async (req, res) => {
  const schema = Joi.string()
    .pattern(new RegExp('^[A-Za-z0-9_-]{10}$'))
    .length(10)
    .required()
  const result = schema.validate(req.params.code)
  if (typeof result.error === 'undefined') {
    await URLS.findOne({ urlCode: req.params.code })
      .then((data: IResult) => {
        res.redirect(data.longURL)
      })
      .catch((err) => {
        res.status(404).json({
          message: 'Record does not Exist'
        })
      })
  } else {
    res.status(422).json({
      message: 'Invalid Parameters'
    })
  }
}

export { shortenURL, redirectToURL }
