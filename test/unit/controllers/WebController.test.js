var request = require('supertest');

describe('WebController', function() {

  describe('Test WebController', function() {
    it('Get Index', function (done) {
      request(sails.hooks.http.app)
        .get('/')
        .expect(200, done);
    });

    it('Bad Request without Service(id) param', function (done) {
      request(sails.hooks.http.app)
        .post('/feature')
        .expect(400, done);

    });
    it('Get feature', function (done) {
      request(sails.hooks.http.app)
        .post('/feature')
        .send({ service : 1})
        .expect(200, done);

      });
     it('Bad Request', function (done) {
      request(sails.hooks.http.app)
        .get('/result')
        .send({ })
        .expect(400, done);

      });
     it('category not found', function (done) {
      request(sails.hooks.http.app)
        .post('/result')
        .send({ location : 'lille', category : '345324'})
        .expect(500,done);
      });
    });
});
