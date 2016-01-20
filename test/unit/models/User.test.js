var should = require('should');

describe('User model', function() {
  describe('misc', function() {
    it ('should not be empty', function(done) {
      User.find().exec(function(err, users) {
        users.length.should.not.be.eql(0);

        done();
      });
    });

    it ('should contain a specific user', function(done) {
      User.findOne({email: 'elouadi.slimane@yahoo.fr'}).exec(function(err, user) {
        should(user).exist;
        should(err).not.exist;

        should(user).have.property('phone').eql('0652195295');

        done();
      });
    });
  });

  describe('create', function() {
    it ('should create a user', function(done) {
      User.create({
        "name_first": "Toto",
        "name_last": "Dupont",
        "email": "toto.dupont@lol.lolilololol",
        "phone": "0214541122",
        "address": 2,
        "role": "private",
        "password": "pass",
        "subscription": 1,
        "subscribed": false
      }).exec(function(err, user) {
        should.not.exist(err);
        should.exist(user);

        User.findOne({id_user: user.id_user}).exec(function(err, user) {
          should.not.exist(err);
          should.exist(user);

          done();
        });
      });
    });

    it ('should not create a user with random role parameter', function(done) {
      User.create({
        "name_first": "Toto",
        "name_last": "Dupont",
        "email": "toto.dupont@lol.lolilololol",
        "phone": "0214541122",
        "address": 2,
        "role": "blablabla",
        "password": "pass",
        "subscription": 1,
        "subscribed": false
      }).exec(function(err, user) {
        should.exist(err);
        should.not.exist(user);

        done();
      });
    });

    it ('should not create a user with an id', function(done) {
      User.create({'id_user': 1, "name_first": "Toto",
      "name_last": "Dupont",
      "email": "toto.dupont@lol.lolilololol",
      "phone": "0214411345",
      "address": 2,
      "role": "private",
      "password": "pass",
      "subscription": 1,
      "subscribed": false}).exec(function(err, user) {
        should.not.exist(err);
        should.exist(user);

        // findOne because user exist even if user already exist. Need to verify if original is not modified.
        User.findOne({id_user: 1}).exec(function(err, user) {
          should.not.exist(err);
          should.exist(user);

          should(user).have.property('phone').not.eql('0214411345');

          done();
        });
      });
    });

    it ('should not create a user without name_first', function(done) {
      User.create({
        "name_last": "Dupont",
        "email": "toto.dupont@lol.lolilololol",
        "phone": "0214541122",
        "address": 2,
        "role": "business",
        "password": "pass",
        "subscription": 1,
        "subscribed": false
      }).exec(function(err, user) {
        should.exist(err);
        should.not.exist(user);

        done();
      });
    });

    it ('should not create a user without name_last', function(done) {
      User.create({
        "name_first": "Toto",
        "email": "toto.dupont@lol.lolilololol",
        "phone": "0214541122",
        "address": 2,
        "role": "business",
        "password": "pass",
        "subscription": 1,
        "subscribed": false
      }).exec(function(err, user) {
        should.exist(err);
        should.not.exist(user);

        done();
      });
    });

    it ('should not create a user without email', function(done) {
      User.create({
        "name_first": "Toto",
        "name_last": "Dupont",
        "phone": "0214541122",
        "address": 2,
        "role": "business",
        "password": "pass",
        "subscription": 1,
        "subscribed": false
      }).exec(function(err, user) {
        should.exist(err);
        should.not.exist(user);

        done();
      });
    });

    it ('should not create a user without phone', function(done) {
      User.create({
        "name_first": "Toto",
        "name_last": "Dupont",
        "email": "toto.dupont@lol.lolilololol",
        "address": 2,
        "role": "business",
        "password": "pass",
        "subscription": 1,
        "subscribed": false
      }).exec(function(err, user) {
        should.exist(err);
        should.not.exist(user);

        done();
      });
    });

    it ('should create a user without address', function(done) {
      User.create({
        "name_first": "Toto",
        "name_last": "Dupont",
        "email": "toto.dupont@lol.lolilololol",
        "phone": "0214541122",
        "role": "business",
        "password": "pass",
        "subscription": 1,
        "subscribed": false
      }).exec(function(err, user) {
        should.not.exist(err);
        should.exist(user);

        done();
      });
    });

    it ('should create a user without role', function(done) {
      User.create({
        "name_first": "Toto",
        "name_last": "Dupont",
        "email": "toto.dupont@lol.lolilololol",
        "phone": "0214541122",
        "address": 2,
        "password": "pass",
        "subscription": 1,
        "subscribed": false
      }).exec(function(err, user) {
        should.not.exist(err);
        should.exist(user);

        should(user).have.property('role').eql('private');

        done();
      });
    });

    it ('should not create a user without password', function(done) {
      User.create({
        "name_first": "Toto",
        "name_last": "Dupont",
        "email": "toto.dupont@lol.lolilololol",
        "phone": "0214541122",
        "address": 2,
        "role": "business",
        "subscription": 1,
        "subscribed": false
      }).exec(function(err, user) {
        should.exist(err);
        should.not.exist(user);

        done();
      });
    });

    it ('should create a user without subscription', function(done) {
      User.create({
        "name_first": "Toto",
        "name_last": "Dupont",
        "email": "toto.dupont@lol.lolilololol",
        "phone": "0214541122",
        "address": 2,
        "role": "business",
        "password": "pass",
        "subscribed": false
      }).exec(function(err, user) {
        should.not.exist(err);
        should.exist(user);

        done();
      });
    });

    it ('should create a user without subscribed', function(done) {
      User.create({
        "name_first": "Toto",
        "name_last": "Dupont",
        "email": "toto.dupont@lol.lolilololol",
        "phone": "0214541122",
        "address": 2,
        "role": "business",
        "password": "pass",
        "subscription": 1
      }).exec(function(err, user) {
        should.not.exist(err);
        should.exist(user);

        should(user).have.property('subscribed').eql(false);

        done();
      });
    });

    it ('should create a user with subscribed', function(done) {
      User.create({
        "name_first": "Toto",
        "name_last": "Dupont",
        "email": "toto.dupont@lol.lolilololol",
        "phone": "0214541122",
        "address": 2,
        "role": "business",
        "password": "pass",
        "subscription": 1,
        "subscribed": true
      }).exec(function(err, user) {
        should.not.exist(err);
        should.exist(user);

        should(user).have.property('subscribed').eql(true);

        done();
      });
    });
  });

  describe('update', function() {
    it ('should update a user', function(done) {
      User.create({
        "id_user": 5454,
        "name_first": "Titi",
        "name_last": "Dug",
        "email": "titi.dug@lol.lolilololol",
        "phone": "0215447889",
        "address": 2,
        "role": "private",
        "password": "pass",
        "subscription": 1,
        "subscribed": false
      }).exec(function(err, user) {
        should.not.exist(err);
        should.exist(user);

        User.findOne({id_user: 5454}).exec(function(err, user) {
          should.not.exist(err);
          should.exist(user);

          User.update({id_user: 5454}, {role: 'admin'}).exec(function(err, user) {
            should.not.exist(err);
            should.exist(user);

            User.findOne({id_user: 5454}).exec(function(err, user) {
              should.not.exist(err);
              should.exist(user);

              should(user).have.property('role').eql('admin');

              done();
            });
          });
        });
      });
    });
  });

  describe('delete', function() {
    it ('should delete a user', function(done) {
      User.create({
        "name_first": "Doe",
        "name_last": "Dug",
        "email": "doe.dug@lol.lolilololol",
        "phone": "0215447889",
        "address": 2,
        "role": "private",
        "password": "pass",
        "subscription": 1,
        "subscribed": false
      }).exec(function(err, user) {
        should.not.exist(err);
        should.exist(user);

        User.findOne({id_user: user.id_user}).exec(function(err, user) {
          should.not.exist(err);
          should.exist(user);

          User.destroy({id_user: user.id_user}).exec(function(err, user) {
            should.not.exist(err);
            should.exist(user);

            User.findOne({id_user: user.id_user}).exec(function(err, user) {
              should.not.exist(err);
              should.not.exist(user);

              done();
            });
          });
        });
      });
    });
  });
});
