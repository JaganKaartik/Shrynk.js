import mongoose from 'mongoose'

const { Schema } = mongoose

const analyticSchema = new Schema({
  userId: String,
  urlCode: String,
  date: String,
  visits: { type: Number, default: 0 }
})

export = mongoose.model('analytics', analyticSchema)
