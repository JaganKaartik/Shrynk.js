import e from 'express'
import { IResult } from '../interface'

const Joi = require('joi')
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
    res.status(422).json({
      message: 'URL Not Valid'
    })
  }
}

const redirectToURL = (req, res) => {
  const schema = Joi.string().alphanum().length(10).required()
  const result = Joi.validate(req.params.code, schema)
  if (result.error == null) {
    URLS.findOne({ urlCode: req.params.code })
      .then((data: IResult) => {
        res.redirect(data.longURL)
      })
      .catch((err) => {
        res.send(err)
      })
  } else {
    res.status(422).json({
      message: 'Invalid Params'
    })
  }
}

export { shortenURL, redirectToURL }
