var Sequelize = require('sequelize');

var config = {
  "username": "ahartt2",
  "password": "",
  "database": "tripplanner",
  "host": "127.0.0.1",
  "dialect": "postgres",
  "logging": false
};

var db = new Sequelize(config.database, config.username, config.password, config);

module.exports = db;

