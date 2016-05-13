$(function initializeMap() {

    var graceHopperAcademy = new google.maps.LatLng(40.705086, -74.009151);

    var styleArr = [{
        featureType: 'landscape',
        stylers: [{ saturation: -100 }, { lightness: 60 }]
    }, {
        featureType: 'road.local',
        stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
    }, {
        featureType: 'transit',
        stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
    }, {
        featureType: 'administrative.province',
        stylers: [{ visibility: 'off' }]
    }, {
        featureType: 'water',
        stylers: [{ visibility: 'on' }, { lightness: 30 }]
    }, {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
    }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ visibility: 'off' }]
    }, {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
    }];

    var mapCanvas = document.getElementById('map-canvas');

    var currentMap = new google.maps.Map(mapCanvas, {
        center: graceHopperAcademy,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styleArr
    });

    var iconURLs = {
        hotel: '/images/lodging_0star.png',
        restaurant: '/images/restaurant.png',
        activity: '/images/star-3.png'
    };

    function drawMarker(type, coords) {
        var latLng = new google.maps.LatLng(coords[0], coords[1]);
        var iconURL = iconURLs[type];
        var marker = new google.maps.Marker({
            icon: iconURL,
            position: latLng
        });
        marker.setMap(currentMap);
        return marker;
    }

    function removeMarker(type, coords) {
        // var latLng = new google.maps.LatLng(coords[0], coords[1]);
        // var iconURL = iconURLs[type];
        // var marker = new google.maps.Marker({
        //     icon: iconURL,
        //     position: latLng
        // });


        marker.setMap(null);
    }

    $('.hotel-button').on('click', function clickFunc() {
        var hotelDOM = $('#hotel-choices').val();
        $('.hotel-selections').append('<div class="itinerary-item day' + day + '"> <span class="title">' + hotelDOM + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>');
        var ourHotel;
        hotels.forEach(function(hotel) {
            if (hotel.name === hotelDOM) {
                ourHotel = hotel;
            }
        });
        var ourPlace = places.filter(function(place) {
            return place.id === ourHotel.placeId;
        })[0];

        var hotelMarker = drawMarker('hotel', ourPlace.location);

        $('.hotel-button').off('click');

        $('.remove').on('click', function() {
            $('.itinerary-item').remove();
            $('.hotel-button').on('click', clickFunc);
            hotelMarker.setMap(null);
        });
    });


    $('.restaurant-button').on('click', function() {
        var restaurantDOM = $('#restaurant-choices').val();
        var restaurantDOMnoSpaces = restaurantDOM.split(' ').join('').replace("'", '');

        $('.restautant-selections').append(`<div class="itinerary-item ${restaurantDOMnoSpaces} day${day}"> <span class="title">` + restaurantDOM + `</span><button class="btn btn-xs btn-danger remove btn-circle btn-${restaurantDOMnoSpaces}">x</button></div>`);
        var ourRestaurant;
        restaurants.forEach(function(restaurant) {
            if (restaurant.name === restaurantDOM) {
                ourRestaurant = restaurant;
            }
        });

        var ourPlace = places.filter(function(place) {
            return place.id === ourRestaurant.placeId;
        })[0];

        var restaurantMarker = drawMarker('restaurant', ourPlace.location);

        $('.btn-' + restaurantDOMnoSpaces).on('click', function() {
            $('.' + restaurantDOMnoSpaces).remove();
            restaurantMarker.setMap(null);
        });

    });


    $('.activity-button').on('click', function() {

        var activityDOM = $('#activity-choices').val();
        var activityDOMnoSpaces = activityDOM.split(' ').join('').replace("'", '');


        $('.activity-selections').append(`<div class="itinerary-item ${activityDOMnoSpaces} day${day}"> <span class="title">` + activityDOM + `</span><button class="btn btn-xs btn-danger remove btn-circle btn-${activityDOMnoSpaces}">x</button></div>`);

        var ourActivity;
        activities.forEach(function(activity) {
            if (activity.name === activityDOM) {
                ourActivity = activity;
            }
        });
        var ourPlace = places.filter(function(place) {
            return place.id === ourActivity.placeId;
        })[0];

        var activityMarker = drawMarker('activity', ourPlace.location);

        $('.btn-' + activityDOMnoSpaces).on('click', function() {
            $('.' + activityDOMnoSpaces).remove();
            activityMarker.setMap(null);
        });
    });

    var num = 0;
    var day;
    $('#day-add').on('click', function() {
        num++;
        $('#day-add').before(`<button id="day${num}" class="btn btn-circle day-btn">${num}</button>`);
        day = $('#day' + num).text();

        // console.log(day);
        //  console.log(num);

        // var theDayWeWantToShow =
        $('.day-btn').on('click', function() {
          if($(this).text() !== "+"){
            day = $(this).text();
            console.log(day);
            $('.day'+day).show();
            for(var i = 1; i <= num; i++){
              if(i != day){
              console.log("iterating", i)
                $('.day'+i).hide();
               }
            }
          }
        });

        // $('.day'+day).not(theDayWeWantToShow).css('display', "none");
        
    });


});
