import mongoose from 'mongoose'

const { Schema } = mongoose

const urlSchema = new Schema({
  userId: String,
  urlCode: String,
  longURL: String,
  shortURL: String,
  activation: { type: Date, default: Date.now },
  expiry: {
    type: Date,
    default: () => new Date(+Date.now() + 7 * 24 * 60 * 60 * 1000)
  }
})

export = mongoose.model('urltable', urlSchema)
