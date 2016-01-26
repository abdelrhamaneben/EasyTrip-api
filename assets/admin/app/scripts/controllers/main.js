'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$rootScope,$position,$http) {


    // initialisation de variables globales
    if ($rootScope.globalIsInit == 'undefined' || !$rootScope.globalIsInit || $rootScope.globalIsInit == false) {

        console.log("initialisation de variables globales");
        //$rootScope.apiAddress = "http://localhost:1337/admin/";
        //$rootScope.user;

        //$rootScope.globalIsInit = 1;
    }




  });
