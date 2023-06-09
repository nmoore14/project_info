module.exports = {
  HOST: process.env.MYSQLDB_HOST,
  USER: process.env.MYSQLDB_USER,
  PASSWORD: process.env.MYSQLDB_ROOT_PASSWORD,
  DB: process.env.MYSQLDB_DATABASE,
  PORT: process.env.MYSQLDB_LOCAL_PORT,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
