var request = require('supertest');

describe('UserController', function() {

  describe('Test UserController', function() {
    it('should be fail, disable access to user informations', function (done) {
      request(sails.hooks.http.app)
        .get('/user')
        .expect(403, done);
    });

    it('should be fail, disable drop user', function (done) {
      request(sails.hooks.http.app)
        .delete('/user/1')
      	.expect(403, done);
    });

    it('should be fail, disable add user', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({  })
      	.expect(403, done);
    });

    it('should be fail, disable update user', function (done) {
      request(sails.hooks.http.app)
        .put('/user/1')
        .send({ })
      	.expect(403, done);
    });

  });

});
