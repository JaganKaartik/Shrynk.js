import express from 'express'
import {
  redirectToURL,
  shortenURL,
  BaseController,
  userProfile
} from '../controllers/api'
import SessionCheck from '../middleware/SessionCheck'

const apiRouter = express.Router()

apiRouter.get('/:code', redirectToURL)
apiRouter.post('/addurl', SessionCheck, shortenURL)
apiRouter.post('/user/:userid', SessionCheck, userProfile)
apiRouter.get('/', SessionCheck, BaseController)

export = apiRouter
