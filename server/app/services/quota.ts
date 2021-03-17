const STATS = require('../models/onboarding')

/* Function that returns URL quota balance */
export const QuotaBalance = async (id) => {
  const QuotaBal = await STATS.findOne({ userId: id })
    .then((res) => res.quota)
    .catch((err) => err)
  return QuotaBal
}

/* Function that checks whether URL quota balance is greater than 0 */
export const QuotaCheck = async (id) => {
  const QuotaStatus = await STATS.findOne({ userId: id })
    .then((res) => res.quota > 0)
    .catch((err) => err)
  return QuotaStatus
}

/* Function that add 1 to URL quota balance */
export const QuotaUpdateAdd = async (id) => {
  const newQuota = (await QuotaBalance(id)) + 1
  const result = await STATS.findOneAndUpdate({
    userId: id,
    quota: newQuota,
    new: true
  })
    .then((resp) => !!resp)
    .catch((err) => err)
  return result
}

/* Function that subtracts 1 from URL quota balance */
export const QuotaUpdateMinus = async (id) => {
  const newQuota = (await QuotaBalance(id)) - 1
  const result = await STATS.findOneAndUpdate({
    userId: id,
    quota: newQuota,
    new: true
  })
    .then((resp) => !!resp)
    .catch((err) => err)
  return result
}
