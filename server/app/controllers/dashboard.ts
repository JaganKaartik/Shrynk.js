import { QuotaUpdateAdd } from '../services/quota'

const URLS = require('../models/Url')
const User = require('../models/user')
const Account = require('../models/Account')
const Analytics = require('../models/Analytics')
const disableOnboarding = require('../services/onboarding')

const getAllURLS = async (req, res) => {
  // Get all URLs
  await URLS.find({ userId: req.params.userid })
    .then((data) => {
      if (data.length !== 0) {
        // URLs (data) exists
        res.send({ data, success: true })
      } else {
        res.send({ success: false })
      }
    })
    .catch((err) => {
      res.status(404).send({
        message: 'Record does not Exist'
      })
    })
}

const deleteURL = async (req, res) => {
  // Delete URL and Increment Quota
  const deletionResp = await URLS.findOneAndRemove({ urlCode: req.params.code })
    .then((data: JSON) => {
      if (data) {
        // Increment Quota of user
        QuotaUpdateAdd(req.body.userId)
        return true
      }
      return false
    })
    .catch((err) => {
      res.status(404).send({
        message: 'Record does not Exist'
      })
    })
  if (deletionResp) {
    // Remove associated Analytics Information
    await Analytics.deleteMany({ urlCode: req.params.code })
    res.send({ success: true })
  } else {
    res.send({ success: false })
  }
}

const userOnboarding = async (req, res) => {
  // Check Onboarding Status
  const onboardingStatus = await User.findOne({ userId: req.body.userId })
    .then((resp) => resp.onboarding)
    .catch((err) => err)
  // If Onboarding status is true
  if (onboardingStatus) {
    // Update Oboarding Status (set value to false)
    console.log(req.body.userId)
    await disableOnboarding(req.body.userId)
    // Add Quota Information
    await Account.create({
      userId: req.body.userId,
      accountType: req.body.accountType,
      fixedQuota: req.body.fixedQuota,
      currentQuota: req.body.fixedQuota
    })
      .then((resp) => {
        if (resp) {
          console.log(
            `Account Created for ${req.body.userId} as a ${req.body.accountType} account with quota ${req.body.fixedQuota}`
          )
          res.send({ success: true })
        } else {
          res.send({ success: false })
        }
      })
      .catch((err) => err)
  } else {
    // If Onboarding status is false (User already onboarded)
    res.status(422).send({
      message: 'User already Onboarded. Unable to process Request'
    })
  }
}

export { getAllURLS, deleteURL, userOnboarding }
