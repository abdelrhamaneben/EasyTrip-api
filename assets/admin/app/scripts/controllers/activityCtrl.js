'use strict';


angular.module('sbAdminApp')
  .controller('activityCtrl', function($scope,$http) {

      $scope.activities = [];

      $scope.loadActivities = function() {
          var httpRequest = $http({
            method: "GET",
            url: "http://localhost:1337/activity",
            async : false,
            dataType : "json",
            contentType : "application/json"
          }).success(function(data, status) {
              $scope.activities = data;
          });
      };

});
