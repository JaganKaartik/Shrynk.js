import express from 'express'
import SessionCheck from '../middleware/SessionCheck'
import getAnalyticsData from '../controllers/analytics'

const analyticsRouter = express.Router()

analyticsRouter.get('/:userid', SessionCheck, getAnalyticsData)

export = analyticsRouter
