var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

function findById(id, fn) {
  Contact.findOne(id).done(function(err, user) {
    if (err) return fn(null, null);

    return fn(null, user)
  });
}

function findByEmail(mail, fn) {
  Contact.findOne({
    email: mail
  }).done(function(err, user) {
    if (err) return fn(null, null);

    return fn(null, user)
  });
}

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  function (email, password, done) {
    process.nextTick(function() {
      findByEmail(email, function(err, user) {
        if (err) return done(null, err);

        if (!user) return done(null, false, { message: 'Unknown user ' + email });

        bcrypt.compare(password, user.password, function( err, res) {
          if (!res) return done(null, false, { message: 'Invalid Password' });

          var returnUser = {
            email: user.email,
            createdAt: user.createdAt,
            id: user.id
          };

          return done(null, returnUser, { message: 'Lgged In Successfully'});
        });
      });
    });
  }
));
