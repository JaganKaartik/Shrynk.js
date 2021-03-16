import express from 'express'
import { redirectToURL, shortenURL } from '../controllers/api'
import SessionCheck from '../middleware/SessionCheck'

const apiRouter = express.Router()

apiRouter.get('/item/:code', SessionCheck, redirectToURL)
apiRouter.post('/item/', SessionCheck, shortenURL)

export = apiRouter
