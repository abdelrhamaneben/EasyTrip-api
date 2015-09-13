
/**
 * Module dependencies : nodejs and launch API
 * 
 */

var assert = require('assert');
var response_m = require('../models/response_m');


// mock response Http
var mock_resHttp = {
  status : null,
  message: null,
  writeHead : function (status) {
    this.status = status;
  },
  write: function (message) {
    this.message = message;
  },
  end: function () {

  }
}

// tests
module.exports = {
  'Test Success()': function(beforeExit){
    var message_object = {v:1};
    var res = response_m.success(mock_resHttp,message_object);
    assert.equal(res.status,200);
    assert.equal(res.message, '{"v":1}');
  },

  'Test Success() Error' : function (beforeExit){
    var message_object = '';
    var res = response_m.success(mock_resHttp,message_object);
    assert.equal(res.status,500);
  },

  'Test http Error 500 internal server Error' : function () {
    var message = 'Internal Error';
    var res = response_m.E500(mock_resHttp, message);
    assert.equal(message , res.message);
    assert.equal(500,res.status);
  },

  'Test http Error 403 not access' : function () {
    var message = 'access denied';
    var res = response_m.E403(mock_resHttp, message);
    assert.equal(message , res.message);
    assert.equal(403,res.status);
  }

};
