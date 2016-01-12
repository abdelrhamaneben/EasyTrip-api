var request = require('supertest');
var request = require('supertest');

describe('AddressController', function() {

  describe('Test AddressController', function() {
    it('should Not Allow, GET address', function (done) {
      request(sails.hooks.http.app)
        .get('/address')
      	.expect(403, done);
    });

    it('should Not Allow, DELETE address', function (done) {
      request(sails.hooks.http.app)
        .delete('/address/1')
      	.expect(403, done);
    });

    it('should Not Allow, POST address', function (done) {
      request(sails.hooks.http.app)
        .post('/address')
        .send({  })
      	.expect(403, done);
    });

    it('should Not Allow, PUT address', function (done) {
      request(sails.hooks.http.app)
        .put('/address/1')
        .send({  })
      	.expect(403, done);
    });

  });

});
