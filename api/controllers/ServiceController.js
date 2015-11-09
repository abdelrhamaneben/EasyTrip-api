/**
 * ServiceController
 *
 * @description :: Server-side logic for managing Services
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	search: function (req, res) {
		// VERIFICATION DES PARAMETRES NECESSAIRES
		if(!req.param('categories')) {
			res.badRequest("Need list of categories Param !!");
		}

		if(!req.param('activities')) {
			res.badRequest("Need activities Params !!");
		}
		var activities 	= req.param('activities');
		var category	= req.param('category');
		var hours		= req.param('hours');
		var location 	= req.param('location');

		//-------------------------------------------------------
		// TO DO

		// POSITION DE L'UTILISATEUR à calculer avec location
		var longitude 	= 454.34;
		var latitude 	= 435.4;
		// KM de RAYON
		var raidus 		= 43;
		//-------------------------------------------------------
		// Execute QUERY
		Service.query("SELECT get_activities_from_posr(" + longitude + "," + latitude + "," + raidus + ")",function(err, results) {
		  if (err) return res.serverError(err);
		  return res.ok(results.rows);
		});
  }
};
