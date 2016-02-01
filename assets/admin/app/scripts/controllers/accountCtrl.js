'use strict';

angular.module('sbAdminApp')
  .controller('accountCtrl', function($scope,$http,$location,$rootScope,$state) {

    $scope.userData = [];
    $scope.loadAccount = function() {

        var httpRequest = $http({
            method: "GET",
            url: ("http://localhost:1337/admin/account/"+$rootScope.user.user_id),
            //url: "172.28.1.101:1337/admin/account/"+$rootScope.user.user_id),
            async : false
        }).success(function(data, status) {

        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            $scope.userData = response.data;
            console.log("User data well found");

            /*userData.address_country
            userData.address_code_zip
            userData.address_city
            userData.address_str_name
            userData.address_str_nbr
            userData.password
            userData.email
            userData.phone
            userData.name_last
            userData.name_first*/

        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            alert("connot load data :'(");
            $scope.alertmessage = "Could not retrieve data from server";
            //$scope.alert = true;
        });
    };

    $scope.update = function(user) {

        var httpRequest = $http({
            method: "POST",
            url: "http://localhost:1337/admin/account/",
            //url: "172.28.1.101:1337/admin/account/",
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
            $state.go('admin.home');
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $scope.alertmessage = response.body;
            $scope.alert = true;
        });
      };

});
