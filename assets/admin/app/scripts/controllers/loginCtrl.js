'use strict';

angular.module('sbAdminApp')
  .controller('loginCtrl', function($scope,$http,$location,$rootScope,$state) {

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
            // mettre un timer quelque part, bien que non nécessaire pk THEN renvoie un chargement
          }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available

                $rootScope.user = response.data;

                if ($rootScope.user.role == 'admin') {
                    $rootScope.isAdmin = true;
                    console.log('user is admin');
                    $state.go('admin.home');
                } else {
                    $rootScope.isAdmin = false;
                    console.log('user is not admin');
                    $state.go('user.home');
                }

              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.alertmessage = "Could not connect, "+response.body;
                //$scope.alert = true;
          });
      };

      $scope.signup = function(user) {

          alert('sign up');

          var httpRequest = $http({
              method: "POST",
              url: "http://localhost:1337/adminAPI/signup",
              async : false,
              data: user,
              withCredentials: false,
              headers: {
                contentType : "application/x-www-form-urlencoded"
              }
          }).success(function(data, status) {

          }).then(function successCallback(response) {
              // this callback will be called asynchronously
              // when the response is available
              alert('réponse good du serveur, utilisateur crée :)');
              $state.go('admin.home');
          }, function errorCallback(response) {
              // called asynchronously if an error occurs
              // or server returns response with an error status.
              $scope.alertmessage = response.body;
              $scope.alert = true;
          });
      };

});
