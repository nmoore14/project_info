const db = require('../models')
const Layout = db.layouts
const Op = db.Sequelize.Op

// Create and save a new layout
exports.create = (req, res) => {}

// Retrieve all Layouts
exports.findAll = (req, res) => {
  Layout.findAll()
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the layouts"
      })
    })

}

// Find a single layout
exports.findOne = (req, res) => {}

// Update a layout
exports.update = (req, res) => {}

// Delete a layout
exports.deleteOne = (req, res) => {}
