var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = {
  http: {
    customMiddleware: function(app) {
      console.log('Express middleware for password');
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }
};
