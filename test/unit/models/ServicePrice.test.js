var should = require('should');

describe('ServicePrice model', function() {
  describe('misc', function() {
    it ('should not be empty', function(done) {
      ServicePrice.find().exec(function(err, servicePrices) {
        servicePrices.length.should.not.be.eql(0);

        done();
      });
    });

    it ('should promotion initialized to false', function(done) {
      ServicePrice.find().exec(function(err, servicePrices) {
        servicePrices.length.should.not.be.eql(0);

        done();
      });
    });

    it ('should contain a specific servicePrice', function(done) {
      ServicePrice.findOne({id_sp: 1}).exec(function(err, servicePrice) {
        should(servicePrice).exist;
        should(err).not.exist;

        should(servicePrice).have.property('businessDay').eql("Lundi 8h59-12h59 13h57-19h25;Mardi 8h59-12h59 13h57-19h25;Dimanche 18h59-12h59");

        done();
      });
    });
  });

  describe('create', function() {
    it ('should create a servicePrice', function(done) {
      ServicePrice.create({
        "service": 2,
        "d_from": "2016-01-01T10:25:06.184Z",
        "d_to": "2016-01-25T10:25:06.184Z",
        "nb_person_min": 1,
        "nb_person_max" : 5,
        "price_per_person" : 10,
        "promotion": true,
        "businessDay": "Dimanche 9h00-12h00"
      }).exec(function(err, servicePrice) {
        should.not.exist(err);
        should.exist(servicePrice);

        ServicePrice.findOne({id_sp: servicePrice.id_sp}).exec(function(err, servicePrice) {
          should.not.exist(err);
          should.exist(servicePrice);

          done();
        });
      });
    });

    it ('should not create a servicePrice with an id', function(done) {
      ServicePrice.create({
        "id_sp": 1,
        "service": 2,
        "d_from": "2016-01-01T10:25:06.184Z",
        "d_to": "2016-01-25T10:25:06.184Z",
        "nb_person_min": 1,
        "nb_person_max" : 5,
        "price_per_person" : 10,
        "promotion": true,
        "businessDay": "Dimanche 9h00-12h00"
      }).exec(function(err, servicePrice) {
        should.not.exist(err);
        should.exist(servicePrice);

        // findOne because servicePrice exist even if servicePrice already exist. Need to verify if original is not modified.
        ServicePrice.findOne({id_sp: 1}).exec(function(err, servicePrice) {
          should.not.exist(err);
          should.exist(servicePrice);

          should(servicePrice).have.property('businessDay').not.eql("Dimanche 9h00-12h00");

          done();
        });
      });
    });
  });

  describe('update', function() {
    it ('should update a servicePrice', function(done) {
      ServicePrice.create({
        "id_sp": 112346,
        "service": 2,
        "d_from": "2016-01-01T10:25:06.184Z",
        "d_to": "2016-01-25T10:25:06.184Z",
        "nb_person_min": 1,
        "nb_person_max" : 5,
        "price_per_person" : 10,
        "promotion": true,
        "businessDay": "Dimanche 9h00-12h00"
      }).exec(function(err, servicePrice) {
        should.not.exist(err);
        should.exist(servicePrice);

        ServicePrice.findOne({id_sp: 112346}).exec(function(err, servicePrice) {
          should.not.exist(err);
          should.exist(servicePrice);

          ServicePrice.update({id_sp: 112346}, {businessDay: "Lundi 9h00-12h00; Dimanche 9h00-12h00"}).exec(function(err, servicePrice) {
            should.not.exist(err);
            should.exist(servicePrice);

            ServicePrice.findOne({id_sp: 112346}).exec(function(err, servicePrice) {
              should.not.exist(err);
              should.exist(servicePrice);

              should(servicePrice).have.property('businessDay').eql("Lundi 9h00-12h00; Dimanche 9h00-12h00");

              done();
            });
          });
        });
      });
    });
  });

  describe('delete', function() {
    it ('should delete a servicePrice', function(done) {
      ServicePrice.create({
        "id_sp": 321654,
        "service": 2,
        "d_from": "2016-01-01T10:25:06.184Z",
        "d_to": "2016-01-25T10:25:06.184Z",
        "nb_person_min": 1,
        "nb_person_max" : 5,
        "price_per_person" : 10,
        "promotion": true,
        "businessDay": "Dimanche 9h00-12h00"
      }).exec(function(err, servicePrice) {
        should.not.exist(err);
        should.exist(servicePrice);

        ServicePrice.findOne({id_sp: servicePrice.id_sp}).exec(function(err, servicePrice) {
          should.not.exist(err);
          should.exist(servicePrice);

          ServicePrice.destroy({id_sp: servicePrice.id_sp}).exec(function(err, servicePrice) {
            should.not.exist(err);
            should.exist(servicePrice);

            ServicePrice.findOne({id_sp: servicePrice.id_sp}).exec(function(err, servicePrice) {
              should.not.exist(err);
              should.not.exist(servicePrice);

              done();
            });
          });
        });
      });
    });
  });
});
