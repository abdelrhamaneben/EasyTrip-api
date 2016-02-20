
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
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvisit7d = count;

      Stat.count().where({createdAt: {'>': d15, '<=': d7}}).exec(nbVisit15d);
    };

    var nbVisit15d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvisit15d = count;

      Stat.count().where({createdAt: {'>': d30, '<=': d15}}).exec(nbVisit30d);
    };

    var nbVisit30d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvisit30d = count;

      Stat.count().where({createdAt: {'>': d45, '<=': d30}}).exec(nbVisit45d);
    };

    var nbVisit45d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvisit45d = count;

      Stat.count().where({createdAt: {'>': d60, '<=': d45}}).exec(nbVisit60d);
    };

    var nbVisit60d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvisit60d = count;

      Stat.count().where({createdAt: {'>': d75, '<=': d60}}).exec(nbVisit75d);
    };

    var nbVisit75d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvisit75d = count;

      Stat.count().where({createdAt: {'>': d90, '<=': d75}}).exec(nbVisit90d);
    };

    var nbVisit90d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvisit90d = count;

      // SEARCH
      Stat.count()
        .where({createdAt: {'>': d7, '<=': d0}, id_service: {'!': 'null'}})
        .exec(nbSearch7d);
    };

    // SEARCH ------------------------------------------------------------------
    var nbSearch7d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbsearch7d = count;

      Stat.count()
        .where({createdAt: {'>': d15, '<=': d7}, id_service: {'!': 'null'}})
        .exec(nbSearch15d);
    };

    var nbSearch15d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbsearch15d = count;

      Stat.count()
        .where({createdAt: {'>': d30, '<=': d15}, id_service: {'!': 'null'}})
        .exec(nbSearch30d);
    };

    var nbSearch30d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbsearch30d = count;

      Stat.count()
        .where({createdAt: {'>': d45, '<=': d30}, id_service: {'!': 'null'}})
        .exec(nbSearch45d);
    };

    var nbSearch45d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbsearch45d = count;

      Stat.count()
        .where({createdAt: {'>': d60, '<=': d45}, id_service: {'!': 'null'}})
        .exec(nbSearch60d);
    };

    var nbSearch60d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbsearch60d = count;

      Stat.count()
        .where({createdAt: {'>': d75, '<=': d60}, id_service: {'!': 'null'}})
        .exec(nbSearch75d);
    };

    var nbSearch75d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbsearch75d = count;

      Stat.count()
        .where({createdAt: {'>': d90, '<=': d75}, id_service: {'!': 'null'}})
        .exec(nbSearch90d);
    };

    var nbSearch90d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbsearch90d = count;

      // NEXT
      User.count().where({createdAt: {'>': d7, '<=': d0}, role: 'private'})
        .exec(nbSignupNu7d);
    };

    // SIGNUP PRIVATE ----------------------------------------------------------
    var nbSignupNu7d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupnu7d = count;

      User.count().where({createdAt: {'>': d15, '<=': d7}, role: 'private'})
        .exec(nbSignupNu15d);
    };

    var nbSignupNu15d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupnu15d = count;

      User.count().where({createdAt: {'>': d30, '<=': d15}, role: 'private'})
        .exec(nbSignupNu30d);
    };

    var nbSignupNu30d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupnu30d = count;

      User.count().where({createdAt: {'>': d45, '<=': d30}, role: 'private'})
        .exec(nbSignupNu45d);
    };

    var nbSignupNu45d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupnu45d = count;

      User.count().where({createdAt: {'>': d60, '<=': d45}, role: 'private'})
        .exec(nbSignupNu60d);
    };

    var nbSignupNu60d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupnu60d = count;

      User.count().where({createdAt: {'>': d75, '<=': d60}, role: 'private'})
        .exec(nbSignupNu75d);
    };

    var nbSignupNu75d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupnu75d = count;

      User.count().where({createdAt: {'>': d90, '<=': d75}, role: 'private'})
        .exec(nbSignupNu90d);
    };

    var nbSignupNu90d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupnu90d = count;

      // NEXT
      User.count().where({createdAt: {'>': d7, '<=': d0}, role: 'business'})
        .exec(nbSignupBu7d);
    };

    // SIGNUP BUSINESS ---------------------------------------------------------
    var nbSignupBu7d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupbu7d = count;

      User.count().where({createdAt: {'>': d15, '<=': d7}, role: 'business'})
        .exec(nbSignupBu15d);
    };

    var nbSignupBu15d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupbu15d = count;

      User.count().where({createdAt: {'>': d30, '<=': d15}, role: 'business'})
        .exec(nbSignupBu30d);
    };

    var nbSignupBu30d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupbu30d = count;

      User.count().where({createdAt: {'>': d45, '<=': d30}, role: 'business'})
        .exec(nbSignupBu45d);
    };

    var nbSignupBu45d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupbu45d = count;

      User.count().where({createdAt: {'>': d60, '<=': d45}, role: 'business'})
        .exec(nbSignupBu60d);
    };

    var nbSignupBu60d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupbu60d = count;

      User.count().where({createdAt: {'>': d75, '<=': d60}, role: 'business'})
        .exec(nbSignupBu75d);
    };

    var nbSignupBu75d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupbu75d = count;

      User.count().where({createdAt: {'>': d90, '<=': d75}, role: 'business'})
        .exec(nbSignupBu90d);
    };

    var nbSignupBu90d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbsignupbu90d = count;

      // NEXT
      Service.count().exec(nbServices);
    };

    // SERVICES ----------------------------------------------------------------
    var nbServices = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbservice = count;

      Service.count().where({createdAt: {'>': d7, '<=': d0}})
        .exec(nbServices7d);
    };

    var nbServices7d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbservice7d = count;

      Service.count().where({createdAt: {'>': d15, '<=': d7}})
        .exec(nbServices15d);
    };

    var nbServices15d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbservice15d = count;

      Service.count().where({createdAt: {'>': d30, '<=': d15}})
        .exec(nbServices30d);
    };

    var nbServices30d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbservice30d = count;

      Service.count().where({createdAt: {'>': d45, '<=': d30}})
        .exec(nbServices45d);
    };

    var nbServices45d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbservice45d = count;

      Service.count().where({createdAt: {'>': d60, '<=': d45}})
        .exec(nbServices60d);
    };

    var nbServices60d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbservice60d = count;

      Service.count().where({createdAt: {'>': d75, '<=': d60}})
        .exec(nbServices75d);
    };

    var nbServices75d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbservice75d = count;

      User.count().where({createdAt: {'>': d90, '<=': d75}})
        .exec(nbServices90d);
    };

    var nbServices90d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbservice90d = count;

      // NEXT PROMOSUB
      ServicePrice.count().exec(nbPromoSub);
    };

    // PROMO -------------------------------------------------------------------
    var nbPromoSub = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbpromosub = count;

      ServicePrice.count().where({createdAt: {'>': d7, '<=': d0}})
        .exec(nbPromoSub7d);
    };

    var nbPromoSub7d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.promosub7d = count;

      ServicePrice.count().where({createdAt: {'>': d15, '<=': d7}})
        .exec(nbPromoSub15d);
    };

    var nbPromoSub15d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.promosub15d = count;

      ServicePrice.count().where({createdAt: {'>': d30, '<=': d15}})
        .exec(nbPromoSub30d);
    };

    var nbPromoSub30d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.promosub30d = count;

      ServicePrice.count().where({createdAt: {'>': d45, '<=': d30}})
        .exec(nbPromoSub45d);
    };

    var nbPromoSub45d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.promosub45d = count;

      ServicePrice.count().where({createdAt: {'>': d60, '<=': d45}})
        .exec(nbPromoSub60d);
    };

    var nbPromoSub60d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.promosub60d = count;

      ServicePrice.count().where({createdAt: {'>': d75, '<=': d60}})
        .exec(nbPromoSub75d);
    };

    var nbPromoSub75d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.promosub75d = count;

      ServicePrice.count().where({createdAt: {'>': d90, '<=': d75}})
        .exec(nbPromoSub90d);
    };

    var nbPromoSub90d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.promosub90d = count;

      // NEXT
      Stat.count().where({createdAt: {'>': d7, '<=': d0}}).exec(nbVue7d);
    };

    // Vue ---------------------------------------------------------------------
    var nbVue7d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue7d = count;

      Stat.count().where({createdAt: {'>': d15, '<=': d7}}).exec(nbVue15d);
    };

    var nbVue15d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue15d = count;

      Stat.count().where({createdAt: {'>': d30, '<=': d15}}).exec(nbVue30d);
    };

    var nbVue30d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue30d = count;

      Stat.count().where({createdAt: {'>': d45, '<=': d30}}).exec(nbVue45d);
    };

    var nbVue45d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue45d = count;

      Stat.count().where({createdAt: {'>': d60, '<=': d45}}).exec(nbVue60d);
    };

    var nbVue60d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue60d = count;

      Stat.count().where({createdAt: {'>': d75, '<=': d60}}).exec(nbVue75d);
    };

    var nbVue75d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue75d = count;

      Stat.count().where({createdAt: {'>': d90, '<=': d75}}).exec(nbVue90d);
    };

    var nbVue90d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue90d = count;

      // CMT
      Stat.count()
        .where({createdAt: {'>': d7, '<=': d0}, id_service: {'!': 'null'}})
        .exec(nbCmt7d);
    };

    // CMT ---------------------------------------------------------------------
    var nbCmt7d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt7d = count;

      Stat.count()
        .where({createdAt: {'>': d15, '<=': d7}, id_service: {'!': 'null'}})
        .exec(nbCmt15d);
    };

    var nbCmt15d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt15d = count;

      Stat.count()
        .where({createdAt: {'>': d30, '<=': d15}, id_service: {'!': 'null'}})
        .exec(nbCmt30d);
    };

    var nbCmt30d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt30d = count;

      Stat.count()
        .where({createdAt: {'>': d45, '<=': d30}, id_service: {'!': 'null'}})
        .exec(nbCmt45d);
    };

    var nbCmt45d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt45d = count;

      Stat.count()
        .where({createdAt: {'>': d60, '<=': d45}, id_service: {'!': 'null'}})
        .exec(nbCmt60d);
    };

    var nbCmt60d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt60d = count;

      Stat.count()
        .where({createdAt: {'>': d75, '<=': d60}, id_service: {'!': 'null'}})
        .exec(nbCmt75d);
    };

    var nbCmt75d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt75d = count;

      Stat.count()
        .where({createdAt: {'>': d90, '<=': d75}, id_service: {'!': 'null'}})
        .exec(nbCmt90d);
    };

    var nbCmt90d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt90d = count;

      // NEXT
      Judgement.count().exec(nbEval);
    };

    // NBEVAL ------------------------------------------------------------------
    var nbEval = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval = count;

      Judgement.count().where({createdAt: {'>': d7, '<=': d0}}).exec(nbEval7d);
    };

    var nbEval7d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval7d = count;

      Judgement.count().where({createdAt: {'>': d15, '<=': d7}})
        .exec(nbEval15d);
    };

    var nbEval15d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval15d = count;

      Judgement.count().where({createdAt: {'>': d30, '<=': d15}})
        .exec(nbEval30d);
    };

    var nbEval30d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval30d = count;

      Judgement.count().where({createdAt: {'>': d45, '<=': d30}})
        .exec(nbEval45d);
    };

    var nbEval45d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval45d = count;

      Judgement.count().where({createdAt: {'>': d60, '<=': d45}})
        .exec(nbEval60d);
    };

    var nbEval60d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval60d = count;

      Judgement.count().where({createdAt: {'>': d75, '<=': d60}})
        .exec(nbEval75d);
    };

    var nbEval75d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval75d = count;

      Judgement.count().where({createdAt: {'>': d90, '<=': d75}})
        .exec(nbEval90d);
    };

    var nbEval90d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval90d = count;

      // NEXT
      Judgement.find().average('global_score')
        .where({createdAt: {'>': d7, '<=': d0}}).exec(eval7d);
    };

    // EVAL --------------------------------------------------------------------
    var eval7d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval7d = 0;
      } else {
        stats.eval7d = average[0].global_score;
      }

      Judgement.find().average('global_score')
        .where({createdAt: {'>': d15, '<=': d7}}).exec(eval15d);
    };

    var eval15d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval15d = 0;
      } else {
        stats.eval15d = average[0].global_score;
      }

      Judgement.find().average('global_score')
        .where({createdAt: {'>': d30, '<=': d15}}).exec(eval30d);
    };

    var eval30d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval30d = 0;
      } else {
        stats.eval30d = average[0].global_score;
      }

      Judgement.find().average('global_score')
        .where({createdAt: {'>': d45, '<=': d30}}).exec(eval45d);
    };

    var eval45d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval45d = 0;
      } else {
        stats.eval45d = average[0].global_score;
      }

      Judgement.find().average('global_score')
        .where({createdAt: {'>': d60, '<=': d45}}).exec(eval60d);
    };

    var eval60d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval60d = 0;
      } else {
        stats.eval60d = average[0].global_score;
      }

      Judgement.find().average('global_score')
        .where({createdAt: {'>': d75, '<=': d60}}).exec(eval75d);
    };

    var eval75d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval75d = 0;
      } else {
        stats.eval75d = average[0].global_score;
      }

      Judgement.find().average('global_score')
        .where({createdAt: {'>': d90, '<=': d75}}).exec(eval90d);
    };

    var eval90d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval90d = 0;
      } else {
        stats.eval90d = average[0].global_score;
      }

      // NEXT
      res.ok(stats);
    };

    Stat.count().where({createdAt: {'>': d7, '<=': d0}}).exec(nbVisit7d);
  },

  // Renvoie les stats d'un service en particulier
  getStat: function(req, res) {

    var serviceId = req.param('serviceId');

    var d0 = new Date();
    var d7 = new Date(new Date().setDate(d0.getDate() - 7));
    var d15 = new Date(new Date().setDate(d0.getDate() - 15));
    var d30 = new Date(new Date().setDate(d0.getDate() - 30));
    var d45 = new Date(new Date().setDate(d0.getDate() - 45));
    var d60 = new Date(new Date().setDate(d0.getDate() - 60));
    var d75 = new Date(new Date().setDate(d0.getDate() - 75));
    var d90 = new Date(new Date().setDate(d0.getDate() - 90));

    var stats = {};

    // Vue Spec ----------------------------------------------------------------
    var nbVueSpec7d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue7d = count;

      Stat.count()
        .where({createdAt: {'>': d15, '<=': d7}, id_service: serviceId})
        .exec(nbVueSpec15d);
    };

    var nbVueSpec15d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue15d = count;

      Stat.count()
        .where({createdAt: {'>': d30, '<=': d15}, id_service: serviceId})
        .exec(nbVueSpec30d);
    };

    var nbVueSpec30d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue30d = count;

      Stat.count()
        .where({createdAt: {'>': d45, '<=': d30}, id_service: serviceId})
        .exec(nbVueSpec45d);
    };

    var nbVueSpec45d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue45d = count;

      Stat.count()
        .where({createdAt: {'>': d60, '<=': d45}, id_service: serviceId})
        .exec(nbVueSpec60d);
    };

    var nbVueSpec60d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue60d = count;

      Stat.count()
        .where({createdAt: {'>': d75, '<=': d60}, id_service: serviceId})
        .exec(nbVueSpec75d);
    };

    var nbVueSpec75d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue75d = count;

      Stat.count()
        .where({createdAt: {'>': d90, '<=': d75}, id_service: serviceId})
        .exec(nbVueSpec90d);
    };

    var nbVueSpec90d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }
      //console.log(count);

      stats.nbvue90d = count;

      // CMT
      Stat.count()
        .where({createdAt: {'>': d7, '<=': d0}, id_service: serviceId})
        .exec(nbCmtSpec7d);
    };

    // CMT ---------------------------------------------------------------------
    var nbCmtSpec7d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt7d = count;

      Stat.count()
        .where({createdAt: {'>': d15, '<=': d7}, id_service: serviceId})
        .exec(nbCmtSpec15d);
    };

    var nbCmtSpec15d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt15d = count;

      Stat.count()
        .where({createdAt: {'>': d30, '<=': d15}, id_service: serviceId})
        .exec(nbCmtSpec30d);
    };

    var nbCmtSpec30d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt30d = count;

      Stat.count()
        .where({createdAt: {'>': d45, '<=': d30}, id_service: serviceId})
        .exec(nbCmtSpec45d);
    };

    var nbCmtSpec45d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt45d = count;

      Stat.count()
        .where({createdAt: {'>': d60, '<=': d45},id_service: serviceId})
        .exec(nbCmtSpec60d);
    };

    var nbCmtSpec60d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt60d = count;

      Stat.count()
        .where({createdAt: {'>': d75, '<=': d60}, id_service: serviceId})
        .exec(nbCmtSpec75d);
    };

    var nbCmtSpec75d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt75d = count;

      Stat.count()
        .where({createdAt: {'>': d90, '<=': d75}, id_service: serviceId})
        .exec(nbCmtSpec90d);
    };

    var nbCmtSpec90d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbcmt90d = count;

      // NEXT
      Judgement.count()
        .where({createdAt: {'>': d7, '<=': d0}, id_service: serviceId})
        .exec(nbEvalSpec7d);
    };

    // nbEval ------------------------------------------------------------------
    var nbEvalSpec7d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      console.log(count);

      stats.nbeval7d = count;

      Judgement.count()
        .where({createdAt: {'>': d15, '<=': d7}, id_service: serviceId})
        .exec(nbEvalSpec15d);
    };

    var nbEvalSpec15d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval15d = count;

      Judgement.count()
        .where({createdAt: {'>': d30, '<=': d15}, id_service: serviceId})
        .exec(nbEvalSpec30d);
    };

    var nbEvalSpec30d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval30d = count;

      Judgement.count()
        .where({createdAt: {'>': d45, '<=': d30}, id_service: serviceId})
        .exec(nbEvalSpec45d);
    };

    var nbEvalSpec45d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval45d = count;

      Judgement.count()
        .where({createdAt: {'>': d60, '<=': d45}, id_service: serviceId})
        .exec(nbEvalSpec60d);
    };

    var nbEvalSpec60d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval60d = count;

      Judgement.count()
        .where({createdAt: {'>': d75, '<=': d60}, id_service: serviceId})
        .exec(nbEvalSpec75d);
    };

    var nbEvalSpec75d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval75d = count;

      Judgement.count()
        .where({createdAt: {'>': d90, '<=': d75}, id_service: serviceId})
        .exec(nbEvalSpec90d);
    };

    var nbEvalSpec90d = function(err, count) {
      if (err) {
        return res.serverError({error: err});
      }

      stats.nbeval90d = count;

      // NEXT
      Judgement.find().average('global_score')
        .where({createdAt: {'>': d7, '<=': d0}, id_service: serviceId})
        .exec(evalSpec7d);
    };

    // EVAL --------------------------------------------------------------------
    var evalSpec7d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval7d = 0;
      } else {
        stats.eval7d = average;
      }

      Judgement.find().average('global_score')
        .where({createdAt: {'>': d15, '<=': d7}, id_service: serviceId})
        .exec(evalSpec15d);
    };

    var evalSpec15d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval15d = 0;
      } else {
        stats.eval15d = average;
      }

      Judgement.find().average('global_score')
        .where({createdAt: {'>': d30, '<=': d15}, id_service: serviceId})
        .exec(evalSpec30d);
    };

    var evalSpec30d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval30d = 0;
      } else {
        stats.eval30d = average;
      }

      Judgement.find().average('global_score')
        .where({createdAt: {'>': d45, '<=': d30}, id_service: serviceId})
        .exec(evalSpec45d);
    };

    var evalSpec45d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval45d = 0;
      } else {
        stats.eval45d = average;
      }

      Judgement.find().average('global_score')
        .where({createdAt: {'>': d60, '<=': d45}, id_service: serviceId})
        .exec(evalSpec60d);
    };

    var evalSpec60d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval60d = 0;
      } else {
        stats.eval60d = average;
      }

      Judgement.find().average('global_score')
        .where({createdAt: {'>': d75, '<=': d60}, id_service: serviceId})
        .exec(evalSpec75d);
    };

    var evalSpec75d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval75d = 0;
      } else {
        stats.eval75d = average;
      }

      Judgement.find().average('global_score')
        .where({createdAt: {'>': d90, '<=': d75}, id_service: serviceId})
        .exec(evalSpec90d);
    };

    var evalSpec90d = function(err, average) {
      if (err) {
        return res.serverError({error: err});
      }

      if (average === 'undefined') {
        stats.eval90d = 0;
      } else {
        stats.eval90d = average;
      }

      // NEXT
      res.ok(stats);
    };

    Stat.count()
      .where({createdAt: {'>': d7, '<=': d0}, id_service: serviceId})
      .exec(nbVueSpec7d);
  }

};
