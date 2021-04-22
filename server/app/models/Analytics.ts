import mongoose from 'mongoose'

const { Schema } = mongoose

const analyticSchema = new Schema({
  userId: String,
  urls: [
    {
      urlCode: String,
      historicalData: [
        {
          day: String,
          vists: Number
        }
      ]
    }
  ]
})

export = mongoose.model('analytics', analyticSchema)
