
module.exports = {

  getStats: function(req, res) {

    console.log("Get stats")

    var id = req.session.userid;

    var stats = {};

    // Sample réponse
    // ADMIN

     // Nombre de visites
    stats.nbvisit7d = 31;
    stats.nbvisit15d = 52;
    stats.nbvisit30d = 67;
    stats.nbvisit45d = 87;
    stats.nbvisit60d = 92;
    stats.nbvisit75d = 101;
    stats.nbvisit90d = 101;

    // Nombre de recherches
    stats.nbsearch7d = 15;
    stats.nbsearch15d = 27;
    stats.nbsearch30d = 54;
    stats.nbsearch45d = 63;
    stats.nbsearch60d = 76;
    stats.nbsearch75d = 83;
    stats.nbsearch90d = 83;

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
  }

};
