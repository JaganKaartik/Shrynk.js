import mongoose from 'mongoose'

const { Schema } = mongoose

const userQuotaSchema = new Schema({
  userId: String,
  accountType: String,
  fixedQuota: Number,
  currentQuota: Number
})

export = mongoose.model('onboarding', userQuotaSchema)
