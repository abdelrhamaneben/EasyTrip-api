'use strict';


angular.module('sbAdminApp')
  .controller('serviceCtrl', function($scope,$rootScope,$http,$location,$state) {

      $scope.services = [];
      $scope.activities = [];

      $scope.loadServices = function() {
          var httpRequest = $http({
            method: "GET",
            url: "http://localhost:1337/service",
            async : false,
            dataType : "json",
            contentType : "application/json"
          }).success(function(data, status) {
              $scope.services = data;
          });
      };

      $scope.deleteService = function(id_service){
          var httpRequest = $http({
            method: "DELETE",
            url: "http://localhost:1337/service/" + id_service,
            async : false
          }).success(function() {
            //$route.reload();
            $scope.loadServices();
            alert("Le service a bien été supprimé.");
          });
      };

      $scope.loadActivities = function(){
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

      $scope.addService = function(){
          var service_image_blob = "";
          var fileInput = document.querySelector('#service_image');
          fileInput.addEventListener('change', function() {
              var reader = new FileReader();
              reader.addEventListener('load', function() {
                  //console.log('Contenu du fichier "' + fileInput.files[0].name + '" :\n\n' + reader.result);
              service_image_blob = reader.result;
              }, false);
              reader.readAsDataURL(fileInput.files[0]);
          }, false);
          var businessDay = "";

          var monday_opening_hours = document.getElementById('monday_opening_hours');
          var tuesday_opening_hours = document.getElementById('tuesday_opening_hours');
          var wednesday_opening_hours = document.getElementById('wednesday_opening_hours');
          var thursday_opening_hours = document.getElementById('thursday_opening_hours');
          var friday_opening_hours = document.getElementById('friday_opening_hours');
          var saturday_opening_hours = document.getElementById('saturday_opening_hours');
          var sunday_opening_hours = document.getElementById('sunday_opening_hours');

          var service_geolati = document.getElementById('service_geolati');
          var service_geolong = document.getElementById('service_geolong');
          var service_name = document.getElementById('service_name');
          var service_description = document.getElementById('service_description');
          var service_image = document.getElementById('service_image');
          var service_activity = document.getElementById('service_activity');
          var service_link = document.getElementById('service_link');

          if(monday_opening_hours.value.length != 0){
            businessDay += "Lundi "+ monday_opening_hours.value + ";";
          }
          if(tuesday_opening_hours.value.length != 0){
            businessDay += "Mardi "+ tuesday_opening_hours.value + ";";
          }
          if(wednesday_opening_hours.value.length != 0){
            businessDay += "Mercredi "+ wednesday_opening_hours.value + ";";
          }
          if(thursday_opening_hours.value.length != 0){
            businessDay += "Jeudi "+ thursday_opening_hours.value + ";";
          }
          if(friday_opening_hours.value.length != 0){
            businessDay += "Vendredi "+ friday_opening_hours.value + ";";
          }
          if(saturday_opening_hours.value.length != 0){
            businessDay += "Samedi "+ saturday_opening_hours.value + ";";
          }
          if(sunday_opening_hours.value.length != 0){
            businessDay += "Dimanche "+ sunday_opening_hours.value + ";";
          }


        console.log(businessDay);
        console.log(service_geolati.value);
        console.log(service_geolong.value);
        console.log(service_name.value);
        console.log(service_description.value);
        console.log(service_image_blob);
        console.log(service_activity.value);
        console.log(service_link.value);

          // ajout de l'adresse
        var address_str_nbr = document.getElementById('address_str_nbr');
        var address_str_name = document.getElementById('address_str_name');
        var address_code_zip = document.getElementById('address_code_zip');
        var address_city = document.getElementById('address_city');
        var address_country = document.getElementById('address_country');

        console.log(address_str_nbr.value);
        console.log(address_str_name.value);
        console.log(address_code_zip.value);
        console.log(address_city.value);
        console.log(address_country.value);

        var data = '{'
          +'"str_nbr" : "' + address_str_nbr.value + '",'
          +'"str_name" : "' + address_str_name.value + '",'
          +'"code_zip" : "' + address_code_zip.value + '",'
          +'"city" : "' + address_city.value + '",'
          +'"country" : "' + address_country.value + '"'
        +'}';

        var service_d_to = document.getElementById('service_d_to');
        var service_d_from = document.getElementById('service_d_from');
        var service_nb_person_min = document.getElementById('service_nb_person_min');
        var service_nb_person_max = document.getElementById('service_nb_person_max');
        var service_price_pp = document.getElementById('service_price_pp');

        var tmp = service_d_from.value.split("/");
        service_d_from.value = new Date(tmp[2], tmp[1] - 1, tmp[0]);

        tmp = service_d_to.value.split("/");
        service_d_to.value = new Date(tmp[2], tmp[1] - 1, tmp[0]);

        console.log(data);
        var httpRequest = $http({
              method : "POST",
              url : "http://localhost:1337/address",
              data : data,
              dataType : "json",
              contentType : "application/json"
        }).success(function(data, status) {
          var id_address = data.id_address;
          var data = '{'
                +'"creator" : 2,'
                +'"activities" : "' + service_activity.value + '",'
                +'"geolati" : "' + service_geolati.value + '",'
                +'"geolong" : "' + service_geolong.value + '",'
                +'"address" : ' + id_address + ','
                +'"name" : "' + service_name.value + '",'
                +'"description" : "' + service_description.value + '",'
                +'"image" : "' + service_image_blob + '",'
                +'"link" : "' + service_link.value + '"'
              +'}';

              var httpRequest = $http({
                  method : "POST",
                  url : "http://localhost:1337/service",
                  data : data,
                  dataType : "json",
                  contentType : "application/json"
              }).success(function(data, status) {
                  var id_service = data.id_service;
                  var data = '{'
                  +'"service" : "' + id_service + '",'
                    +'"d_from" : "' + service_d_from.value + '",'
                    +'"d_to" : "' + service_d_to.value + '",'
                    +'"nb_person_min" : "' + service_nb_person_min.value + '",'
                    +'"nb_person_max" : "' + service_nb_person_max.value + '",'
                    +'"price_per_person" : ' + service_price_pp.value + ','
                    +'"businessDay" : "' + businessDay + '"'
                  +'}';
                  var httpRequest = $http({
                      method : "POST",
                      url : "http://localhost:1337/serviceprice",
                      data : data,
                      dataType : "json",
                      contentType : "application/json"
                  }).success(function(data,status) {
                      $scope.loadServices();
                      alert("Le service a bien été ajouté.");
                  });
              });
          });
      };

      $scope.detailService = function(id_service) {

        //alert("show stat service: " + id_service);
        $rootScope.serviceIdDetail = id_service;
        $state.go('admin.servicestat');
        //$state.go('admin.home');
      };

      $scope.stats = [];
      $scope.lineVues = [];
      $scope.lineEvalCmt = [];
      $scope.lineEval = [];
      $scope.loadStats = function() {

          alert("load stat unitiare");

          var id_service = 2;//$rootScope.id_service;

          var httpRequest = $http({
            method: "GET",
            url: ("http://localhost:1337/admin/stats/"+id_service),
            async : true,
            dataType : "json",
            contentType : "application/json"
          }).success(function(datar, status) {
            console.log("récup admin stat ok");
            $scope.stats = datar;

            $scope.lineVues = {
              labels: ['90j', '75j', '60j', '45j', '30j', '15j', '7j'],
              series: [ '# vues' ],
              data: [
                  [
                      (datar.nbvue90d-datar.nbvue75d),
                      (datar.nbvue75d-datar.nbvue60d),
                      (datar.nbvue60d-datar.nbvue45d),
                      (datar.nbvue45d-datar.nbvue30d),
                      (datar.nbvue30d-datar.nbvue15d),
                      (datar.nbvue15d-datar.nbvue7d),
                      datar.nbvue7d
                  ]
              ],
              onClick: function (points, evt) {
                console.log(points, evt);
              }
            };

            $scope.lineEvalCmt = {
              labels: ['90j', '75j', '60j', '45j', '30j', '15j', '7j'],
              series: [ '# évaluations', '# commentaires' ],
              data: [
                  [
                      (datar.nveval90d-datar.nveval75d),
                      (datar.nveval75d-datar.nveval60d),
                      (datar.nveval60d-datar.nveval45d),
                      (datar.nveval45d-datar.nveval30d),
                      (datar.nveval30d-datar.nveval15d),
                      (datar.nveval15d-datar.nveval7d),
                      datar.nveval7d
                  ],[
                      (datar.nbcmt90d-datar.nbcmt75d),
                      (datar.nbcmt75d-datar.nbcmt60d),
                      (datar.nbcmt60d-datar.nbcmt45d),
                      (datar.nbcmt45d-datar.nbcmt30d),
                      (datar.nbcmt30d-datar.nbcmt15d),
                      (datar.nbcmt15d-datar.nbcmt7d),
                      datar.nbcmt7d
                  ]
              ],
              onClick: function (points, evt) {
                console.log(points, evt);
              }
            };

          $scope.lineEval = {
              labels: ['90j', '75j', '60j', '45j', '30j', '15j', '7j'],
              series: [ 'évaluation' ],
              data: [
                  [
                      (datar.eval90d-datar.eval75d),
                      (datar.eval75d-datar.eval60d),
                      (datar.eval60d-datar.eval45d),
                      (datar.eval45d-datar.eval30d),
                      (datar.eval30d-datar.eval15d),
                      (datar.eval15d-datar.eval7d),
                      datar.eval7d
                  ]
              ],
              onClick: function (points, evt) {
                console.log(points, evt);
              }
            };

          });

        };


});
