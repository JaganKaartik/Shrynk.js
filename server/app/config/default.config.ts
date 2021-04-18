require('dotenv').config()

const {
  PORT,
  MONGO_URL,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  COOKIE_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  NODE_ENV,
  CLIENT_URL_PROD,
  CLIENT_URL_DEV,
  JWT_SECRET,
  SESSION_SECRET
} = process.env

export {
  PORT,
  MONGO_URL,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  COOKIE_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  NODE_ENV,
  CLIENT_URL_PROD,
  CLIENT_URL_DEV,
  JWT_SECRET,
  SESSION_SECRET
}
