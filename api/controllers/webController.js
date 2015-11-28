
module.exports = {

  index: function(req, res) {
    res.view('index');
  },
  result: function(req, res) {
    if (!req.param('location')) {
      res.badRequest('Need location Params !!');
    }
    if (!req.param('category')) {
      res.badRequest('Need location Params !!');
    }
    var geocoder = require('geocoder');

    geocoder.geocode(req.param('location'), function(err, data) {
      if (err) {
        res.serverError(err);
      }

      originLocation = data.results[0].geometry.location;
      var latup =  req.param('latup',originLocation.lat + 1);
      var latdown = req.param('latdown',originLocation.lat - 1);
      var longright = req.param('longright',originLocation.lng + 1);
      var longleft = req.param('longleft',originLocation.lng - 1);

      res.view('result',{
        'latup':  latup,
        'latdown': latdown,
        'longright': longright,
        'longleft': longleft,
        'category': req.param('category')
      });

    });
  }

};
