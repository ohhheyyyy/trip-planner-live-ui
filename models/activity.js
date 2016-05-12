var Sequelize = require('sequelize');

module.exports = function(db){
  var Activity = db.define('activity', {
    name: Sequelize.STRING,
    age_range: Sequelize.STRING
  });

  return Activity; 
}

