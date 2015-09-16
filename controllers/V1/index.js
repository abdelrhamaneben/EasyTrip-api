var express = require('express');
var response = require('../../models/response_m');
var router = express.Router();
var pg = require('pg');
var config = require('../../config/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  var contenu = {version : 'v1'};
  response.send(res,contenu);
});

// on récupère toutes les catégories = themes
router.get('/categories', function(req, res, next) {
    pg.connect(config.connectionString, function(err, client, done) {
      var results = [];
      var query = client.query("SELECT * FROM categories;");
      query.on('row', function(row) {
          results.push(row);
      });
      query.on('end', function() {
          client.end();
          var contenu = {categories : results};
          response.send(res,contenu);
      });
    });
});

// on récupère la liste des activités associées à une catégorie
router.get('/categories/:id/activities', function(req, res, next) {
  pg.connect(config.connectionString, function(err, client, done) {
      var results = [];
      var id_categorie = req.params.id; // on récupère l'id de la catégorie passé en paramétre
      var query = client.query("SELECT * FROM services;"); //s JOIN categorie c ON s. ........ WHERE c.id = 1 ;");
      query.on('row', function(row) {
          results.push(row);
      });
      query.on('end', function() {
          client.end();
          response.send(res,results);
      });
    });
});

// on récupère toutes les informations associées à un service
router.get('/services/:id', function(req, res, next, value){
  pg.connect(config.connectionString, function(err, client, done) {
      var results = [];
      var id_service = req.params.id; // on récupère l'id passé en paramétre
      var query = client.query("SELECT * FROM services s WHERE s.id = \""+id_service+"\";");
      query.on('row', function(row) {
          results.push(row);
      });
      query.on('end', function() {
          client.end();
          response.send(res,results);
      });
    });
});

// on effectue une recherche en fournissant la ville, la categorie, la zone (en min) et l'activité (optionnel)
router.get('/search', function(req, res, next) {
   var contenu = {services : 'list of services'};
   response.send(res,contenu);
});

// on récupère tous les services existants dans la base de données
router.get('/services', function(req, res, next) {
    pg.connect(config.connectionString, function(err, client, done) {
      var results = [];
      var query = client.query("SELECT * FROM services;");
      query.on('row', function(row) {
          results.push(row);
      });
      query.on('end', function() {
          client.end();
          var contenu = {services : results};
          response.send(res,contenu);
      });
    });
});

// on récupère toutes les activités 
router.get('/activities', function(req, res, next) {
    pg.connect(config.connectionString, function(err, client, done) {
      var results = [];
      var query = client.query("SELECT * FROM activite;");
      query.on('row', function(row) {
          results.push(row);
      });
      query.on('end', function() {
          client.end();
          var contenu = {activities : results};
          response.send(res,contenu);
      });
      
      if(err) {
        var error = { error : "No data" };
        res.writeHead(444, {"Content-Type": 'application/json'});
        res.write(JSON.stringify(error));
        res.end();        
      }
    });
});


module.exports = router;
