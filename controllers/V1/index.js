var express = require('express');
var response = require('../../models/response_m');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var contenu = {version : 'v1'};
  response.send(res,contenu);
});



// on récupère toutes les catégories = themes
router.get('/categories', function (req, res, next) {
   var contenu = {categories : 'list of categories'};
   response.send(res,contenu);
});

// on récupère tous les services existants dans la base de données
router.get('/services', function (req, res, next) {
   var contenu = {services : 'list of services'};
   response.send(res,contenu);
});

// on récupère toutes les activités 
router.get('/activities', function (req, res, next) {
   var contenu = {activities : 'list of activities'};
   response.send(res,contenu);
});

// on récupère toutes les informations associées à un service
router.get('/services/:id', function (req, res, next){
	var contenu = {service : 'description of one service'};
    response.send(res,contenu);
});

module.exports = router;
