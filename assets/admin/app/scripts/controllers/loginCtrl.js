'use strict';

angular.module('sbAdminApp')
  .controller('loginCtrl', function($scope,$http,$location,$rootScope,$state) {

      $scope.alert = false;

      $scope.checkConnected = function(){
          if(localStorage.user != null){
              $state.go('admin.home');
          }
      }

      $scope.login = function(user) {

          var httpRequest = $http({
            method: "POST",
            url: urlServer + "user/login",
            //url: "http://172.28.1.101:1337/user/login",
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

                //$rootScope.user = {};
                //$rootScope.user = response.data;
                localStorage.user = response.data;
                localStorage.name_first = response.data.name_first;
                localStorage.name_last = response.data.name_last;
                localStorage.email = response.data.email;
                localStorage.uid = response.data.id_user;
                //$rootScope.uid = $rootScope.user.id_user;

                if (response.data.role == 'admin') {
                    localStorage.isAdmin = true;
                    localStorage.role = "admin";
                    //$rootScope.isAdmin = true;
                    //$rootScope.user.role = "admin";
                    console.log('user is admin');
                    $state.go('admin.home');
                } else if (response.data.role == 'business') {
                    localStorage.isAdmin = false;
                    localStorage.role = "business";
                    //$rootScope.isAdmin = false;
                    //$rootScope.user.role = "business";
                    //console.log('user is BU');
                    $state.go('admin.homebu');
                } else {
                    localStorage.user = null;
                    localStorage.role = null;
                    localStorage.uid = null;
                    //$rootScope.user = null;
                    //$rootScope.uid = null;
                    $scope.alertmessage = "User not allowed to connect";
                }

              }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("Utilisateur inconnu ou mot de passe incorrecte");
                $scope.alertmessage = "Could not connect, "+response.body;
                //$scope.alert = true;
          });
      };

      $scope.signup = function(user) {

          var httpRequest = $http({
              method: "POST",
              url: urlServer + "user/signup",
              //url: "172.28.1.101:1337/user/signup",
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
