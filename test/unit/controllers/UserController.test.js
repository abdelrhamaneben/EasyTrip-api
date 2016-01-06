var request = require('supertest');

describe('UserController', function() {

  describe('Test ActivityController', function() {
    it('should return List of user', function (done) {
      request(sails.hooks.http.app)
        .get('/user')
        .expect('Content-Type', /json/)
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
        .send({ name_first: 'test', name_last: 'test' })
      	.expect(403, done);
    });

    it('should be fail, disable update user', function (done) {
      request(sails.hooks.http.app)
        .put('/user')
        .send({ name_first: 'test', name_last: 'test'})
      	.expect(403, done);
    });

  });

});
