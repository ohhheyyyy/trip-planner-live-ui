var db = require('./_db');

var Hotel = require('./hotel')(db);
var Restaurant = require('./restaurant')(db);
var Activity = require('./activity')(db);
var Place = require('./place')(db);

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = {
  db: db, 
  Place: Place, 
  Hotel: Hotel, 
  Activity: Activity, 
  Restaurant: Restaurant
} 
