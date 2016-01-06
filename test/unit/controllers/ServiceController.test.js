var request = require('supertest');

describe('ServiceController', function() {

  describe('Test ServiceController', function() {
    it('should  Allow, GET services', function (done) {
      request(sails.hooks.http.app)
        .get('/service')
        .expect('Content-Type', /json/)
      	.expect(200, done);
    });

    it('should Not Allow, DELETE service', function (done) {
      request(sails.hooks.http.app)
        .delete('/service/1')
      	.expect(403, done);
    });

    it('should Not Allow, POST service', function (done) {
      request(sails.hooks.http.app)
        .post('/service/1')
        .send({ geolati: 1.2, geolong : 52.1 })
      	.expect(403, done);
    });

    it('should Not Allow, PUT activity', function (done) {
      request(sails.hooks.http.app)
        .put('/activity/1')
        .send({  geolati: 1.2, geolong : 52.1  })
      	.expect(403, done);
    });
  });

});
