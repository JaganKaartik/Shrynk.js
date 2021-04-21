/* eslint-disable operator-linebreak */
import e from 'express'
import { IResult } from '../interface'
import { QuotaUpdateSub } from '../services/quota'

const Joi = require('joi')
const URLS = require('../models/Url')
const User = require('../models/user')
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
    await URLS.create({
      userId: req.body.userId,
      urlCode: checkedId,
      longURL: req.body.longURL,
      shortURL: `${CLIENT_ORIGIN}/${id}`
    })
      .then((resp: JSON) => {
        if (resp) {
          QuotaUpdateSub(req.body.userId)
          res.send({ message: 'success' })
        } else {
          res.send({ message: 'failed' })
        }
      })
      .catch((err) => {
        res.send(err)
      })
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
  if (typeof result.error === 'undefined') {
    await URLS.findOne({ urlCode: req.params.code })
      .then((data: IResult) => {
        res.redirect(data.longURL)
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
  if (req.params.userId) {
    await User.findOne({ userId: req.params.userId }).then((resp) => {
      if (resp.length !== 0) {
        res.send(resp.name)
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
