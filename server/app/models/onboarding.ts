import mongoose from 'mongoose'

const { Schema } = mongoose

const userQuotaSchema = new Schema({
  userId: String,
  accountType: String,
  quota: Number
})

export = mongoose.model('onboarding', userQuotaSchema)
