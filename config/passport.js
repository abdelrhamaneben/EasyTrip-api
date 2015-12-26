<<<<<<< HEAD
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
=======
var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findOneById(id).done(function (err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(email, password, done) {
    User.findOne({ email: email}).done(function(err, user) {
          if (err) { return done(err); }
            if (!user) { return done(null, false, { message: 'Unknown user ' + email }); }
            if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
            return done(null, user);
        });
    }
));
>>>>>>> f542c03390e06e2da7f68fe3ec497c132e95e93e
