var Sequelize = require('sequelize');
var db = require('./_db');

module.exports = function(db){
  var Restaurant = db.define('restaurant', {
    name: Sequelize.STRING,
    price: {
      type: Sequelize.INTEGER,
      validate: { min: 1, max: 5 }
    },
    cuisine: Sequelize.STRING
  });
  return Restaurant; 
}


