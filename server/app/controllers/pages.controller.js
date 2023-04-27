const db = require('../models')
const Page = db.pages
const Op = db.Sequelize.Op

// Create and save a new page
exports.create = (req, res) => {}

// Retrieve all page
exports.findAll = (req, res) => {
  Page.findAll()
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

// Find a single page
exports.findOne = (req, res) => {
  const id = req.params.id;
  Page.findByPk(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while fetching the page"
      })
    })
}

// Update a page
exports.update = (req, res) => {
  const id = req.params.id;
  Page.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Page was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Page with id=${id}. Maybe Page was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Page with id=" + id
      });
    });
}

// Delete a page
exports.deleteOne = (req, res) => {}
