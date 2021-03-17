import express from 'express'
import { redirectToURL, shortenURL } from '../controllers/api'
import SessionCheck from '../middleware/SessionCheck'

const apiRouter = express.Router()

apiRouter.get('/:code', redirectToURL)
apiRouter.post('/addurl', SessionCheck, shortenURL)

export = apiRouter
