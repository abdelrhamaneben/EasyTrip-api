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
        .post('/service')
        .send({ name: 'test', description: 'test', categories : '1,3' })
      	.expect(403, done);
    });

    it('should be fail, disable update activity', function (done) {
      request(sails.hooks.http.app)
        .put('/activity')
        .send({ name: 'test', description: 'test', categories : '1,3' })
      	.expect(403, done);
    });

     it('Search Function , need list of activities, and coordonate', function (done) {
      request(sails.hooks.http.app)
        .put('/service/search')
        .send({ latup: 1.1, latdown: 0.34, longright : 2.43, longleft : 1.34,  activities : '1,3' })
        .expect(200, done);
    });

  });

});