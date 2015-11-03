/**
 * ServiceController
 *
 * @description :: Server-side logic for managing Services
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  search: function (req, res) {
    // VERIFICATION DES PARAMETRES NECESSAIRES
    var origin = req.param('location');
    var rectangle = req.param('rectangle');
    if(!req.param('activities')) {
      res.badRequest("Need activities Params !!");
    }
    var activities = JSON.parse(req.param('activities'));
    console.log(activities);
    var geocoder = require('geocoder');

    geocoder.geocode(origin, function ( err, data ) {
      originLocation = data.results[0].geometry.location;
      console.log("originLocation: " + originLocation.lat + ',' + originLocation.lng);
      
      // si localisation est dans le nord
      if(originLocation.lat >= 49 && originLocation.lat <= 51) {
        if(originLocation.lng >= 2 && originLocation.lng <= 3.7) {
          // retourne tous les services dans le nord
          Service.find({activity : activities}).exec(function (err, found){
            if(err) res.serverError();
            console.log("Services trouvés :");
            console.log(found);
            return res.json(found);
          });
        }
        else {
          console.log("pas dans le nord");
          return res.json([]);
        }
      }
      else {
        console.log("pas dans le nord 2");
        return res.json([]);
      }
    });
  }
};
