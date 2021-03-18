import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
  userId: String,
  provider: String,
  name: String,
  profileImageUrl: String,
  otherInfo: String,
  location: String,
  profileBannerUrl: String,
  onboarding: Boolean
})

export = mongoose.model('user', userSchema)
