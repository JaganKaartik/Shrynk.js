import express from 'express'
import getAllURLS from '../controllers/dashboard'
import SessionCheck from '../middleware/SessionCheck'

const dashRouter = express.Router()

dashRouter.get('/', SessionCheck, getAllURLS)
// dashRouter.post('/', SessionCheck, )

export = dashRouter
