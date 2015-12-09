'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar'
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug:true,
      events:true 
    });

    $urlRouterProvider.otherwise('login');
    //$urlRouterProvider.otherwise('/dashboard/home');

$stateProvider
    .state('admin', {
        url:'/admin',
        templateUrl: 'views/admin/main.html',
        resolve: {
            loadMyFile:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                      name:'chart.js',
                      files:[
                        '/admin/bower_components/angular-chart.js/dist/angular-chart.min.js',
                        '/admin/bower_components/angular-chart.js/dist/angular-chart.css'
                      ]
                    }),
                    $ocLazyLoad.load({
                        name:'sbAdminApp',
                        files:[
                            'scripts/controllers/chartContoller.js',
                            'scripts/controllers/activityCtrl.js'
                        ]
                    })
                  },
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["/admin/bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "/admin/bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['/admin/bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['/admin/bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['/admin/bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['/admin/bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['/admin/bower_components/angular-touch/angular-touch.js']
                })

            }
        }
    })
    .state('admin.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/admin/home.html',
        resolve: {
        loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'sbAdminApp',
          files:[
          'scripts/controllers/main.js',
          'scripts/directives/timeline/timeline.js',
          'scripts/directives/notifications/notifications.js',
          'scripts/directives/chat/chat.js',
          'scripts/directives/dashboard/stats/stats.js'
          ]
        })
        }
        }
    })

    .state('login',{
        templateUrl:'views/public/login.html',
        url:'/login'
    })
    .state('signup',{
        templateUrl:'views/public/signup.html',
        url:'/signup'
    })

    .state('admin.categoryView',{
        templateUrl:'views/admin/category_view.html',
        url:'/admin/category'
    })
    .state('admin.categoryEdit',{
        templateUrl:'views/admin/category_add.html',
        url:'/admin/category/edit'
    })
    .state('admin.categoryAdd',{
        templateUrl:'views/admin/category_add.html',
        url:'/admin/category/add'
    })

    .state('admin.activityView',{
        templateUrl:'views/admin/activity_view.html',
        url:'/admin/activity/',
        controller: 'activityCtrl'
    })
    .state('admin.activityAdd',{
        templateUrl:'views/admin/activity_add.html',
        url:'/admin/activity/add'
    })
    .state('admin.activityEdit',{
        templateUrl:'views/admin/activity_add.html',
        url:'/admin/activity/edit'
    })

    .state('admin.serviceView',{
        templateUrl:'views/admin/service_view.html',
        url:'/admin/service/'
    })
    .state('admin.serviceAdd',{
        templateUrl:'views/admin/service_add.html',
        url:'/admin/service/edit'
    })
    .state('admin.serviceEdit',{
        templateUrl:'views/admin/service_add.html',
        url:'/admin/service/edit'
    })

    .state('user', {
        url:'/user',
        templateUrl: 'views/user/main.html',
        resolve: {
            loadMyFile:function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                      name:'chart.js',
                      files:[
                        '/admin/bower_components/angular-chart.js/dist/angular-chart.min.js',
                        '/admin/bower_components/angular-chart.js/dist/angular-chart.css'
                      ]
                    }),
                    $ocLazyLoad.load({
                        name:'sbAdminApp',
                        files:['scripts/controllers/chartContoller.js']
                    })
                  },
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["/admin/bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "/admin/bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['/admin/bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['/admin/bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['/admin/bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['/admin/bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['/admin/bower_components/angular-touch/angular-touch.js']
                })

            }
        }
    })
    .state('user.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/user/home.html',
        resolve: {
            loadMyFiles:function($ocLazyLoad) {
                return $ocLazyLoad.load({
                  name:'sbAdminApp',
                  files:[
                    'scripts/controllers/main.js',
                    'scripts/directives/timeline/timeline.js',
                    'scripts/directives/notifications/notifications.js',
                    'scripts/directives/chat/chat.js',
                    'scripts/directives/dashboard/stats/stats.js'
                    ]
                })
            }
        }
    })
    }]);
