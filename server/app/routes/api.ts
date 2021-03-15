import express from 'express'
import {
  getController,
  postController,
  putController,
  deleteController
} from '../controllers/api'
import SessionCheck from '../middleware/SessionCheck'

const apiRouter = express.Router()

apiRouter.get('/get', SessionCheck, getController)
// apiRouter.post('/post', SessionCheck, postController)
// apiRouter.delete('/delete', SessionCheck, deleteController)
// apiRouter.put('/put', SessionCheck, putController)

export = apiRouter
