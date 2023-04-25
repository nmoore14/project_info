module.exports = app => {
  const layouts = require('../controllers/layouts.controller')
  const router = require('express').Router()
  
  // Route to get all layouts
  router.get('/', layouts.findAll)

  app.use('/api/layouts', router)
}
