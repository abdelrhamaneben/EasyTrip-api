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

      $scope.deleteCategory = function(id_category){
          var httpRequest = $http({
            method: "DELETE",
            url: "http://localhost:1337/category/" + id_category,
            async : false
          }).success(function() {
            //$route.reload();
            $scope.loadCategories();
            alert("La catégorie a bien été supprimée.");
          });
      };

      $scope.addCategory = function(){
        var image = "";
        var fileInput = document.querySelector('#category_image');
        fileInput.addEventListener('change', function() {
            var reader = new FileReader();
            reader.addEventListener('load', function() {
            image = reader.result;
            }, false);
            reader.readAsDataURL(fileInput.files[0]);
        }, false);

        var name = $("#category_name").val();
        var description = $("#category_description").val();

        var data = '{'
          +'"name" : "' + name + '",'
          +'"image" : "' + image + '",'
          +'"description" : "' + description + '"'
        +'}';

        var httpRequest = $http({              
            method : "POST",
            url : "http://localhost:1337/category",
            data : data,
            dataType : "json",
            contentType : "application/json"
        }).success(function() {
            alert("La catégorie a bien été ajoutée.");
        });
    };
});
