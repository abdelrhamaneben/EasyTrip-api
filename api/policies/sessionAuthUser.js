/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
module.exports = function(req, res, next) {
	return next();
  // Need authentificated user to execute controller
  if(req.session.authenticated) {
    return next();
  }
  // not authentificated so redirect to login
  return  res.forbidden('require authentificated');
};
