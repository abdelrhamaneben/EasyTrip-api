/**
 * ServiceController
 *
 * @description :: Server-side logic for managing Services
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	admin : function (req,res) {
		return res.view("admin/app/index");
	},

	// Search Service with Location and Activities
	initsearch: function (req, res) {
		if(!req.param('location')) {
			res.badRequest("Need location Params !!");
		}
		var geocoder = require('geocoder');
		var request = require('request');
		geocoder.geocode(origin, function ( err, data ) {
			if(err) res.serverError(err);

        	originLocation = data.results[0].geometry.location;
        	req.param("latup",originLocation.lat + 1);
        	req.param("latdown",originLocation.lat - 1);
        	req.param("longright",originLocation.lng + 1);
        	req.param("longleft",originLocation.lng - 1);

        	this.search(req,res);
    	});

	},
	// Search Service with geo interval and Activities
	search: function (req, res) {
		
		if(!req.param('activities') || typeof req.param('activities') !== 'array') {
			res.badRequest("Need list of activities Params !!");
		}
		if(!req.param('latup') || typeof req.param('latup') !== 'number') {
			res.badRequest("Need latup Params !!");
		}
		if(!req.param('latdown') || typeof req.param('latdown') !== 'number') {
			res.badRequest("Need latdown Params !!");
		}
		if(!req.param('longright') || typeof req.param('longright') !== 'number') {
			res.badRequest("Need longright Params !!");
		}
		if(!req.param('longleft') || typeof req.param('longleft') !== 'number') {
			res.badRequest("Need longleft Params !!");
		}
		/*
		Service.find({
			geolati: { '>' : req.param('latdown')},
			geolati: { '<' : req.param('latup')},
			geolong: { '>' : req.param('longleft')},
			geolong: { '<' : req.param('longright')},
			activities : req.param('activities')
		}).exec(function findCB(err, found){
			if(err) res.serverError(err);
		 	res.json(found);
		});*/
		Service.find().exec(function findCB(err, found){
			if(err) res.serverError(err);
		 	res.json(found);
		});
  }
};
