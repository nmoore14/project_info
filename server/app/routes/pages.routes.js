module.exports = app => {
  const pages = require('../controllers/pages.controller')
  const router = require('express').Router()
  
  // Route to get all layouts
  router.get('/', pages.findAll)
  router.get('/:id', pages.findOne)

  app.use('/api/pages', router)
}
