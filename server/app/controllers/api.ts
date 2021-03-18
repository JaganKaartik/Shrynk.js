import { IResult } from '../interface'
import { QuotaUpdateSub } from '../services/quota'

const Joi = require('joi')
const URLS = require('../models/Url')
const { generateID, validID, urlCheck } = require('../services/URLServices')
const { QuotaCheck } = require('../services/quota')
const { CLIENT_ORIGIN } = require('../config/default.config')

const shortenURL = async (req, res) => {
  const id = generateID()
  const checkedId = await validID(id)
  const QuotaLimit = await QuotaCheck(req.user.userId)
  const urlCheckResp = await urlCheck(req.body.longURL)
  if (urlCheckResp && QuotaLimit) {
    await URLS.create({
      userId: req.user.userId,
      urlCode: checkedId,
      longURL: req.body.longURL,
      shortURL: `${CLIENT_ORIGIN}/${id}`
    })
      .then((resp: JSON) => {
        if (resp) {
          QuotaUpdateSub(req.user.userId)
          res.send({ success: true })
        } else {
          res.send({ success: false })
        }
      })
      .catch((err) => {
        res.send(err)
      })
  } else if (!QuotaLimit) {
    res.status(422).json({
      message: 'Quota Limit Exceeded.'
    })
  } else {
    res.status(422).json({
      message: 'Input URL not Valid.'
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
