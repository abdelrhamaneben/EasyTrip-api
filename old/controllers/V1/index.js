var express = require('express');
var response = require('../../models/response_message');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var content = {version: 'v1'};
  res.status(200).send(content);
});

// on récupère toutes les catégories = themes
router.get('/categories', function(req, res) {
  var content = {categories: 'list of categories'};
  res.status(200).send(content);
});

// on récupère tous les services existants dans la base de données
router.get('/services', function(req, res) {
  var content = {services: 'list of services'};
  res.status(200).send(content);
});

// on récupère toutes les activités
router.get('/activities', function(req, res) {
  var content = {activities: 'list of activities'};
  res.status(200).send(content);
});

// on récupère toutes les informations associées à un service
router.get('/services/:id', function(req, res) {
  var content = {service: 'description of one service'};
  res.status(200).send(content);
});

module.exports = router;
