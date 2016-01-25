var request = require('supertest');

describe('JudgementController', function() {

  describe('Test JudgementController', function() {
    it('Get Index', function (done) {
      request(sails.hooks.http.app)
        .get('/judgement')
        .expect(200, done);
    });
    it('should Not Allow, DELETE Judgement', function (done) {
      request(sails.hooks.http.app)
        .delete('/judgement/1')
      	.expect(403, done);
    });
    it('should Not Allow, POST Judgement', function (done) {
      request(sails.hooks.http.app)
        .post('/judgement/1')
        .send({ user: 4, service : 2, judgement : 'blabla' })
      	.expect(403, done);
    });
    it('should Not Allow, PUT Judgement', function (done) {
      request(sails.hooks.http.app)
        .put('/judgement/1')
        .send({ user: 4, service : 2,  })
      	.expect(403, done);
    });
    });
});
