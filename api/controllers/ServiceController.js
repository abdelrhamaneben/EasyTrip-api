/**
 * ServiceController
 *
 * @description :: Server-side logic for managing Services
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /*
          POST http://localhost:1337/search
          Params:

              {
                   "origin": "Lille",
                   "destination": "Arras"
              }
	*/
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


          // PROCEDURE BDD


          // -------------------------



          // DETAILS DISTANCE SERVICE
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
          //---------------------------
        });
      });
    };

    getOriginDestinationInfo();

/*=======
	search: function (req, res) {
		// VERIFICATION DES PARAMETRES NECESSAIRES
		if(!req.param('location')) {
			res.badRequest("Need Location Param !!");
		}

		if(!req.param('hours')) {
			res.badRequest("Need hours Param !!");
		}

		if(!req.param('category')) {
			res.badRequest("Need category Param !!");
		}

		if(!req.param('activities')) {
			res.badRequest("Need activities Params !!");
		}
		var activities 	= req.param('activities');
		var category	= req.param('category');
		var hours		= req.param('hours');
		var location 	= req.param('location');

		//-------------------------------------------------------
		// TO DO

		// POSITION DE L'UTILISATEUR à calculer avec location
		var longitude 	= 454.34;
		var latitude 	= 435.4;
		// KM de RAYON
		var raidus 		= 43;
		//-------------------------------------------------------
		// Execute QUERY
		Service.query("SELECT get_activities_from_posr(" + longitude + "," + latitude + "," + raidus + ")",function(err, results) {
		  if (err) return res.serverError(err);
		  return res.ok(results.rows);
		});
>>>>>>> dev
*/
  }
};
