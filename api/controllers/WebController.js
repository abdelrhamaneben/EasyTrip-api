/**
*
*
*/
module.exports = {
  /**
  *
  */
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
  /**
  *
  */
  result: function(req, res) {

    if (!req.param('location')) {
      return res.badRequest('Need location Params !!');
    }
    if (!req.param('category')) {
      return res.badRequest('Need location Params !!');
    }

    // Get selected Category 
    Category.findOne({ id_category : req.param('category') }).populate('activities').exec(function finding(err, cat){
      if (err) {
          return res.serverError(err);
      }
      // Category not exist
      if((cat === undefined)) return res.serverError("Impossible to find category");
      // Get List of service
      Service.find().populate('activities').populate('creator').populate('address').populate('servicePrices').exec(function finding(err, found) {
        if (err) {
          return res.serverError(err);
        }
        var services = [];

        if(req.param('category') == 30) {
          services = found;
        }
      return res.view('result',{
        'activities' : cat.activities,
        'category': cat.name,
        'services' : services,
        'latitude' : 48.856614,
        'longitude' : 2.3522219
        });
      });
    });
  },
  /**
  *
  */
  feature: function(req, res) {
    if (!req.param('service')) {
      return res.badRequest('Need ServiceId Params !!');
    }
    return res.view('features');
  }
};
