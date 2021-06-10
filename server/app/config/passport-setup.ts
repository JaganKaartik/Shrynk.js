import { v4 as uuidv4 } from 'uuid'

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2')
const GitHubStrategy = require('passport-github').Strategy
const User = require('../models/user')
const Analytics = require('../models/Analytics')
const {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET
} = require('./default.config')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user)
    })
    .catch(() => {
      done(new Error('Failed to deserialize an user'))
    })
})

const userHandler = async (profile, done) => {
  const currentUser = await User.findOne({
    otherInfo: profile._json.email
  })
    .then((resp) => resp)
    .catch((err) => {
      console.error(err)
    })

  if (!currentUser) {
    const uid = uuidv4()
    const newUser = new User({
      userId: uid,
      provider: profile.provider,
      name: profile._json.name,
      profileImageUrl: profile._json.picture,
      otherInfo: profile._json.email,
      onboarding: true
    })
    newUser.save()
    done(null, newUser)
  } else {
    done(null, currentUser)
  }
}

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/redirect',
      passReqToCallback: true
    },
    async (request, accessToken, refreshToken, profile, done) => {
      userHandler(profile, done)
    }
  )
)

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
      passReqToCallback: true
    },
    async (request, accessToken, refreshToken, profile, done) => {
      userHandler(profile, done)
    }
  )
)
