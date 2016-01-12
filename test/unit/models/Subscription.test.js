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

        should(subscription).have.property('d_from').eql('2016-01-01T10:25:06.184Z');

        done();
      });
    });
  });

  /*describe('create', function() {
    it ('should create a category', function(done) {
      Category.create({name: "DEADBEEF"}).exec(function(err, category) {
        should.not.exist(err);
        should.exist(category);

        Category.findOne({name: 'DEADBEEF'}).exec(function(err, category) {
          should.not.exist(err);
          should.exist(category);

          done();
        });
      });
    });

    it ('should not create a category without parameters', function(done) {
      Category.create().exec(function(err, category) {
        should.exist(err);
        should.not.exist(category);

        done();
      });
    });

    it ('should not create a category with an id', function(done) {
      Category.create({id_category: 1, name: 'TEST'}).exec(function(err, category) {
        should.not.exist(err);
        should.exist(category);

        Category.findOne({id_category: 1}).exec(function(err, category) {
          should.not.exist(err);
          should.exist(category);

          should(category).have.property('name').not.equal('TEST');

          done();
        });
      });
    });

    it ('should not create a category without name', function(done) {
      Category.create().exec(function(err, category) {
        should.exist(err);
        should.not.exist(category);

        done();
      });
    });
  });

  describe('update', function() {
    it ('should update a category', function(done) {
      Category.create({name: "BEET"}).exec(function(err, category) {
        should.not.exist(err);
        should.exist(category);

        Category.findOne({name: 'BEET'}).exec(function(err, category) {
          should.not.exist(err);
          should.exist(category);

          Category.update({name: 'BEET'}, {name: 'BEEF'}).exec(function(err, category) {
            should.not.exist(err);
            should.exist(category);

            Category.findOne({name: 'BEET'}).exec(function(err, category) {
              should.not.exist(err);
              should.not.exist(category);

              Category.findOne({name: 'BEEF'}).exec(function(err, category) {
                should.not.exist(err);
                should.exist(category);

                done();
              });
            });
          });
        });
      });
    });
  });

  describe('delete', function() {
    it ('should delete a category', function(done) {
      Category.create({name: "BED"}).exec(function(err, category) {
        should.not.exist(err);
        should.exist(category);

        Category.findOne({name: 'BED'}).exec(function(err, category) {
          should.not.exist(err);
          should.exist(category);

          Category.destroy({name: "BED"}).exec(function(err, category) {
            should.not.exist(err);
            should.exist(category);

            Category.findOne({name: 'BED'}).exec(function(err, category) {
              should.not.exist(err);
              should.not.exist(category);

              done();
            });
          });
        });
      });
    });
  });*/
});
