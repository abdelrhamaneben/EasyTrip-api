'use strict';


angular.module('sbAdminApp')
  .controller('activityCtrl', function($scope,$http) {

      $scope.activities = [];
      $scope.categories = [];

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

      $scope.deleteActivity = function(id_activity){
          var httpRequest = $http({
            method: "DELETE",
            url: "http://localhost:1337/activity/" + id_activity,
            async : false
          }).success(function() {
            $scope.loadActivities();
            alert("L'activité a bien été supprimée.");
          });
      };

      $scope.loadCategories = function(){
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

      $scope.addActivity = function(){
        var image = "";
        var fileInput = document.querySelector('#activity_image');
        fileInput.addEventListener('change', function() {
            var reader = new FileReader();
            reader.addEventListener('load', function() {
            image = reader.result;
            }, false);
            reader.readAsDataURL(fileInput.files[0]);
        }, false);

        var name = $("#activity_name").val();
        var description = $("#activity_description").val();
        var category = $("#activity_category").val();

        var data = '{'
            +'"categories" : "' + category + '",'
            +'"name" : "' + name + '",'
            +'"image" : "' + image + '",'
            +'"description" : "' + description + '"'
          +'}';

        var httpRequest = $http({ 
            method : "POST",
            url : "http://localhost:1337/activity",
            data : data,
            dataType : "json",
            contentType : "application/json"
        }).success(function() {
            alert("L'activité a bien été ajoutée.");
        });
      };
});
