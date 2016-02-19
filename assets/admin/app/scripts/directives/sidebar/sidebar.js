'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('sbAdminApp')
  .directive('sidebar',['$location',function() {
    return {
      templateUrl:'scripts/directives/sidebar/sidebar_admin.html',
      //templateUrl:'scripts/directives/sidebar/sidebar.html',
      restrict: 'E',
      replace: true,
      scope :{
        isAdmin: '='
      },
      controller:function($scope,$rootScope,$location,$state){
        $scope.selectedMenu = 'dashboard';
        $scope.collapseVar = 0;
        $scope.multiCollapseVar = 0;

        $scope.isAdmin = localStorage.isAdmin;
        $scope.user = localStorage.user;
        $scope.name_first = localStorage.name_first;
        $scope.name_last = localStorage.name_last;
        $scope.email = localStorage.email;
        $scope.role = localStorage.role;

        $scope.check = function(x){
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };
        
        $scope.multiCheck = function(y){
          if(y==$scope.multiCollapseVar)
            $scope.multiCollapseVar = 0;
          else
            $scope.multiCollapseVar = y;
        };

        $scope.isAdminf = function() {
            if(!$scope.isConnected()){
              $location.path("/login");
            }
             if (localStorage.role == 'business' || localStorage.isAdmin == false) {
                return false;
            } else if (localStorage.role == 'admin') {
                return true;
            }
        }
        $scope.isConnected = function(){
          return (localStorage.user != null);
        }
      }
    }
  }]);
