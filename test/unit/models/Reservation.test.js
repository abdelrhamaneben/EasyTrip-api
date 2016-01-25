var should = require('should');

describe('Reservation model', function() {
  describe('misc', function() {
    it ('should not be empty', function(done) {
      Reservation.find().exec(function(err, reservations) {
        reservations.length.should.not.be.eql(0);

        done();
      });
    });

    it ('should contain a specific reservation', function(done) {
      Reservation.findOne({id_res: 1}).exec(function(err, reservation) {
        should(reservation).exist;
        should(err).not.exist;

        should(reservation).have.property('nb_person').eql(3);

        done();
      });
    });
  });

  describe('create', function() {
    it ('should create a reservation', function(done) {
      Reservation.create({
        "customer": 1,
        "price": 1,
        "d_from": "2016-01-11T10:25:06.184Z",
        "d_to": "2016-02-11T10:25:06.184Z",
        "nb_person": 3,
        "valid": true
      }).exec(function(err, reservation) {
        should.not.exist(err);
        should.exist(reservation);

        Reservation.findOne({id_res: reservation.id_res}).exec(function(err, reservation) {
          should.not.exist(err);
          should.exist(reservation);

          done();
        });
      });
    });

    it ('should not create a reservation with an id', function(done) {
      Reservation.create({
        "customer": 1,
        "price": 1,
        "d_from": "2016-01-11T10:25:06.184Z",
        "d_to": "2016-02-11T10:25:06.184Z",
        "nb_person": 5,
        "valid": true,
        "id_res": 1
      }).exec(function(err, reservation) {
        should.not.exist(err);
        should.exist(reservation);

        // findOne because reservation exist even if reservation already exist. Need to verify if original is not modified.
        Reservation.findOne({id_res: 1}).exec(function(err, reservation) {
          should.not.exist(err);
          should.exist(reservation);

          should(reservation).have.property('nb_person').not.eql(5);

          done();
        });
      });
    });

    it ('should not create a reservation without nb_person', function(done) {
      Reservation.create({
        "customer": 1,
        "price": 1,
        "d_from": "2016-01-11T10:25:06.184Z",
        "d_to": "2016-02-11T10:25:06.184Z",
        "valid": true,
        "id_res": 1
      }).exec(function(err, reservation) {
        should.exist(err);
        should.not.exist(reservation);

        done();
      });
    });

    it ('should not create a reservation without d_from', function(done) {
      Reservation.create({
        "customer": 1,
        "price": 1,
        "d_to": "2016-02-11T10:25:06.184Z",
        "nb_person": 5,
        "valid": true,
        "id_res": 1
      }).exec(function(err, reservation) {
        should.exist(err);
        should.not.exist(reservation);

        done();
      });
    });
  });

  describe('update', function() {
    it ('should update a reservation', function(done) {
      Reservation.create({
        "customer": 1,
        "price": 1,
        "d_from": "2016-01-11T10:25:06.184Z",
        "d_to": "2016-02-11T10:25:06.184Z",
        "nb_person": 5,
        "valid": true,
        "id_res": 1456
      }).exec(function(err, reservation) {
        should.not.exist(err);
        should.exist(reservation);

        Reservation.findOne({id_res: 1456}).exec(function(err, reservation) {
          should.not.exist(err);
          should.exist(reservation);

          Reservation.update({id_res: 1456}, {nb_person: 15}).exec(function(err, reservation) {
            should.not.exist(err);
            should.exist(reservation);

            Reservation.findOne({id_res: 1456}).exec(function(err, reservation) {
              should.not.exist(err);
              should.exist(reservation);

              should(reservation).have.property('nb_person').eql(15);

              done();
            });
          });
        });
      });
    });
  });

  describe('delete', function() {
    it ('should delete a reservation', function(done) {
      Reservation.create({
        "customer": 1,
        "price": 1,
        "d_from": "2016-01-11T10:25:06.184Z",
        "d_to": "2016-02-11T10:25:06.184Z",
        "nb_person": 5,
        "valid": true,
        "id_res": 132456
      }).exec(function(err, reservation) {
        should.not.exist(err);
        should.exist(reservation);

        Reservation.findOne({id_res: reservation.id_res}).exec(function(err, reservation) {
          should.not.exist(err);
          should.exist(reservation);

          Reservation.destroy({id_res: reservation.id_res}).exec(function(err, reservation) {
            should.not.exist(err);
            should.exist(reservation);

            Reservation.findOne({id_res: reservation.id_res}).exec(function(err, reservation) {
              should.not.exist(err);
              should.not.exist(reservation);

              done();
            });
          });
        });
      });
    });
  });
});
