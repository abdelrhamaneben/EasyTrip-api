/**
 * ServiceController
 *
 * @description :: Server-side logic for managing Services
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  search: function (req, res) {
    var geocoder = require('geocoder');
    var request = require('request');

    function getOriginDestinationInfo() {
      var origin = req.param('origin');
      var destination = req.param('destination');
      console.log(origin);
      console.log(destination);

      geocoder.geocode(origin, function ( err, data ) {
        originLocation = data.results[0].geometry.location;
        console.log("originLocation: " + originLocation.lat + ',' + originLocation.lng);

        geocoder.geocode(destination, function ( err, data ) {
          destinationLocation = data.results[0].geometry.location;
          console.log("destinationLocation: " + destinationLocation.lat + ',' + destinationLocation.lng);

          console.log(">originLocation: " + originLocation.lat + ',' + originLocation.lng);
          console.log(">destinationLocation: " + destinationLocation.lat + ',' + destinationLocation.lng);

          var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=';
          url += originLocation.lat + ',' + originLocation.lng;
          url += '&destinations=';
          url += destinationLocation.lat + ',' + destinationLocation.lng;
          url += '&language=fr-FR'

          request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              console.log(body) // Show the HTML for the Google homepage.

              return res.send(body);
            }
          });
        });
      });
    };

    getOriginDestinationInfo();

  }
};
