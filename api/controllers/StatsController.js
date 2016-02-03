
module.exports = {

  // Renvoie les statistiques pour le dashboard des admin
  getStats: function(req, res) {

    console.log('API get statistiques');

    var stats = {};

    var d0 = new Date();
    var d7 = new Date(new Date().setDate(d0.getDate() - 7));
    var d15 = new Date(new Date().setDate(d0.getDate() - 15));
    var d30 = new Date(new Date().setDate(d0.getDate() - 30));
    var d45 = new Date(new Date().setDate(d0.getDate() - 45));
    var d60 = new Date(new Date().setDate(d0.getDate() - 60));
    var d75 = new Date(new Date().setDate(d0.getDate() - 75));
    var d90 = new Date(new Date().setDate(d0.getDate() - 90));

    // VISIT -------------------------------------------------------------------
    var nbVisit7d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit7d = count;

      Stat.count().where({createdAt: { '>': d15, '<=': d7}}).exec(nbVisit15d);
    };

    var nbVisit15d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit15d = count;

      Stat.count().where({createdAt: { '>': d30, '<=': d15}}).exec(nbVisit30d);
    };

    var nbVisit30d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit30d = count;

      Stat.count().where({createdAt: { '>': d45, '<=': d30}}).exec(nbVisit45d);
    };

    var nbVisit45d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit45d = count;

      Stat.count().where({createdAt: { '>': d60, '<=': d45}}).exec(nbVisit60d);
    };

    var nbVisit60d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit60d = count;

      Stat.count().where({createdAt: { '>': d75, '<=': d60}}).exec(nbVisit75d);
    };

    var nbVisit75d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit75d = count;

      Stat.count().where({createdAt: { '>': d90, '<=': d75}}).exec(nbVisit90d);
    };

    var nbVisit90d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbvisit90d = count;

      // SEARCH
      Stat.count().where({createdAt: {'>': d7, '<=': d0}, id_service: {'!': 'null'}}).exec(nbSearch7d);
    };

    // SEARCH ------------------------------------------------------------------
    var nbSearch7d = function(err, count) {
      if (err) return res.serverError({error: err})

      stats.nbsearch7d = count;

      Stat.count().where({createdAt: {'>': d15, '<=': d7}, id_service: {'!': 'null'}}).exec(nbSearch15d);
    };

    var nbSearch15d = function(err, count) {
      if (err) return res.serverError({error: err})

      stats.nbsearch15d = count;

      Stat.count().where({createdAt: {'>': d30, '<=': d15}, id_service: {'!': 'null'}}).exec(nbSearch30d);
    };

    var nbSearch30d = function(err, count) {
      if (err) return res.serverError({error: err})

      stats.nbsearch30d = count;

      Stat.count().where({createdAt: {'>': d45, '<=': d30}, id_service: {'!': 'null'}}).exec(nbSearch45d);
    };

    var nbSearch45d = function(err, count) {
      if (err) return res.serverError({error: err})

      stats.nbsearch45d = count;

      Stat.count().where({createdAt: {'>': d60, '<=': d45}, id_service: {'!': 'null'}}).exec(nbSearch60d);
    };

    var nbSearch60d = function(err, count) {
      if (err) return res.serverError({error: err})

      stats.nbsearch60d = count;

      Stat.count().where({createdAt: {'>': d75, '<=': d60}, id_service: {'!': 'null'}}).exec(nbSearch75d);
    };

    var nbSearch75d = function(err, count) {
      if (err) return res.serverError({error: err})

      stats.nbsearch75d = count;

      Stat.count().where({createdAt: {'>': d90, '<=': d75}, id_service: {'!': 'null'}}).exec(nbSearch90d);
    };

    var nbSearch90d = function(err, count) {
      if (err) return res.serverError({error: err})

      stats.nbsearch90d = count;

      // NEXT
      User.count().where({createdAt: {'>': d7, '<=': d0}}).exec(nbSignupNu7d);
    };

    // SIGNUP PRIVATE ----------------------------------------------------------
    var nbSignupNu7d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupnu7d = count;

      User.count().where({createdAt: { '>': d15, '<=': d7}, role: {'=': 'private'}}).exec(nbSignupNu15d);
    };

    var nbSignupNu15d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupnu15d = count;

      User.count().where({createdAt: { '>': d30, '<=': d15}, role: {'=': 'private'}}).exec(nbSignupNu30d);
    };

    var nbSignupNu30d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupnu30d = count;

      User.count().where({createdAt: { '>': d45, '<=': d30}, role: {'=': 'private'}}).exec(nbSignupNu45d);
    };

    var nbSignupNu45d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupnu45d = count;

      User.count().where({createdAt: { '>': d60, '<=': d45}, role: {'=': 'private'}}).exec(nbSignupNu60d);
    };

    var nbSignupNu60d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupnu60d = count;

      User.count().where({createdAt: { '>': d75, '<=': d60}, role: {'=': 'private'}}).exec(nbSignupNu75d);
    };

    var nbSignupNu75d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupnu75d = count;

      User.count().where({createdAt: { '>': d90, '<=': d75}, role: {'=': 'private'}}).exec(nbSignupNu90d);
    };

    var nbSignupNu90d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupnu90d = count;

      // NEXT
      User.count().where({createdAt: {'>': d7, '<=': d0}}).exec(nbSignupBu7d);
    };

    // SIGNUP BUSINESS ---------------------------------------------------------
    var nbSignupBu7d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupbu7d = count;

      User.count().where({createdAt: { '>': d15, '<=': d7}, role: {'=': 'business'}}).exec(nbSignupBu15d);
    };

    var nbSignupBu15d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupbu15d = count;

      User.count().where({createdAt: { '>': d30, '<=': d15}, role: {'=': 'business'}}).exec(nbSignupBu30d);
    };

    var nbSignupBu30d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupbu30d = count;

      User.count().where({createdAt: { '>': d45, '<=': d30}, role: {'=': 'business'}}).exec(nbSignupBu45d);
    };

    var nbSignupBu45d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupbu45d = count;

      User.count().where({createdAt: { '>': d60, '<=': d45}, role: {'=': 'business'}}).exec(nbSignupBu60d);
    };

    var nbSignupBu60d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupbu60d = count;

      User.count().where({createdAt: { '>': d75, '<=': d60}, role: {'=': 'business'}}).exec(nbSignupBu75d);
    };

    var nbSignupBu75d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupbu75d = count;

      User.count().where({createdAt: { '>': d90, '<=': d75}, role: {'=': 'business'}}).exec(nbSignupBu90d);
    };

    var nbSignupBu90d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbsignupbu90d = count;

      // NEXT
      Service.count().exec(nbServices);
    };

    // SERVICES ----------------------------------------------------------------
    var nbServices = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbservice = count;

      Service.count().where({createdAt: { '>': d7, '<=': d0}}).exec(nbServices7d);
    };

    var nbServices7d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbservice7d = count;

      Service.count().where({createdAt: { '>': d15, '<=': d7}}).exec(nbServices15d);
    };

    var nbServices15d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbservice15d = count;

      Service.count().where({createdAt: { '>': d30, '<=': d15}}).exec(nbServices30d);
    };

    var nbServices30d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbservice30d = count;

      Service.count().where({createdAt: { '>': d45, '<=': d30}}).exec(nbServices45d);
    };

    var nbServices45d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbservice45d = count;

      Service.count().where({createdAt: { '>': d60, '<=': d45}}).exec(nbServices60d);
    };

    var nbServices60d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbservice60d = count;

      Service.count().where({createdAt: { '>': d75, '<=': d60}}).exec(nbServices75d);
    };

    var nbServices75d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbservice75d = count;

      User.count().where({createdAt: { '>': d90, '<=': d75}}).exec(nbServices90d);
    };

    var nbServices90d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbservice90d = count;

      // NEXT PROMOSUB
      ServicePrice.count().exec(nbPromoSub)
    };

    // PROMO -------------------------------------------------------------------
    var nbPromoSub = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.nbpromosub = count;

      ServicePrice.count().where({createdAt: { '>': d7, '<=': d0}}).exec(nbPromoSub7d);
    };

    var nbPromoSub7d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.promosub7d = count;

      ServicePrice.count().where({createdAt: { '>': d15, '<=': d7}}).exec(nbPromoSub15d);
    };

    var nbPromoSub15d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.promosub15d = count;

      ServicePrice.count().where({createdAt: { '>': d30, '<=': d15}}).exec(nbPromoSub30d);
    };

    var nbPromoSub30d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.promosub30d = count;

      ServicePrice.count().where({createdAt: { '>': d45, '<=': d30}}).exec(nbPromoSub45d);
    };

    var nbPromoSub45d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.promosub45d = count;

      ServicePrice.count().where({createdAt: { '>': d60, '<=': d45}}).exec(nbPromoSub60d);
    };

    var nbPromoSub60d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.promosub60d = count;

      ServicePrice.count().where({createdAt: { '>': d75, '<=': d60}}).exec(nbPromoSub75d);
    };

    var nbPromoSub75d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.promosub75d = count;

      ServicePrice.count().where({createdAt: { '>': d90, '<=': d75}}).exec(nbPromoSub90d);
    };

    var nbPromoSub90d = function(err, count) {
      if (err) return res.serverError({error: err})
      console.log(count);

      stats.promosub90d = count;

      // NEXT
      res.ok(stats);
    };

    // Vue ---------------------------------------------------------------------

    if (!req.session.authenticated) {

        // nombre de création de compte utilisateur Util & Business
        Stat.count().where({createdAt: {'>': d7, '<=': d0}}).exec(nbVisit7d);

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
