import express from 'express'
import SessionCheck from '../middleware/SessionCheck'
import {
  getAnalyticsData,
  getTotalVisitsForURL
} from '../controllers/analytics'

const analyticsRouter = express.Router()

analyticsRouter.get('/:userid', SessionCheck, getAnalyticsData)
analyticsRouter.get('/:userid/:urlcode', SessionCheck, getTotalVisitsForURL)

export = analyticsRouter
