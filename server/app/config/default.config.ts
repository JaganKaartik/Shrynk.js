require('dotenv').config()

const {
  PORT,
  MONGO_URL,
  COOKIE_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  NODE_ENV,
  CLIENT_URL_PROD,
  CLIENT_URL_DEV,
  JWT_SECRET,
  SESSION_SECRET
} = process.env

const CLIENT_URL = NODE_ENV === 'production' ? CLIENT_URL_PROD : CLIENT_URL_DEV

export {
  PORT,
  MONGO_URL,
  COOKIE_KEY,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  NODE_ENV,
  CLIENT_URL,
  JWT_SECRET,
  SESSION_SECRET
}
