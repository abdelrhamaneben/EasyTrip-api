var request = require('supertest');

describe('ActivityController', function() {

  describe('Test ActivityController', function() {
    it('should return List of activity', function (done) {
      request(sails.hooks.http.app)
        .get('/activity')
        .expect('Content-Type', /json/)
      	.expect(200, done);
    });

    it('should be fail, disable drop activities', function (done) {
      request(sails.hooks.http.app)
        .delete('/activity/1')
      	.expect(403, done);
    });

    it('should be fail, disable add activity', function (done) {
      request(sails.hooks.http.app)
        .post('/activity')
        .send({ name: 'test', description: 'test', categories : '1,3' })
      	.expect(403, done);
    });

    it('should be fail, disable update activity', function (done) {
      request(sails.hooks.http.app)
        .put('/activity')
        .send({ name: 'test', description: 'test', categories : '1,3' })
      	.expect(403, done);
    });

  });

});