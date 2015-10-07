/**
 * ServiceController
 *
 * @description :: Server-side logic for managing Services
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
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
    var activities   = req.param('activities');
    var category  = req.param('category');
    var hours    = req.param('hours');
    //var location   = req.param('location');

    //-------------------------------------------------------
    var geocoder = require('geocoder');

    // POSITION DE L'UTILISATEUR à calculer avec location
    function getOriginDestinationInfo() {
      var origin = req.param('location');
      console.log(origin);

      geocoder.geocode(origin, function ( err, data ) {
        originLocation = data.results[0].geometry.location;
        console.log("originLocation: " + originLocation.lat + ',' + originLocation.lng);

        // A CALCULER ?
        var radius = 43.3;
        //-------------------------------------------------------
        // Execute QUERY
        Service.query("SELECT get_activities_from_posr(" + originLocation.lng + "," + originLocation.lat + "," + radius + ")",function(err, results) {
          if (err) return res.serverError(err);

        });
      });
    };

    getOriginDestinationInfo();
  }
};
