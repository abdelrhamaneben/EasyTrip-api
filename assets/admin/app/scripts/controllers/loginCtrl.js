'use strict';

angular.module('sbAdminApp')
  .controller('loginCtrl', function($scope,$http,$location) {

    /*$scope.loginfct = function() {
        console.log('cocou');
    }

    $scope.submit = function() {
    alert('yeah');
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
        }
    };*/

    $scope.alert = false;

      $scope.login = function(user) {

          var httpRequest = $http({
            method: "POST",
            url: "http://localhost:1337/adminAPI/login",
            async : false,
            data : user,
            headers: {
                contentType : "application/x-www-form-urlencoded"
            }
          }).success(function(data, status) {

          }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                //$location.path('admin.home').replace();
                //$scope.$apply();
                alert('connexion ok :)');
              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.alertmessage = "Could not connect, please verity email and password";
                $scope.alert = true;
          });
      };

      $scope.signup = function() {
          var httpRequest = $http({
            method: "POST",
            url: "http://localhost:1337/adminAPI/signup",
            async : false,
            dataType : "json",
            contentType : "application/json"
          }).success(function(data, status) {
              $scope.activities = data;
          });
      };

});
