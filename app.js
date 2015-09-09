var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var v1 = require('./controllers/V1/index');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/v1', v1);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;


// MERDE DE slimane

var sqlite = require('sqlite3').verbose();

// connection to database
function connect_to_database(){
  var db = new sqlite.Database('../../../../dal/db_sqlite/db_EasyTrip_v1.sqlite');
  return db ;
}

// close connection to database
function close_connection(db){
  db.close(); 
}

// select informations of all themes
function get_all_themes(){
  var res = [];
  db.all("SELECT id_theme, nom, description FROM Theme", function(err, rows) {  
          rows.forEach(function (row) {  
              res.push({
                "id_theme" : row.id_theme,
                "name" : row.nom,
                "description" : row.description
              });
          })  
  });
  return res;   
}

// select informations of all activities
function get_all_activities(){
  var res = [];
  db.all("SELECT id_activite, nom, description FROM Activite", function(err, rows) {  
          rows.forEach(function (row) {  
              res.push({
                "id_activite" : row.id_activite,
                "name" : row.nom,
                "description" : row.description
              });
          })  
  });
  return res;   
}

// select informations of all activities which correspond to one theme
function get_activities_from_theme(id_theme){
  var res = [];
  db.all("SELECT a.id_activite, a.nom, a.description FROM Activite a 
              JOIN Theme_Activite ta ON a.id_activite = ta.id_activite
              JOIN Theme t ON t.id_theme = ta.id_theme
              WHERE t.id_theme = " + id_theme, function(err, rows) {  
          rows.forEach(function (row) {  
              res.push({
                "id_activite" : row.id_activite,
                "name" : row.nom,
                "description" : row.description
              });
          })  
  });
  return res;   
}


// select informations of all services
function get_all_services(){
  var res = [];
  db.all("SELECT id_service, id_geo, id_ue, nom, description, d_creation, d_lastUpdate, id_adresse FROM Services", function(err, rows) {  
          rows.forEach(function (row) {  
              res.push({
                "id_service" : row.id_activite,
                "id_geo" : row.id_geo,
                "id_ue" : row.id_ue,                
                "name" : row.nom,
                "description" : row.description,
                "d_creation" : row.d_creation,
          "d_lastUpdate" : row.d_lastUpdate,
                "id_adresse" : row.id_adresse
              });
          })  
  });
  return res;   
}


// select informations of all services which correspond to one activity
function get_services_from_activity(id_activite){
  var res = [];
  db.all("SELECT s.id_service, s.id_geo, s.id_ue, s.nom, s.description, s.d_creation, s.d_lastUpdate, s.id_adresse FROM Services s 
              JOIN Service_Activite sa ON s.id_service = sa.id_service
              JOIN Activite a ON a.id_activite = sa.id_activite
              WHERE a.id_activite = " + id_activite, function(err, rows) {  
          rows.forEach(function (row) {  
              res.push({
                "id_service" : row.id_activite,
                "id_geo" : row.id_geo,
                "id_ue" : row.id_ue,                
                "name" : row.nom,
                "description" : row.description,
                "d_creation" : row.d_creation,
          "d_lastUpdate" : row.d_lastUpdate,
                "id_adresse" : row.id_adresse
              });
          })  
  });
  return res;   
}

