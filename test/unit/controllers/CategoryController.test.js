
var request = require('supertest');

describe('CategoryController', function() {

  it('should Allow, GET categories', function (done) {
    request(sails.hooks.http.app)
    .get('/category')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

  it('should Not Allow, DELETE categories', function (done) {
    request(sails.hooks.http.app)
    .delete('/category/1')
    .expect(403, done);
  });

  it('should Not Allow, POST category', function (done) {
    request(sails.hooks.http.app)
    .post('/category')
    .send({ name: 'test'})
    .expect(403, done);
  });

  it('should Not Allow, PUT category', function (done) {
    request(sails.hooks.http.app)
    .put('/category/1')
    .send({ name: 'test' })
    .expect(403, done);
  });

});
