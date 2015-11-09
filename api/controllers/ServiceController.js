/**
 * ServiceController
 *
 * @description :: Server-side logic for managing Services
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	
	search: function (req, res) {
		// VERIFICATION DES PARAMETRES NECESSAIRES
		
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

		Service.find({
			geolati: { '>' : req.param('latdown')},
			geolati: { '<' : req.param('latup')},
			geolong: { '>' : req.param('longleft')},
			geolong: { '<' : req.param('longright')},
			activities : req.param('activities')
		}).exec(function findCB(err, found){
			if(err) res.serverError(err);
		 	res.json(found);
		});
		
  }
};
