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
apiRouter.get('/user/:userid', SessionCheck, userProfile)
apiRouter.get('/', BaseController)

export = apiRouter
