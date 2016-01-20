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
  // Need authentificated user to execute controller
   // return next();
  if(req.session.authenticated  && req.session.admin) {
    return next();
  }
  // not authentificated so redirect to login
  return res.forbidden('require authentificated Admin');
};
