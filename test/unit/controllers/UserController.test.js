var request = require('supertest');

describe('UserController', function() {

  describe('Test UserController', function() {
    it('should Not Allow, GET user', function (done) {
      request(sails.hooks.http.app)
        .get('/user')
        .expect(403, done);
    });

    it('should Not Allow, DELETE user', function (done) {
      request(sails.hooks.http.app)
        .delete('/user/1')
      	.expect(403, done);
    });

    it('should Not Allow, POST user', function (done) {
      request(sails.hooks.http.app)
        .post('/user')
        .send({  })
      	.expect(403, done);
    });

    it('should Not Allow, PUT user', function (done) {
      request(sails.hooks.http.app)
        .put('/user/1')
        .send({ })
      	.expect(403, done);
    });

     it('Bad Request on login whitout params', function (done) {
      request(sails.hooks.http.app)
        .get('/user/login')
        .send({ })
        .expect(400, done);
    });
    it('Bad Request on login whitout email param', function (done) {
      request(sails.hooks.http.app)
        .post('/user/login')
        .send({ password : 'blablabla'})
        .expect(400, done);
    });

     it('Bad Request on login whitout password param', function (done) {
      request(sails.hooks.http.app)
        .post('/user/login')
        .send({ email : 'abdelrhamane@hotmail.fr'})
        .expect(400, done);
    });

     it('Bad Request on invalid email', function (done) {
      request(sails.hooks.http.app)
        .post('/user/login')
        .send({ email : 'bad email', password : 'kscdj'})
        .expect(400, done);
    });

  });

});
