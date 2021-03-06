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

        $scope.isAdmin = $rootScope.isAdmin;
        $scope.user = $rootScope.user;
        
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
             if ($rootScope.user.role == 'business' || $rootScope.isAdmin == false) {
                return false;
            } else if ($rootScope.user.role == 'admin') {
                return true;
            }
        }
        $scope.isConnected = function(){
          return ($rootScope.user != null);
        }
      }
    }
  }]);
