/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getStats: function(req, res) {

        console.log('API get statistiques');

        // Variables a rechercher
        var nvClPriveSemaine = -1;

        // Var systeme;
        //lastDate = new Date(lastDate);

        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);


        var query = User.count().where({
            createdAt: {
                '>=': lastWeek
            }
        });

        query.exec(function(err, sumnwusers) {
            if (err) {
                console.log('error query');
                return res.serverError('');
            } else {
                console.log('all good');
                nvClPriveSemaine = sumnwusers;

                console.log('nvClPriveSemaine: ' + nvClPriveSemaine);
                return res.ok(nvClPriveSemaine);
            }
        })

    }

};
