/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    login: function(req, res) {
        console.log('API login controller')


        if (!req.param('email')) {
          return res.badRequest('Need a username');
        }
        if (!req.param('password')) {
          return res.badRequest('Need a password');
        }

        var user;
        var mail = req.param('email');
        var pass = req.param('password')
        console.log('login - mail: ' + mail);
        console.log('login - pass: ' + pass);

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
                return res.notFound();
            } else {

            console.log('User found ! :)');

            if (user.password != pass) {
                console.log('wrong password');
                return res.badRequest('Wrong password, try again');
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
                return res.badRequest('Wrong login, You\'re not allowed to connect');
            }

            req.session.userid = user.id_user;
            req.session.authenticated = true;
            console.log('authentified');
            res.send(200);

            }
        });
    },


    signup: function(req, res) {
        console.log('API signup controller')

        // VERIFICATION DE LA PRESENCE DES PARAMETRES

        if (!req.param('name_first')) return res.badRequest('');
        if (!req.param('name_last')) return res.badRequest('');
        if (!req.param('email')) return res.badRequest('');
        if (!req.param('phone')) return res.badRequest('');

        if (!req.param('role')) return res.badRequest('');
        if (!req.param('password')) return res.badRequest('');
        if (!req.param('subscription')) return res.badRequest('');

        if (!req.param('address_str_nbr')) return res.badRequest('');
        if (!req.param('address_str_name')) return res.badRequest('');
        if (!req.param('address_city')) return res.badRequest('');
        if (!req.param('address_code_zip')) return res.badRequest('');
        if (!req.param('address_country')) return res.badRequest('');

/*
        User.findOne({
                    email:req.param('email'),
                    name_first:req.param('name_first'),
                    name_last:req.param('name_last')
                    // TODO : TO BE CONTINUED

                })

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
                return res.notFound();
            } else {

            console.log('User found ! :)');

            if (user.password != pass) {
                console.log('wrong password');
                return res.badRequest('Wrong password, try again');
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
                return res.badRequest('Wrong login, You\'re not allowed to connect');
            }

            req.session.userid = user.id_user;
            req.session.authenticated = true;
            console.log('authentified');
            res.send(200);

            }
        });
*/}
};
