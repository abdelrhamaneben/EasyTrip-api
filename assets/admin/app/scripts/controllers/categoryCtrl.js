'use strict';

angular.module('sbAdminApp')
  .controller('categoryCtrl', function($scope,$http,$location,$rootScope) {

      $scope.categories = [];
      $rootScope.categoryToEdit;
      $scope.dataFile;

      $scope.loadCategories = function() {
          var httpRequest = $http({
            method: "GET",
            url: urlServer + "category",
            //url: "172.28.1.101:1337/category",
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
            url: urlServer + "category/" + id_category,
            //url: "172.28.1.101:1337/category/" + id_category,
            async : false
          }).success(function() {
            //$route.reload();
            $scope.loadCategories();
            alert("La catégorie a bien été supprimée.");
          });
      };

      $scope.editCategory = function(id_category){
        var httpRequest = $http({              
            method : "GET",
            url : urlServer + "category/" + id_category,
            //url: "172.28.1.101:1337/category/" + id_category,
            dataType : "json",
            contentType : "application/json"
        }).success(function(data, status){
            $rootScope.categoryToEdit = data;
            $location.path('/admin/admin/category/edit');
        });
      }

      $scope.updateCategory = function(id_category){
        /*var image = "";
        var fileInput = document.querySelector('#category_image');
        fileInput.addEventListener('change', function() {
            var reader = new FileReader();
            reader.addEventListener('load', function() {
            image = reader.result;
            }, false);
            reader.readAsDataURL(fileInput.files[0]);
        }, false);
        */
        var name = $("#category_name").val();
        var description = $("#category_description").val();

        var data = '{'
          +'"name" : "' + name + '",'
         // +'"image" : "' + image + '",'
          +'"description" : "' + description + '"'
        +'}';

        var httpRequest = $http({              
            method : "POST",
            url : urlServer + "category/" + id_category,
            //url: "172.28.1.101:1337/category/" + id_category,
            data : data,
            dataType : "json",
            contentType : "application/json"
        }).success(function() {
            alert("La catégorie a bien été modifiée.");
        });
      };


      $scope.loadImage = function(image) {
          var fileReader = new FileReader();
          fileReader.addEventListener("load", function(event) {
              $scope.dataFile = fileReader.result;        
          });
          fileReader.readAsDataURL(image.files[0]);
      };

      $scope.addCategory = function(){
        var name = $("#category_name").val();
        var description = $("#category_description").val();

        var data = '{'
          +'"name" : "' + name + '",'
          +'"image" : "' + $scope.dataFile + '",'
          +'"description" : "' + description + '"'
        +'}';

        var httpRequest = $http({              
            method : "POST",
            url : urlServer + "category",
            //url: "172.28.1.101:1337/category",
            data : data,
            dataType : "json",
            contentType : "application/json"
        }).success(function() {
            alert("La catégorie a bien été ajoutée.");
        });
      };

});
