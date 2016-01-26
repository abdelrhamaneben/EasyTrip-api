
module.exports = {


  // Renvoie les statistiques pour le dashboard des admin
  getStats: function(req, res) {

    console.log('API get statistiques');

    var stats = {};

    if (req.session.authenticated) {

        // nombre de création de compte utilisateur Util & Business
        stats.nbvisit7d = 11;
        stats.nbvisit15d = 14;
        stats.nbvisit30d = 18;
        stats.nbvisit45d = 46;
        stats.nbvisit60d = 62;
        stats.nbvisit75d = 63;
        stats.nbvisit90d = 71;


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
