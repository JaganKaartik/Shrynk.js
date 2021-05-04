import express from 'express'
import favicon from 'serve-favicon'
import path from 'path'
import connectDB from './config/database'
import Middleware from './middleware'

const { PORT, NODE_ENV } = require('./config/default.config')

const port = PORT || 8000

const app = express()
app.use(favicon(path.join(__dirname, '../../app/public/favicon.ico')))

connectDB()
app.use(Middleware)

if (NODE_ENV === 'production') {
  app.disable('x-powered-by')
  app.use(express.static(path.join(__dirname, '../../app/build')))
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../app/build', 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})
