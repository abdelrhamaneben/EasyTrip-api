var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var bcrypt = require('bcrypt');

function findById(id, fn) {
  Contact.findOne(id).exec(function(err, user) {
    if (err) return fn(null, null);

    return fn(null, user)
  });
}

function findByEmail(mail, fn) {
  sails.log.info(mail);
  Contact.findOne({
    email: mail
  }).exec(function(err, user) {
    if (err) return fn(null, null);

    return fn(null, user);
  });
}

passport.serializeUser(function(user, done) {
  sails.log.info(user);
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

        if (!user) return done(null, false, { message: 'Unknown user ' + username });

        bcrypt.compare(password, user.password, function( err, res) {
          if (!res) return done(null, false, { message: 'Invalid Password' });

          var returnUser = {
            email: user.email,
            createdAt: user.createdAt,
            id: user.id_contact
          };

          return done(null, returnUser, { message: 'Logged In Successfully'});
        });
      });
    });
  }
));
