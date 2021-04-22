/* eslint-disable operator-linebreak */
import { IResult } from '../interface'
import { QuotaUpdateSub } from '../services/quota'

const Joi = require('joi')
const moment = require('moment')
const URLS = require('../models/Url')
const User = require('../models/user')
const Analytics = require('../models/Analytics')
const { generateID, validID, urlCheck } = require('../services/URLServices')
const { QuotaCheck } = require('../services/quota')
const { CLIENT_URL_DEV, CLIENT_URL_PROD } = require('../config/default.config')

const CLIENT_ORIGIN =
  process.env.NODE_ENV === 'production' ? CLIENT_URL_PROD : CLIENT_URL_DEV

const shortenURL = async (req, res) => {
  const id = generateID()
  const checkedId = await validID(id)
  const QuotaLimit = await QuotaCheck(req.body.userId)
  const urlCheckResp = await urlCheck(req.body.longURL)
  const urlExists = await URLS.find({
    longURL: req.body.longURL
  }).then((resp) => resp.length === 0)
  if (urlCheckResp && QuotaLimit && urlExists) {
    const urlCreated = await URLS.create({
      userId: req.body.userId,
      urlCode: checkedId,
      longURL: req.body.longURL,
      shortURL: `${CLIENT_ORIGIN}/${id}`
    })
      .then((resp: JSON) => {
        if (resp) {
          QuotaUpdateSub(req.body.userId)
          return true
        }
        return false
      })
      .catch((err) => {
        res.send(err)
      })
    if (urlCreated) {
      await Analytics.create({
        userId: req.body.userId,
        urls: [{ urlCode: checkedId }]
      })
      res.send({ message: 'success' })
    } else {
      res.send({ message: 'failed' })
    }
  } else if (!urlExists) {
    res.status(422).send({
      message: 'Error! URL Already Shrynked.'
    })
  } else if (!QuotaLimit) {
    res.status(422).send({
      message: 'Quota Limit Exceeded.'
    })
  } else {
    res.status(422).send({
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
  const currentDate = new Date()
  if (typeof result.error === 'undefined') {
    await URLS.findOne({ urlCode: req.params.code })
      .then((data: IResult) => {
        if (data.expiry >= currentDate) {
          res.redirect(data.longURL)
        } else {
          res.satus(422).send({
            message: 'URL has expired'
          })
        }
      })
      .catch((err) => {
        res.status(404).send({
          message: 'Record does not Exist'
        })
      })
  } else {
    res.status(422).send({
      message: 'Invalid Parameters'
    })
  }
}

const userProfile = async (req, res) => {
  if (req.params.userid) {
    await User.findOne({ userId: req.params.userid }).then((resp) => {
      if (resp.length !== 0) {
        res.send(resp)
      } else {
        res.status(422).send({
          message: 'User not found'
        })
      }
    })
  } else {
    res.status(422).send({
      message: 'Invalid Parameters'
    })
  }
}
/* Test Route */
const BaseController = (req, res) => {
  res.send('Welcome to Root of Server Side of Shrynk.js')
}

export { shortenURL, redirectToURL, BaseController, userProfile }
