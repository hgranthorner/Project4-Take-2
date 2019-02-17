const express = require('express')
const { cnxn, models } = require('./db')
const app = express()

app.get('/', (req, res, next) => {
  res.send('hello')
})

module.exports = app
