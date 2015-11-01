/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 // Controller de test pour l'authentification.

module.exports = {
	restricted: function(req, res) {
		return res.ok("If you can see this you are authenticated!");
	},

	open: function(req, res) {
		return res.ok("This action is open!");
	}
};
