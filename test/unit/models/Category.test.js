describe('Category', function() {
  it ('should not be empty', function(done) {
    Category.find().exec(function(err, category) {
      category.length.should.not.be.eql(0);

      done();
    });
  });
});
