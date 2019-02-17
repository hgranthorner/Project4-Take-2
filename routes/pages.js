const express = require('express')
const views = require('../views')
const { models } = require('../db')

const router = express.Router()

router.get('/:id', (req, res, next) => {
  models.Page.findByPk(Number(req.params.id), {
    include: models.Content
  })
    .then(page => Promise.all([models.Page.findAll(), page]))
    .then(([pages, page]) => res.send(views.getPage(pages, page, page.contents)))
    .catch(next)
})

module.exports = router
