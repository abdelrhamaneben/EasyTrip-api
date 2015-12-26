/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    controller: 'web',
    action: 'index'
  },

  '/result': {
    controller: 'web',
    action: 'result'
  },
  '/feature': {
    controller: 'web',
    action: 'feature'
  },
  'get /user/login':{
    controller: 'user',
    action: 'login'
  },
   /**
    *   ADMINISTRARION PART
    */
  // redirection vers angularJS
  'get /admin/': {
    controller: 'admin',
    action: 'index'
  },
  // lien de connexion adminAPI
  'post /adminAPI/login': {
    controller: 'api',
    action: 'login'
  },
  'get /adminAPI/logout': {
    controller: 'api',
    action: 'logout'
  },
  'post /adminAPI/singup': {
    controller: 'api',
    action: 'signup'
  },

  // Tous les autres lien adminAPI nécessitent une authentification
  /*'get /adminAPI/*': {
    controller: 'admin',
    action: 'auth'
  },
  'post /adminAPI/*': {
    controller: 'admin',
    action: 'auth'
  },*/

  // CATEGRIE
  'get /adminAPI/category/':{
    controller: 'apicategory',
    action: 'getCategory'
  },
  'post /adminAPI/category':{
    controller: 'apicategory',
    action: 'postCategory'
  },

  'get /adminAPI/stat/':{
    controller: 'api',
    action: 'getstat'
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};