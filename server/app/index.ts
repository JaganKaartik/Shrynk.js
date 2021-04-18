import express from 'express'
import connectDB from './config/database'
import Middleware from './middleware'

const { PORT } = require('./config/default.config')

const app = express()

const port = PORT || 8000

connectDB()
app.use(Middleware)

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})
