var request = require('supertest');

describe('ActivityController', function() {

  describe('Test ActivityController', function() {
    it('should Allow, GET activity', function (done) {
      request(sails.hooks.http.app)
        .get('/activity')
        .expect('Content-Type', /json/)
      	.expect(200, done);
    });

    it('should Not Allow, DELETE activities', function (done) {
      request(sails.hooks.http.app)
        .delete('/activity/1')
      	.expect(403, done);
    });

    it('should Not Allow, POST activity', function (done) {
      request(sails.hooks.http.app)
        .post('/activity')
        .send({ name: 'test' })
      	.expect(403, done);
    });

    it('should Not Allow, PUT activity', function (done) {
      request(sails.hooks.http.app)
        .put('/activity/1')
        .send({ name: 'test' })
      	.expect(403, done);
    });

  });

});
