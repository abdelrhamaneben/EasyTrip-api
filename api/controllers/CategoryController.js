/**
 * CategoryController
 *
 * @description :: Server-side logic for managing Categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getCategory: function(req, res) {

    var id = req.session.userid;

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

  },

  postCategory: function(req, res) {
    //TODO
    res.redirect('http://bing.com');
  }
};
