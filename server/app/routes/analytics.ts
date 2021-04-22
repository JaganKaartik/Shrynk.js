import express from 'express'
import SessionCheck from '../middleware/SessionCheck'

const { getAnalyticsData } = require('../controllers/analytics.ts')

const analyticsRouter = express.Router()

analyticsRouter.get('/:userid', SessionCheck, getAnalyticsData)

export = analyticsRouter
