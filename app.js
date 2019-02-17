const express = require('express')
const morgan = require('morgan')
const { cnxn, models } = require('./db')
const { pageRoutes } = require('./routes')
const app = express()

app.use(morgan('dev'))

app.get('/', (req, res, next) => {
  res.redirect('/pages/1')
})

app.use('/pages', pageRoutes)

module.exports = app
