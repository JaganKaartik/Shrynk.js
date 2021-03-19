import express from 'express'
import { redirectToURL, shortenURL, BaseController } from '../controllers/api'
import SessionCheck from '../middleware/SessionCheck'

const apiRouter = express.Router()

apiRouter.get('/:code', redirectToURL)
apiRouter.post('/addurl', SessionCheck, shortenURL)
apiRouter.get('/', SessionCheck, BaseController)

export = apiRouter
