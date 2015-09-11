
/**
 * Module dependencies : nodejs and launch API
 * 
 */

var assert = require('assert') ,
    http = require('http'),
    path = require('path');
var server = require('../app');


module.exports = {
  'test Default URL /': function(beforeExit){
    assert.response(server, {
      url: '/',
      method: 'GET'
    },{
      body: '{CurrentVersion : "hello"}',
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(res){
      assert.ok(res);
    });
  },
   // ERROR 404
  'test Error 404': function(beforeExit){
    assert.response(server, {
      url: '/failURL',
      method: 'GET'
    },{
      status: 404
    });
  },
  'test /v1': function(beforeExit){
    assert.response(server, {
      url: '/v1',
      method: 'GET'
    },{
      body: '{"version":"v1"}',
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(res){
      assert.ok(res);
    });
  },
    // should get all categories
  'test /v1/categories': function(beforeExit){
    assert.response(server, {
      url: '/v1/categories',
      method: 'GET'
    },{
      body: /^\{(\s)?categories(\s)?:(\s)?\[/ ,
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }, function(res){
      assert.ok(res);
    });
  },
  // should get activity of the first categories
  'test /categories/:id/activities': function(beforeExit){
    assert.response(server, {
      url: '/categories/1/activities',
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
  }
};
