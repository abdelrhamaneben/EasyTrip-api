'use strict';


angular.module('sbAdminApp')
  .controller('serviceCtrl', function($scope,$http) {

      $scope.services = [];

      $scope.loadServices = function() {
          var httpRequest = $http({
            method: "GET",
            url: "http://localhost:1337/service",
            async : false,
            dataType : "json",
            contentType : "application/json"
          }).success(function(data, status) {
              $scope.services = data;
          });
      };

      $scope.deleteService = function(id_service){
          var httpRequest = $http({
            method: "DELETE",
            url: "http://localhost:1337/service/" + id_service,
            async : false
          }).success(function() {
            //$route.reload();
            $scope.loadServices();
          });
      };

});
