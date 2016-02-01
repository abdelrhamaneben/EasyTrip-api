
module.exports = {

  // Renvoie les statistiques pour le dashboard des admin
  getStats: function(req, res) {

    console.log('API get statistiques');

    var stats = {};

    var d0 = new Date();
    var d7 = new Date().setDate(d0.getDate() - 7);
    var d15 = new Date().setDate(d0.getDate() - 15);
    var d30 = new Date().setDate(d0.getDate() - 30);
    var d45 = new Date().setDate(d0.getDate() - 45);
    var d60 = new Date().setDate(d0.getDate() - 60);
    var d75 = new Date().setDate(d0.getDate() - 75);
    var d90 = new Date().setDate(d0.getDate() - 90);

    var nbUsers7d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit7d = count;

      User.count().where({createdAt: { '>': d15, '<=': d7}}).exec(nbUsers15d);
    };

    var nbUsers15d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit15d = count;

      User.count().where({createdAt: { '>': d30, '<=': d15}}).exec(nbUsers30d);
    };

    var nbUsers30d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit30d = count;

      User.count().where({createdAt: { '>': d45, '<=': d30}}).exec(nbUsers45d);
    };

    var nbUsers45d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit45d = count;

      User.count().where({createdAt: { '>': d60, '<=': d45}}).exec(nbUsers60d);
    };

    var nbUsers60d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit60d = count;

      User.count().where({createdAt: { '>': d75, '<=': d60}}).exec(nbUsers75d);
    };

    var nbUsers75d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit75d = count;

      User.count().where({createdAt: { '>': d90, '<=': d75}}).exec(nbUsers90d);
    };

    var nbUsers90d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit90d = count;
    };

    if (!req.session.authenticated) {

        // nombre de création de compte utilisateur Util & Business
        User.count().where({createdAt: { '>': d7, '<=': d0}}).exec(nbUsers7d);

        // nombre de création de compte utilisateur Util & Business
        stats.nbsearch7d = 13;
        stats.nbsearch15d = 17;
        stats.nbsearch30d = 20;
        stats.nbsearch45d = 32;
        stats.nbsearch60d = 57;
        stats.nbsearch75d = 68;
        stats.nbsearch90d = 98;


        // nombre de création de compte utilisateur Util & Business
        stats.nbsignupnu7d = 3;
        stats.nbsignupnu15d = 13;
        stats.nbsignupnu30d = 20;
        stats.nbsignupnu45d = 32;
        stats.nbsignupnu60d = 41;
        stats.nbsignupnu75d = 60;
        stats.nbsignupnu90d = 67;

        stats.nbsignupbu7d = 2;
        stats.nbsignupbu15d = 3;
        stats.nbsignupbu30d = 5;
        stats.nbsignupbu45d = 9;
        stats.nbsignupbu60d = 10;
        stats.nbsignupbu75d = 11;
        stats.nbsignupbu90d = 11;

       // Nombre de nouveau services
        stats.nbservice = 124;
        stats.nbservice7d = 3;
        stats.nbservice15d = 7;
        stats.nbservice30d = 10;
        stats.nbservice45d = 12;
        stats.nbservice60d = 13;
        stats.nbservice75d = 16;
        stats.nbservice90d = 20;

        // nombre de promos
        stats.promosub = 5;
        stats.promosub7d = 2;
        stats.promosub15d = 3;
        stats.promosub30d = 7;
        stats.promosub45d = 8;
        stats.promosub60d = 8;
        stats.promosub75d = 9;
        stats.promosub90d = 9;

         // USER
        /*
           Il faut récupérer
            - Le nombre de réservations de ces 7 derniers jours des services du userid si il est business, sinon le total des résa
            - Le nombre de fois qu'on a cliqué pour info sur le service ces 7, 30, 60 et 90 derniers jours
            - Si admin : le nombre de nouveaux clients ces 7 derniers jours
            - Si admin : le nombre de nouveaux clients totaux
            - Si admin : le nombre de nouveaux clients
            - Si admin : le nombre de recherches effectuées ces 7, 30 et OO derniers jours
         */

        //stats.reservation = Reservation.find({price.service})

        /*
        Category.find({id_category:id})
                .exec(function (err,user) {
                  if(err){
                    return res.json({
                      error:err
                    });
                  }
                  if(user === undefined) {
                    return res.notFound();
                  }
                  else
                    return res.json({
                      notFound:false,
                      userData:user
                    });
                });
        */

        res.ok(stats);
      } else {
        /*
        *   LES STATS POUR LES AUTRES
        */

        var stats = {};

        // Sample réponse
        // ADMIN

         // Nombre de visites
        stats.nbvue7d = 31;
        stats.nbvue15d = 52;
        stats.nbvue30d = 67;
        stats.nbvue45d = 87;
        stats.nbvue60d = 92;
        stats.nbvue75d = 101;
        stats.nbvue90d = 101;

        // Nombre de recherches
        stats.nbcmt7d = 2;
        stats.nbcmt15d = 7;
        stats.nbcmt30d = 14;
        stats.nbcmt45d = 23;
        stats.nbcmt60d = 26;
        stats.nbcmt75d = 33;
        stats.nbcmt90d = 38;

        // nombre de création de compte utilisateur Util & Business
        stats.nveval7d = 3;
        stats.nveval15d = 13;
        stats.nveval30d = 20;
        stats.nveval45d = 32;
        stats.nveval60d = 41;
        stats.nveval75d = 60;
        stats.nveval90d = 67;

        stats.eval7d = 4.4;
        stats.eval15d = 4.3;
        stats.eval30d = 4.0;
        stats.eval45d = 4.3;
        stats.eval60d = 4.2;
        stats.eval75d = 4.1;
        stats.eval90d = 3.8;

        res.ok(stats);
      }

  },

  // Renvoie les stats d'un service en particulier
  getStat: function(req, res) {

    var serviceId = req.param('serviceId');

    var stats = {};

    // Sample réponse
    // ADMIN

    // Nombre de visites
    stats.nbvue7d = 3;
    stats.nbvue15d = 5;
    stats.nbvue30d = 6;
    stats.nbvue45d = 8;
    stats.nbvue60d = 9;
    stats.nbvue75d = 10;
    stats.nbvue90d = 10;

    // Nombre de commentaires
    stats.nbcmt7d = 1;
    stats.nbcmt15d = 3;
    stats.nbcmt30d = 5;
    stats.nbcmt45d = 6;
    stats.nbcmt60d = 6;
    stats.nbcmt75d = 7;
    stats.nbcmt90d = 7;

    // nombre de favoris
    stats.nveval7d = 3;
    stats.nveval15d = 4;
    stats.nveval30d = 4;
    stats.nveval45d = 5;
    stats.nveval60d = 6;
    stats.nveval75d = 8;
    stats.nveval90d = 9;

    // moyenne des évaluations
    stats.eval7d = 4.4;
    stats.eval15d = 4.3;
    stats.eval30d = 4.0;
    stats.eval45d = 4.3;
    stats.eval60d = 4.2;
    stats.eval75d = 4.1;
    stats.eval90d = 3.8;

    res.ok(stats);

  }

};
