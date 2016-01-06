var request = require('supertest');

describe('ServiceController', function() {

  describe('Test ServiceController', function() {
    it('should return List of service', function (done) {
      request(sails.hooks.http.app)
        .get('/service')
        .expect('Content-Type', /json/)
      	.expect(200, done);
    });

    it('should be fail, disable drop service', function (done) {
      request(sails.hooks.http.app)
        .delete('/service/1')
      	.expect(403, done);
    });

    it('should be fail, disable add service', function (done) {
      request(sails.hooks.http.app)
        .post('/service/1')
        .send({ geolati: 1.2, geolong : 52.1 })
      	.expect(403, done);
    });

    it('should be fail, disable update activity', function (done) {
      request(sails.hooks.http.app)
        .put('/activity/1')
        .send({  geolati: 1.2, geolong : 52.1  })
      	.expect(403, done);
    });
  });

});
