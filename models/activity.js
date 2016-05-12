var Sequelize = require('sequelize');
var db = require('./_db');
var Place = require('./place');

var Activity = db.define('activity', {
  name: Sequelize.STRING,
  age_range: Sequelize.STRING
});

module.exports = Activity
