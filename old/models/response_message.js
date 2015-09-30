var express = require('express');

var responseMessage = {
  send: function(res, message) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(message));
    res.end();
    return this;
  }
};
module.exports = responseMessage;
