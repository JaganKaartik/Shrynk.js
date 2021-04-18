import { IResult } from '../interface'
import { QuotaUpdateAdd } from '../services/quota'

const URLS = require('../models/Url')
const User = require('../models/User')
const Account = require('../models/Account')
const disableOnboarding = require('../services/onboarding')

const getAllURLS = async (req, res) => {
  // Get all URLs
  await URLS.find({ userId: req.body.userId })
    .then((data) => {
      if (data.length !== 0) {
        res.send({ data, success: true })
      } else {
        res.send({ success: false })
      }
    })
    .catch((err) => {
      res.status(404).json({
        message: 'Record does not Exist'
      })
    })
}

const deleteURL = async (req, res) => {
  // Delete URL and Increment Quota
  await URLS.findOneAndRemove({ urlCode: req.params.code })
    .then((data: JSON) => {
      if (data) {
        QuotaUpdateAdd(req.body.userId)
        res.send({ success: true })
      } else {
        res.send({ success: false })
      }
    })
    .catch((err) => {
      res.status(404).json({
        message: 'Record does not Exist'
      })
    })
}

const userOnboarding = async (req, res) => {
  // Check Onboarding Status
  const onboardingStatus = await User.findOne({ userId: req.body.userId })
    .then((resp) => resp.onboarding)
    .catch((err) => err)
  // If Onboarding status is true
  if (onboardingStatus) {
    // Update Oboarding Status
    disableOnboarding(req.body.userId)
    // Add Quota
    await Account.create({
      userId: req.body.userId,
      accountType: req.body.accountType,
      fixedQuota: req.body.fixedQuota,
      currentQuota: req.body.fixedQuota
    })
      .then((resp) => {
        if (resp) {
          res.send({ success: true })
        } else {
          res.send({ success: false })
        }
      })
      .catch((err) => err)
  } else {
    res.status(422).json({
      message: 'User already Onboarded. Unable to process Request'
    })
  }
}

export { getAllURLS, deleteURL, userOnboarding }
