/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  login: function(req, res) {
    console.log('API login controller')

    console.log('body: '+req.body);
    console.log('all param: ' +req.params.all());

    /*if (!req.param('mail')) {
      return res.badRequest('Need a username');
    }

    if (!req.param('pwd')) {
      return res.badRequest('Need a password');
    }*/
    var mail = req.param('email');
    console.log('login - mail: ' + mail);

    User.find({email:mail})
        .exec(function (err,user) {
          if(err){
              console.log('error');
            return res.json({
              error:err
            });
          }

          if(user === undefined) {
            console.log('not found');
            return res.notFound();
          } else {
            console.log('not found');
            if (user.role == 'admin') {
                req.session.admin = true;
                console.log('login - is admin');
            } else if (user.role == 'business') {
                req.session.admin = false;
                console.log('login - is business');
            } else {
                console.log('user '+mail+' don\'t exist');
                // TODO
                console.log('But we force connexion');
                //return res.badRequest('Wrong login, You\'re not allowed to connect');
            }
            req.session.userid = user.id_user;
            req.session.authenticated = true;
            console.log('authentified');
            res.send(200);
          }
        });
  },

};
