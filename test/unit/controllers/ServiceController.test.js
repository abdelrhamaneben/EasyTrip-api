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
        .put('/service/1')
        .send({  geolati: 1.2, geolong : 52.1  })
      	.expect(403, done);
    });
    it('BadRequest without every params', function (done) {
      request(sails.hooks.http.app)
        .post('/search')
        .send({   })
        .expect(400, done);
    });
    it('Good request with every params', function (done) {
      request(sails.hooks.http.app)
        .post('/search')
        .send({  activities :  [1,3], latup : 1.43, latdown : 3.45, longright : 3.43,longleft : 43.4})
        .expect(200, done);
    });
    it('BadRequest without activities params', function (done) {
      request(sails.hooks.http.app)
        .post('/search')
        .send({latup : 1.43, latdown : 3.45, longright : 3.43,longleft : 43.4})
        .expect(400, done);
      
    });
    it('BadRequest activities param with Wrong Type (String)', function (done) {
      request(sails.hooks.http.app)
        .post('/search')
        .send({ activities : 'blabla', latup : 1.43, latdown : 3.45, longright : 3.43,longleft : 43.4})
        .expect(400, done);
    });
    it('BadRequest activities param with Wrong Type (Numeric)', function (done) {
      request(sails.hooks.http.app)
        .post('/search')
        .send({ activities : 34, latup : 1.43, latdown : 3.45, longright : 3.43,longleft : 43.4})
        .expect(400, done);
    });
    it('BadRequest without latup param', function (done) {
      request(sails.hooks.http.app)
        .post('/search')
        .send({  activities :  [1,3], latdown : 3.45, longright : 3.43,longleft : 43.4})
        .expect(400, done);
    });
    it('BadRequest without latdown param', function (done) {
      request(sails.hooks.http.app)
        .post('/search')
        .send({  activities :  [1,3], latup : 3.45, longright : 3.43,longleft : 43.4})
        .expect(400, done);
    });
    it('BadRequest without longright param', function (done) {
      request(sails.hooks.http.app)
        .post('/search')
        .send({  activities :  [1,3], latup : 3.45, latdown : 3.43,longleft : 43.4})
        .expect(400, done);
    });
    it('BadRequest without longleft param', function (done) {
      request(sails.hooks.http.app)
        .post('/search')
        .send({  activities :  [1,3], latup : 3.45, latdown : 3.43,longright : 43.4})
        .expect(400, done);
    });
  });

});
