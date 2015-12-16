'use strict';


angular.module('sbAdminApp')
  .controller('categoryCtrl', function($scope,$http) {

      $scope.categories = [];

      $scope.loadCategories = function() {
          var httpRequest = $http({
            method: "GET",
            url: "http://localhost:1337/category",
            async : false,
            dataType : "json",
            contentType : "application/json"
          }).success(function(data, status) {
              $scope.categories = data;
          });
      };
});
