import express from 'express'
import { getAllURLS, deleteURL, userOnboarding } from '../controllers/dashboard'
import SessionCheck from '../middleware/SessionCheck'

const dashRouter = express.Router()

dashRouter.get('/all', SessionCheck, getAllURLS)
dashRouter.delete('/:code', SessionCheck, deleteURL)
dashRouter.post('/onboarding', SessionCheck, userOnboarding)

export = dashRouter
