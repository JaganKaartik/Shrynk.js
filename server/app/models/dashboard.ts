import mongoose from 'mongoose'

const { Schema } = mongoose

const dashboardSchema = new Schema({
  userId: String,
  longURL: String,
  shortURL: String,
  activation: String,
  expiry: String,
  quota: Number
})

export = mongoose.model('dashboard', dashboardSchema)
