/* tslint:disable */
/* eslint-disable operator-linebreak */
import { IResult } from '../interface'
import { QuotaUpdateSub } from '../services/quota'

const Joi = require('joi')
const moment = require('moment')
const URLS = require('../models/Url')
const User = require('../models/user')
const { generateID, validID, urlCheck } = require('../services/URLServices')
const { QuotaCheck } = require('../services/quota')
const { CLIENT_URL } = require('../config/default.config')
const {
  CreateAnalyticsForURL,
  UpdateVisitCount
} = require('../services/analytics')

const shortenURL = async (req, res) => {
  const id = generateID()
  const checkedId = await validID(id)
  const QuotaLimit = await QuotaCheck(req.body.userId)
  const urlCheckResp = await urlCheck(req.body.longURL)
  const urlExists = await URLS.find({
    longURL: req.body.longURL,
    userId: req.body.userId
  }).then((resp) => resp.length === 0)

  if (urlCheckResp && QuotaLimit && urlExists) {
    const urlCreated = await URLS.create({
      userId: req.body.userId,
      urlCode: checkedId,
      longURL: req.body.longURL,
      shortURL: `${CLIENT_URL}/${id}`
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
      const currentDate = moment().format('MM/DD/YYYY')
      /* Analytics - Creation */
      CreateAnalyticsForURL(req.body.userId, checkedId, currentDate)
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
    const RedirectStatus = await URLS.findOne({ urlCode: req.params.code })
      .then((data: IResult) => {
        if (data.expiry >= currentDate) {
          return {
            info: true,
            data
          }
        }
        return {
          info: false
        }
      })
      .catch((err) => ({ info: false, reason: err }))
    if (RedirectStatus.info === true) {
      const Today = moment().format('MM/DD/YYYY')
      const userId = await URLS.findOne({
        urlCode: req.params.code
      }).then((resp) => resp.userId)
      /* Analytics - Update Visit Count */
      UpdateVisitCount(userId, req.params.code, Today)
      res.redirect(RedirectStatus.data.longURL)
    } else {
      await URLS.deleteOne({ urlCode: req.params.code })
      const message = RedirectStatus.reason
        ? 'Record does not Exist'
        : 'URL has expired'
      res.status(422).send({
        message
      })
    }
  } else {
    res.status(422).send({
      message: 'Invalid Parameters'
    })
  }
}

const userProfile = async (req, res) => {
  if (req.params.userid) {
    await User.findOne({ userId: req.params.userid }).then((resp) => {
      if (resp.length !== 0) res.send(resp)
      else {
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
  res.redirect('/app/home')
}

export { shortenURL, redirectToURL, BaseController, userProfile }
