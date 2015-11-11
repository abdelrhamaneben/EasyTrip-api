/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
	login: function (req,res)
    {
        res.view();
    },

		passport_local: function(req, res)
    {
        passport.authenticate('local', function(err, user, info)
        {
            if ((err) || (!user))
            {
                res.redirect('/user/login');
                return;
            }

            req.logIn(user, function(err)
            {
                if (err)
                {
                    res.redirect('/user/login');
                    return;
                }

                res.redirect('/');
                return;
            });
        })(req, res);
    },

    logout: function (req,res)
    {
        req.logout();
        res.redirect('/');
    },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}
};
