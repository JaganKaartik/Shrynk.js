import express from 'express'
import { connectDB } from './config/database'

const { PORT } = require('./config/default.config')

const app = express()

const port = PORT || 8000

console.log(process.env)

connectDB()

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})
