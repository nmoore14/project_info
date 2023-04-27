const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const db = require('./app/models')
db.sequelize.sync()

require('./app/routes/layouts.routes')(app)
require('./app/routes/layoutContent.routes')(app)
require('./app/routes/pages.routes')(app)
const PORT = process.env.NODE_DOCKER_PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.get('/test', function(req, res) {
  res.status(200).send({ data:'Get Test API'});
});
