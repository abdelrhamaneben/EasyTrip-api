
module.exports = {

  index: function(req, res) {
    return res.view('index');
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
      return res.view('result',{
        'latup':  latup,
        'latdown': latdown,
        'longright': longright,
        'longleft': longleft,
        'category': req.param('category')
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
