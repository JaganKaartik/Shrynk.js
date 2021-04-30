import express from 'express'
import favicon from 'serve-favicon'
import connectDB from './config/database'
import Middleware from './middleware'

const path = require('path')

const { PORT } = require('./config/default.config')

const app = express()
// app.use(favicon(path.join(__dirname, '../../app/public/favicon.ico')))

const port = PORT || 8000

connectDB()
app.use(Middleware)

// app.use(express.static(path.join(__dirname, '../../app/build')))

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../app/build', 'index.html'))
// })

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})
