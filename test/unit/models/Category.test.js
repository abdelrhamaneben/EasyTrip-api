var should = require('should');

describe('Category model', function() {
  describe('misc', function() {
    it ('should not be empty', function(done) {
      Category.find().exec(function(err, categories) {
        categories.length.should.not.be.eql(0);

        done();
      });
    });

    it ('should contain a specific category', function(done) {
      Category.findOne({name: 'Sport'}).exec(function(err, category) {
        should(category).exist;
        should(err).not.exist;

        should(category).have.property('description').eql('Pour les amateurs de sport ');

        done();
      });
    });
  });

  describe('create', function() {
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

        // findOne because category exist even if category already exist. Need to verify if original is not modified.
        Category.findOne({id_category: 1}).exec(function(err, category) {
          should.not.exist(err);
          should.exist(category);

          should(category).have.property('name').not.eql('TEST');

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
  });
});
