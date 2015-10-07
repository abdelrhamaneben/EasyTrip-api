
var request = require('supertest');

describe('CategoryController', function() {

  it('should return List of activity', function (done) {
    request(sails.hooks.http.app)
    .get('/category')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });

  it('should be fail, disable drop categories', function (done) {
    request(sails.hooks.http.app)
    .delete('/category/1')
    .expect(403, done);
  });

  it('should be fail, disable add category', function (done) {
    request(sails.hooks.http.app)
    .post('/category')
    .send({ name: 'test', description: 'test', activities : '1,3' })
    .expect(403, done);
  });

  it('should be fail, disable update category', function (done) {
    request(sails.hooks.http.app)
    .put('/category/1')
    .send({ name: 'test', description: 'test', activities : '1,3' })
    .expect(403, done);
  });

});
