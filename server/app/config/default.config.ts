require('dotenv').config({ path: `.env.${process.env.APP_ENV}` })

const {
  PORT,
  MONGO_URL,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  CLIENT_HOME,
  CLIENT_LOGIN,
  COOKIE_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  CLIENT_URL_PROD,
  CLIENT_URL_DEV,
  JWT_SECRET,
  REDIS_HOST,
  REDIS_PORT,
  SESSION_SECRET,
  NODE_ENV
} = process.env

export {
  PORT,
  MONGO_URL,
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
  CLIENT_HOME,
  CLIENT_LOGIN,
  COOKIE_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  CLIENT_URL_PROD,
  CLIENT_URL_DEV,
  JWT_SECRET,
  REDIS_HOST,
  REDIS_PORT,
  SESSION_SECRET,
  NODE_ENV
}
