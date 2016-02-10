'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */
angular.module('sbAdminApp')
	.directive('notifications',function(){
		return {
            templateUrl:'scripts/directives/notifications/notifications.html',
            restrict: 'E',
            replace: true
    	}
	})
    .controller('logout', function($scope,$http,$location,$rootScope,$state) {
        $scope.logout = function() {

            var httpRequest = $http({
                method: "GET",
                url: (urlServer + "user/logout",
                //url: "http://localhost:1337/user/logout",
                async : false,
                headers: {}
            }).success(function(data, status) {
                // mettre un timer quelque part, bien que non nécessaire pk THEN renvoie un chargement
            }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log('disconnection successful');
                    $state.go('login');
                    $location.path('login');
                    }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    alert('An error occurred while disconnecting from server');
                    $state.go('login');
            });

          };
    });


