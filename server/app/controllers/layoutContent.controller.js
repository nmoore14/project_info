const db = require('../models')
const LayoutContent = db.layoutContent
const Op = db.Sequelize.Op

// Create and save a new layout
exports.create = (req, res) => {}

// Retrieve all Layouts
exports.findAll = (req, res) => {
  LayoutContent.findAll()
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
exports.findOne = (req, res) => {
  const id = req.params.id;
  LayoutContent.findByPk(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the requested layout content"
      })
    })
}

// Update a layout
exports.update = (req, res) => {}

// Delete a layout
exports.deleteOne = (req, res) => {}
