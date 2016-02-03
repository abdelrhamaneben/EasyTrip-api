/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  login: function(req, res) {
      if (!req.param('email')) {
        return res.badRequest('Need a username');
      }
      if (!req.param('password')) {
        return res.badRequest('Need a password');
      }
      var validator = require('validator');

      var user;
      var mail = req.param('email');
      var pass = req.param('password');

      if(!validator.isEmail(mail)) {
         return res.badRequest('Invalid Email');
      }

      User.findOne({email:mail})
          .exec(function (err,user) {
          if(err){
              console.log('error');
          return res.json({
              error:err
          });
          }

          if(user === undefined) {
              console.log('not found');
              console.log(user);
              return res.notFound("Unknown email address");
          } else {

              if (user.password != pass) {
                  console.log('wrong password');
                  return res.badRequest('wrong password, try again');
              }

              if (user.role == 'admin') {
                  req.session.admin = true;
                  console.log('login - is admin');
              } else if (user.role == 'business') {
                  req.session.admin = false;
                  console.log('login - is business');
              } else {
                  console.log('user '+mail+' don\'t exist or simple user');
                  //console.log('But we force connexion');
                  return res.badRequest('you\'re not allowed to connect');
              }

              req.session.userid = user.id_user;
              req.session.authenticated = true;
              res.set('isAdmin', req.session.admin);

              console.log('authentified');
              res.ok(user);

          }
      });
  },

  signup: function(req, res) {

      console.log('API signup controller');

      // VERIFICATION DE LA PRESENCE DES PARAMETRES

      if (!req.param('name_first')) { console.log('param error: 1'); return res.badRequest(''); }
      if (!req.param('name_last')) { console.log('param error: 2'); return res.badRequest(''); }
      if (!req.param('email')) { console.log('param error: 3'); return res.badRequest(''); }
      if (!req.param('phone')) { console.log('param error: 4'); return res.badRequest(''); }

      //if (!req.param('role')) { console.log('param error: 5'); return res.badRequest(''); }
      if (!req.param('password')) { console.log('param error: 6'); return res.badRequest(''); }
      //if (!req.param('subscription')) { console.log('param error: 7'); return res.badRequest(''); }

      if (!req.param('address_str_nbr')) { console.log('param error: 8'); return res.badRequest(''); }
      if (!req.param('address_str_name')) { console.log('param error: 9'); return res.badRequest(''); }
      if (!req.param('address_city')) { console.log('param error: 10'); return res.badRequest(''); }
      if (!req.param('address_code_zip')) { console.log('param error: 11'); return res.badRequest(''); }
      if (!req.param('address_country')) { console.log('param error: 12'); return res.badRequest(''); }

      console.log(req.param('email'));

      User.create({

          email:req.param('email'),
          name_first:req.param('name_first'),
          name_last:req.param('name_last'),
          phone:req.param('phone'),
          role:"business",
          password:req.param('password'),
          subscription:null,
          address:{
              str_nbr:req.param('address_str_nbr'),
              str_name:req.param('address_str_name'),
              city:req.param('address_city'),
              code_zip:req.param('address_code_zip'),
              country:req.param('address_country')
          }

      }).exec(function (err,user) {

              if(err){
                  console.log('error');
                  // return res.serverError('Could not create user');
                  console.log('error while creating user :/');
                  return res.json({
                      error:err
                  });
              }

              console.log('Business user created !');
              return res.send(200);
      });

      //return res.send(200);
  },

  logout: function(req, res) {
      console.log('LOGOUT');
      req.session.userid = null;
      req.session.authenticated = false;
      res.send(200);
  },

  getData: function(req, res) {

    var serviceId = req.param('userId');

    var userData = {};
        userData.name_last = "Abdel";
        userData.name_first = "ledba";
        userData.email = "ed@gmail.com";
        userData.phone = "003245678990";
        userData.address_country = "FR";
        userData.address_code_zip = "59000";
        userData.address_city = "LILLE";
        userData.address_str_name = "rue x";
        userData.address_str_nbr = "42";

    res.ok(userData);
  },

  update: function(req, res) {

      console.log("update user data");

      if (!req.param('name_first')) { console.log('param error: 1'); return res.badRequest(''); }
      if (!req.param('name_last')) { console.log('param error: 2'); return res.badRequest(''); }
      if (!req.param('email')) { console.log('param error: 3'); return res.badRequest(''); }
      if (!req.param('phone')) { console.log('param error: 4'); return res.badRequest(''); }

    res.ok();
  }




};
