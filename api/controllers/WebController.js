
module.exports = {

  index: function(req, res) {
      Category.find().exec(function finding(err, found) {
      if (err) {
          return res.serverError(err);
      }
      return res.view('index',{
        'categories' : found,
        });
    });
  },
  result: function(req, res) {

    if (!req.param('location')) {
      return res.badRequest('Need location Params !!');
    }
    if (!req.param('category')) {
      return res.badRequest('Need location Params !!');
    }
    /*var geocoder = require('geocoder');

    geocoder.geocode(req.param('location'), function(err, data) {
      if (err) {
        res.serverError(err);
      }

      originLocation = data.results[0].geometry.location;
      var latup =  req.param('latup',originLocation.lat + 1);
      var latdown = req.param('latdown',originLocation.lat - 1);
      var longright = req.param('longright',originLocation.lng + 1);
      var longleft = req.param('longleft',originLocation.lng - 1);
      */
      Service.find().exec(function finding(err, found) {
        if (err) {
          return res.serverError(err);
        }
       return res.view('result',{
        'activities' : [],
        'category': req.param('category'),
        'services' : found,
        'latitude' : 48.856614,
        'longitude' : 2.3522219
        });
      });
    //});
  },
  feature: function(req, res) {
    if (!req.param('service')) {
      return res.badRequest('Need ServiceId Params !!');
    }
    return res.view('features');
  }
};
