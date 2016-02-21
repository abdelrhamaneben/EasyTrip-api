/**
*
*
*/
module.exports = {

  /**
  *
  */
  index: function(req, res) {
    Stat.find({ip_stat: req.connection.remoteAddress})
      .exec(function(err, stat) {
        if (stat.length) {
          // stat not empty
          var today = new Date();
          today.setHours(0);
          today.setMinutes(0);
          today.setSeconds(0);

          Stat.find({ip_stat: req.connection.remoteAddress,
            createdAt: {'>=': today}}).exec(function(err, stat) {
              if (stat.length === 0) {
                Stat.create({ip_stat: req.connection.remoteAddress})
                  .exec(console.log);
              }
            });
        } else {
          Stat.create({ip_stat: req.connection.remoteAddress})
            .exec(console.log);
        }
      });

    Category.find().exec(function finding(err, found) {
      if (err) {
        return res.serverError(err);
      }
      return res.view('index',{
        'categories': found,
        'logged': (req.session.authenticated  === true)
      });
    });
  },
  unless : function (data) {
   
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
    Category.findOne({id_category: req.param('category')})
      .populate('activities').exec(function finding(err, cat) {
        if (err) {
          return res.serverError(err);
        }
        // Category not exist
        if ((cat === undefined)) {
          return res.serverError('Impossible to find category');
        }

        // Get List of service
        var activitieslist = [];
        for (var act in cat.activities) {
          if (cat.activities[act].id_activity !== undefined) {
            activitieslist.push(cat.activities[act].id_activity);
          }
        }
        if (activitieslist.length === 0) {
          return res.view('result',{
            'activities': [],
            'category': cat.name,
            'services': [],
            'latitude': 48.856614,
            'longitude': 2.3522219
          });
        } else {
          var geocoder = require('geocoder');
          geocoder.geocode(req.param('location'), function(err, data) {
            if (err) {
              res.serverError(err);
            }
            originLocation = data.results[0].geometry.location;
            console.log(activitieslist);
            Service.find({
              geolati: {'<=': originLocation.lat +  1.5,
                '>=': originLocation.lat - 1.5},
              geolong: {'<=': originLocation.lng + 2,
                '>=': originLocation.lng - 2}
            })
            .populate('creator')
            .populate('address')
            .populate('servicePrices')
            .populate('activities', {id_activity : activitieslist})
            .exec(function finding(err, found) {
              if (err) {
                return res.serverError(err);
              }
              var services = [];
              for (var d in found) {
                if ( found[d].activities.length !=0 ) {
                  services.push(found[d]);
                }
              }
              return res.view('result',{
                'activities': cat.activities,
                'category': cat.name,
                'services': services,
                'latitude': originLocation.lat,
                'longitude': originLocation.lng
              });
            });
          });

        }

      });
  },

 
  /**
  *
  */
  feature: function(req, res) {
    if (!req.param('service')) {
      return res.badRequest('Need ServiceId Params !!');
    }

    var serviceId = req.param('service');

    Stat.find({ip_stat: req.connection.remoteAddress, id_service: serviceId})
      .exec(function(err, stat) {

        if (stat.length) {
          // stat not empty
          var today = new Date();
          today.setHours(0);
          today.setMinutes(0);
          today.setSeconds(0);

          Stat.find({ip_stat: req.connection.remoteAddress,
            id_service: serviceId, createdAt: {'>=': today}})
              .exec(function(err, stat) {
                if (stat.length === 0) {
                  Stat.create({ip_stat: req.connection.remoteAddress,
                    id_service: serviceId}).exec(console.log);
                }
              });
        } else {
          Stat.create({ip_stat: req.connection.remoteAddress,
            id_service: serviceId}).exec(console.log);
        }
      });

    return res.view('features');
  },
  loginpopin: function(req, res) {
    if (req.session.authenticated  === true) {
      return res.ok('Vous êtes déja connecté');
    }
    return res.view('login');
  },
  signuppopin: function(req, res) {
    return res.view('signup');
  }
};
