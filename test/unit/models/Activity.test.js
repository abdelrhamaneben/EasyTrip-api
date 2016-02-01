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
      Activity.findOne({id_activity: 2}).exec(function(err, activity) {
        should(activity).exist;
        should(err).not.exist;

        should(activity).have.property('name').eql('Football');
        should(activity).have.property('description').eql('Pour les amateurs de football');

        done();
      });
    });
  });

  describe('create', function() {
    it ('should create an activity', function(done) {
      Activity.create({name: 'DEADBEEF'}).exec(function(err, activity) {
        should.not.exist(err);
        should.exist(activity);

        done();
      });
    });

    it ('should not create an activity without parameters', function(done) {
      Activity.create().exec(function(err, activity) {
        should.exist(err);
        should.not.exist(activity);

        done();
      });
    });

    it ('should not create an activity with an id which already exist', function(done) {
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

    it ('should not create an activity without name', function(done) {
      Activity.create().exec(function(err, activity) {
        should.exist(err);
        should.not.exist(activity);

        done();
      });
    });
  });

  describe('update', function() {
    it ('should update an activity', function(done) {
      Activity.create({name: 'BEET'}).exec(function(err, activity) {
        should.not.exist(err);
        should.exist(activity);

        Activity.findOne({id_activity: activity.id_activity}).exec(function(err, activity) {
          should.not.exist(err);
          should.exist(activity);

          Activity.update({id_activity: activity.id_activity}, {name: 'BEEF'}).exec(function(err, activity) {
            should.not.exist(err);
            should.exist(activity);

            done();
          });
        });
      });
    });
  });

  describe('delete', function() {
    it ('should delete an activity', function(done) {
      Activity.create({name: 'BED'}).exec(function(err, activity) {
        should.not.exist(err);
        should.exist(activity);

        Activity.findOne({id_activity: activity.id_activity}).exec(function(err, activity) {
          should.not.exist(err);
          should.exist(activity);

          Activity.destroy({id_activity: activity.id_activity}).exec(function(err, activity) {
            should.not.exist(err);
            should.exist(activity);

            Activity.findOne({id_activity: activity.id_activity}).exec(function(err, activity) {
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
