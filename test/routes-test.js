
/**
 * Module dependencies : nodejs and launch API
 *
 */

//var http = require('http');
//var path = require('path');

var assert = require('assert');
var request = require('supertest');
var server = require('../app');

describe('Routing', function() {
  describe('/', function() {
    it('responds to /', function testSlash(done) {
      request(server)
        .get('/')
        .expect(200, done);
    });
    it('404 everything else', function testPath(done) {
      request(server)
        .get('/foo/bar')
        .expect(404, done);
    });
  });
});

/*module.exports = {
  'test Default URL /': function(beforeExit) {
    assert.response(server, {
      url: '/',
      method: 'GET'
    },{
      body: '{CurrentVersion : "hello"}',
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(res) {
      assert.ok(res);
    });
  },
  // ERROR 404
  'test Error 404': function(beforeExit) {
    assert.response(server, {
      url: '/failURL',
      method: 'GET'
    },{
      status: 404
    });
  },
  'test /v1': function(beforeExit) {
    assert.response(server, {
      url: '/v1',
      method: 'GET'
    },{
      body: '{"version":"v1"}',
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(res) {
      assert.ok(res);
    });
  },
  // should get all categories
  'test /v1/categories': function(beforeExit) {
    assert.response(server, {
      url: '/v1/categories',
      method: 'GET'
    },{
      body: /^\{(\s)?categories(\s)?:(\s)?\[/ ,
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(res) {
      assert.ok(res);
    });
  },
  // should get activity of the first categories
  'test /categories/:id/activities': function(beforeExit) {
    assert.response(server, {
      url: '/categories/1/activities',
      method: 'GET'
    },{
      body: /^\{(\s)?activities(\s)?:(\s)?\[/ ,
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(res) {
      assert.ok(res);
    });
  },
  // should get all activities
  'test /v1/activities': function(beforeExit){
    assert.response(server, {
      url: '/v1/activities',
      method: 'GET'
    },{
      body: /^\{(\s)?activities(\s)?:(\s)?\[/ ,
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(res){
      assert.ok(res);
    });
  },
  // should get all services
  'test /v1/services': function(beforeExit){
    assert.response(server, {
      url: '/v1/services',
      method: 'GET'
    },{
      body: /^\{(\s)?services(\s)?:(\s)?\[/ ,
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(res){
      assert.ok(res);
    });
  }
};*/
