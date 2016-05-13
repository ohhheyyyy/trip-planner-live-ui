var router = require('express').Router();
var Promise = require('bluebird');
var models = require('../models');
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Place = require('../models/place');

router.get('/', function (req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll(),
    Place.findAll()
  ])
  .spread(function (hotels, restaurants, activities, places) {
    res.render('index', {
      hotels: hotels,
      restaurants: restaurants,
      activities: activities,
      places: places
    });
  })
  .catch(next);
});

module.exports = router;