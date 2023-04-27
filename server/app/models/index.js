const dbConfig = require("../config/db.config.js");

console.log(dbConfig)
debugger

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.PORT,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.layouts = require('./layouts.model.js')(sequelize, Sequelize);
db.layoutContent = require('./layoutContent.model.js')(sequelize, Sequelize);
db.pages = require('./pages.model.js')(sequelize, Sequelize);

module.exports = db;
