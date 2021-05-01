import { QuotaUpdateAdd } from '../services/quota'

const URLS = require('../models/Url')
const User = require('../models/user')
const Account = require('../models/Account')
const Analytics = require('../models/Analytics')
const disableOnboarding = require('../services/onboarding')

const basic = 5
const premium = 10

const getAllURLS = async (req, res) => {
  // Get all URLs
  await URLS.find({ userId: req.params.userid })
    .then((data) => {
      if (data.length !== 0) {
        // URLs (data) exists
        if (req.query.ucode === 'yes') {
          const urlCodes = data.map((e) => e.urlCode)
          res.send({ urlCodes, success: true })
        } else res.send({ data, success: true })
      } else {
        res.send({ message: 'Insufficent URL Data', success: false })
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
    await disableOnboarding(req.body.userId)
    // Add Quota Information
    const quota = req.body.accountType === 'premium' ? premium : basic
    await Account.create({
      userId: req.body.userId,
      accountType: req.body.accountType,
      fixedQuota: quota,
      currentQuota: quota
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
    // If Onboarding status is false (User already onboarded)
    res.status(422).send({
      message: 'User already Onboarded. Unable to process Request'
    })
  }
}

export { getAllURLS, deleteURL, userOnboarding }
