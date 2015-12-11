
module.exports = {

  index: function(req, res) {
    res.redirect('admin/app/index.html');
  },

  auth: function(req, res, next) {
    console.log('Admin authentification');

      if (req.session.authenticated){
        console.log('auth: ok');
        return next();
      } else {
           console.log('auth ko > ok');

           // email : elouadi.slimane@yahoo.fr
           // passw : pass
           // urole : admin


            // TODO tester la légitimité du log !
            //req.session.userid = ...;
            //req.session.authenticated = true;
            console.log('user not connected > please login');
            res.badRequest('You sneeky lizzard, you must log in to use the api !');
      }
  }

};
