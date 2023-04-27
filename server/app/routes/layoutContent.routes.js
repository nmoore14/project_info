const { layoutContent } = require('../models')

module.exports = app => {
  const layoutContent = require('../controllers/layoutContent.controller')
  const router = require('express').Router()
  
  // Route to get all layouts
  router.get('/:id', layoutContent.findOne)

  app.use('/api/layoutContent', router)
}
