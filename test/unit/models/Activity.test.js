var should = require('should');

describe('Activity model', function() {
  describe('misc', function() {
    it ('should not be empty', function(done) {
      Activity.find().exec(function(err, activities) {
        activities.length.should.not.be.eql(0);

        done();
      });
    });

    it ('should contain a specific activity', function(done) {
      Activity.findOne({name: 'Football'}).exec(function(err, activity) {
        should(activity).exist;
        should(err).not.exist;

        should(activity).have.property('description').eql('Pour les amateurs de football');

        done();
      });
    });
  });

  describe('create', function() {
    it ('should create a activity', function(done) {
      Activity.create({name: "DEADBEEF"}).exec(function(err, activity) {
        should.not.exist(err);
        should.exist(activity);

        Activity.findOne({name: 'DEADBEEF'}).exec(function(err, activity) {
          should.not.exist(err);
          should.exist(activity);

          done();
        });
      });
    });

    it ('should not create a activity without parameters', function(done) {
      Activity.create().exec(function(err, activity) {
        should.exist(err);
        should.not.exist(activity);

        done();
      });
    });

    it ('should not create a activity with an id', function(done) {
      Activity.create({id_activity: 1, name: 'TEST'}).exec(function(err, activity) {
        should.not.exist(err);
        should.exist(activity);

        Activity.findOne({id_activity: 1}).exec(function(err, activity) {
          should.not.exist(err);
          should.exist(activity);

          should(activity).have.property('name').not.equal('TEST');

          done();
        });
      });
    });

    it ('should not create a activity without name', function(done) {
      Activity.create().exec(function(err, activity) {
        should.exist(err);
        should.not.exist(activity);

        done();
      });
    });
  });

  describe('update', function() {
    it ('should update a activity', function(done) {
      Activity.create({name: "BEET"}).exec(function(err, activity) {
        should.not.exist(err);
        should.exist(activity);

        Activity.findOne({name: 'BEET'}).exec(function(err, activity) {
          should.not.exist(err);
          should.exist(activity);

          Activity.update({name: 'BEET'}, {name: 'BEEF'}).exec(function(err, activity) {
            should.not.exist(err);
            should.exist(activity);

            Activity.findOne({name: 'BEET'}).exec(function(err, activity) {
              should.not.exist(err);
              should.not.exist(activity);

              Activity.findOne({name: 'BEEF'}).exec(function(err, activity) {
                should.not.exist(err);
                should.exist(activity);

                done();
              });
            });
          });
        });
      });
    });
  });

  describe('delete', function() {
    it ('should delete a activity', function(done) {
      Activity.create({name: "BED"}).exec(function(err, activity) {
        should.not.exist(err);
        should.exist(activity);

        Activity.findOne({name: 'BED'}).exec(function(err, activity) {
          should.not.exist(err);
          should.exist(activity);

          Activity.destroy({name: "BED"}).exec(function(err, activity) {
            should.not.exist(err);
            should.exist(activity);

            Activity.findOne({name: 'BED'}).exec(function(err, activity) {
              should.not.exist(err);
              should.not.exist(activity);

              done();
            });
          });
        });
      });
    });
  });
});
