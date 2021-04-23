const Analytics = require('../models/Analytics')

const getAnalyticsData = async (req, res) => {
  if (req.params.userid) {
    const result = await Analytics.find({ userId: req.params.userid })
    if (result.length !== 0) res.send(result)
    else {
      res.status(422).send({ message: 'Insufficient Analytics Data present' })
    }
  } else {
    res.status(422).send({ message: 'Invalid Parameters' })
  }
}

export = getAnalyticsData
