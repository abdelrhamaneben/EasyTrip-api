var express = require('express');
var response = require('../../models/response_m');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var contenu = {version : 'v1'};
  response.send(res,contenu);
});

module.exports = router;
