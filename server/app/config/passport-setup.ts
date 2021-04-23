import { v4 as uuidv4 } from 'uuid'

const passport = require('passport')
const TwitterStrategy = require('passport-twitter')
const GoogleStrategy = require('passport-google-oauth2')
const User = require('../models/user')
const Analytics = require('../models/Analytics')
const {
  TWITTER_CONSUMER_KEY,
  TWITTER_CONSUMER_SECRET,
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

passport.use(
  new TwitterStrategy(
    {
      consumerKey: TWITTER_CONSUMER_KEY,
      consumerSecret: TWITTER_CONSUMER_SECRET,
      callbackURL: '/auth/twitter/redirect'
    },
    async (token, tokenSecret, profile, done) => {
      User.findOne({
        otherInfo: profile._json.email
      }).then((currentUser) => {
        if (!currentUser) {
          const uid = uuidv4()
          const newUser = new User({
            userId: uid,
            provider: profile.provider,
            name: profile._json.name,
            profileImageUrl: profile._json.profile_image_url,
            otherInfo: profile._json.screen_name,
            location: profile._json.location,
            profileBannerUrl: profile._json.profile_banner_url,
            onboarding: true
          })
          newUser.save()
          done(null, newUser)
        } else {
          done(null, currentUser)
        }
      })
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
  )
)
