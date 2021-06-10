const STATS = require('../models/Account')

/* Function that returns URL quota balance */
export const QuotaBalance = async (id) => {
  const QuotaBal = await STATS.findOne({ userId: id })
    .then((res) => res.currentQuota)
    .catch((err) => err)
  return QuotaBal
}

/* Function that checks whether URL quota balance is greater than 0 */
export const QuotaCheck = async (id) => {
  const QuotaStatus = await STATS.findOne({ userId: id })
    .then((res) => res.currentQuota > 0)
    .catch((err) => err)
  return QuotaStatus
}

const QuotaUpdater = async (id, newQuota) => {
  await STATS.findOneAndUpdate(
    {
      userId: id
    },
    {
      currentQuota: newQuota
    },
    {
      new: true
    }
  )
    .then((resp) => !!resp)
    .catch((err) => err)
}

/* Function that add 1 to URL quota balance */
export const QuotaUpdateAdd = async (id) => {
  const newQuota = (await QuotaBalance(id)) + 1
  const result = QuotaUpdater(id, newQuota)
  return result
}

/* Function that subtracts 1 from URL quota balance */
export const QuotaUpdateSub = async (id) => {
  const newQuota = (await QuotaBalance(id)) - 1
  const result = QuotaUpdater(id, newQuota)
  return result
}
