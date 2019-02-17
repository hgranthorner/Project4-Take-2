const express = require('express')
const { cnxn, models } = require('./db')
const app = express()

app.get('/', (req, res, next) => {
  models.Page.findAll().then(pages => res.send(pages))
})

module.exports = app
