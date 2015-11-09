describe('Service', function() {
  it ('should not be empty', function(done) {
    Service.find().exec(function(err, service) {
      service.length.should.not.be.eql(0);
      done();
    });
  });
});
