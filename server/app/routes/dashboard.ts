import express from 'express'
import { getAllURLS, deleteURL } from '../controllers/dashboard'
import SessionCheck from '../middleware/SessionCheck'

const dashRouter = express.Router()

dashRouter.get('/all', SessionCheck, getAllURLS)
dashRouter.delete('/:code', SessionCheck, deleteURL)
// dashRouter.post('/onboarding', SessionCheck, )

export = dashRouter
