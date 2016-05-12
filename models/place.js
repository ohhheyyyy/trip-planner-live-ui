var Sequelize = require('sequelize');

module.exports = function(db){
  var Place = db.define('place', {
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone: Sequelize.STRING,
    location: Sequelize.ARRAY(Sequelize.DOUBLE)
  });
  return Place;   
}


