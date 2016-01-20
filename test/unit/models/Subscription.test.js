var should = require('should');

describe('Subscription model', function() {
  describe('misc', function() {
    it ('should not be empty', function(done) {
      Subscription.find().exec(function(err, subscriptions) {
        subscriptions.length.should.not.be.eql(0);

        done();
      });
    });

    it ('should contain a specific subscription', function(done) {
      Subscription.findOne({id_subscription: 1}).exec(function(err, subscription) {
        should(subscription).exist;
        should(err).not.exist;

        should(subscription).have.property('d_from').eql(new Date("2016-01-01T10:25:06.184Z"));

        done();
      });
    });
  });

  describe('create', function() {
    it ('should create a subscription', function(done) {
      Subscription.create({d_from: new Date("2016-01-01T10:25:06.184Z"), nb_month: 5}).exec(function(err, subscription) {
        should.not.exist(err);
        should.exist(subscription);

        Subscription.findOne({id_subscription: subscription.id_subscription}).exec(function(err, subscription) {
          should.not.exist(err);
          should.exist(subscription);

          done();
        });
      });
    });

    it ('should not create a subscription wich already exist', function(done) {
      Subscription.create({id_subscription: 1, d_from: new Date("2016-01-01T11:41:12.184Z"), nb_month: 42}).exec(function(err, subscription) {
        should.not.exist(err);
        should.exist(subscription);

        // findOne because subscription exist even if category already exist. Need to verify if original is not modified.
        Subscription.findOne({id_subscription: 1}).exec(function(err, subscription) {
          should.not.exist(err);
          should.exist(subscription);

          should(subscription).have.property('d_from').not.eql(new Date("2016-01-01T11:41:12.184Z"));

          done();
        });
      });
    });
  });

  describe('update', function() {
    it ('should update a subscription', function(done) {
      Subscription.create({id_subscription: 654, d_from: new Date("2016-01-01T11:41:12.184Z"), nb_month: 42}).exec(function(err, subscription) {
        should.not.exist(err);
        should.exist(subscription);

        Subscription.findOne({id_subscription: 654}).exec(function(err, subscription) {
          should.not.exist(err);
          should.exist(subscription);

          Subscription.update({id_subscription: 654}, {nb_month: 666}).exec(function(err, subscription) {
            should.not.exist(err);
            should.exist(subscription);

            Subscription.findOne({id_subscription: 654}).exec(function(err, subscription) {
              should.not.exist(err);
              should.exist(subscription);

              should(subscription).have.property('nb_month').eql(666);

              done();
            });
          });
        });
      });
    });
  });

  describe('delete', function() {
    it ('should delete a subscription', function(done) {
      Subscription.create({id_subscription: 457, d_from: new Date("2026-01-01T11:41:12.184Z"), nb_month: 22}).exec(function(err, subscription) {
        should.not.exist(err);
        should.exist(subscription);

        Subscription.findOne({id_subscription: 457}).exec(function(err, subscription) {
          should.not.exist(err);
          should.exist(subscription);

          Subscription.destroy({id_subscription: 457}).exec(function(err, subscription) {
            should.not.exist(err);
            should.exist(subscription);

            Subscription.findOne({id_subscription: 457}).exec(function(err, subscription) {
              should.not.exist(err);
              should.not.exist(subscription);

              done();
            });
          });
        });
      });
    });
  });
});
