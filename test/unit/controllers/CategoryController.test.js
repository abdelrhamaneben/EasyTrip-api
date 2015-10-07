
var request = require('supertest');

describe('CategoryController', function() {
  describe('#index()', function() {
    it('should return success', function (done) {
      request(sails.hooks.http.app)
        .get('/category')
        .expect(200, done);
    });
  });
});
