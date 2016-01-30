
module.exports = {

  index: function(req, res, next) {

    console.log('controller: admin.index');

    if (req.session.authenticated == true) {
        console.log('session ok : logged');
        res.redirect('admin/app/index.html#/admin/home')
    } else {

        console.log("path: "+req.url);
        console.log('session ko : not logged');
        res.redirect('admin/app/index.html');
    }

  },

  auth: function(req, res, next) {

    console.log('controller: admin.auth');

      if (req.session.authenticated){
        console.log('auth: ok');
        return next();
        //res.badRequest('404')
      } else {
           console.log('auth ko > ok');

           // email : elouadi.slimane@yahoo.fr
           // passw : pass
           // urole : admin

           // TODO tester la légitimité du log !
           // req.session.userid = ...;
           // req.session.authenticated = true;
           console.log('user not connected > please login');
           res.badRequest('You sneeky lizzard, you must log in to use the api !');
      }

  }

};
