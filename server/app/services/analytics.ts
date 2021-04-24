const Analytics = require('../models/Analytics')

const CreateAnalyticsForURL = async (userId, urlCode, date) => {
  await Analytics.create({
    userId,
    urlCode,
    date
  })
}

const UpdateVisitCount = async (userId, urlCode, date) => {
  await Analytics.findOneAndUpdate(
    {
      userId,
      urlCode,
      date
    },
    {
      $inc: { visits: 1 }
    },
    {
      upsert: true
    }
  )
}

export { CreateAnalyticsForURL, UpdateVisitCount }
