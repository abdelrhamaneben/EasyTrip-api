var should = require('should');

describe('Category', function() {
  it ('should not be empty', function(done) {
    Category.find().exec(function(err, categories) {
      categories.length.should.not.be.eql(0);

      done();
    });
  });

  it ('should contain this category', function(done) {
    Category.findOne({name: 'Sport'}).exec(function(err, category) {
      should(category).exist;
      should(err).not.exist;

      category.should.have.property('description').eql('Pour les amateurs de sport ');

      done();
    });
  });

  it ('should not create this category without parameters', function(done) {
    Category.create().exec(function(err, category) {
      should.exist(err);
      should.not.exist(category);

      done();
    });
  });

  it ('should create this category', function(done) {
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

  it ('should not create this category without name', function(done) {
    Category.create().exec(function(err, category) {
      should.exist(err);
      should.not.exist(category);

      done();
    });
  });
});
