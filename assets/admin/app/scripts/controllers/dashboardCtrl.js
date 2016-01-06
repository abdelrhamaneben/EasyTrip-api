
angular.module('sbAdminApp')
  .controller('dashboardCtrl', function($scope,$rootScope,$http) {

      $scope.stats = [];
      $scope.lineVisite = [];
      $scope.lineInscription = [];
      $scope.lineService = [];

      $scope.loadStats = function() {

          var httpRequest = $http({
            method: "GET",
            url: ($rootScope.apiAddress+"stats/"),
            async : true,
            dataType : "json",
            contentType : "application/json"
          }).success(function(datar, status) {
            console.log("récup admin stat ok");
            $scope.stats = datar;

            $scope.lineVisite = {
              labels: ['90j', '75j', '60j', '45j', '30j', '15j', '7j'],
              series: [ '# visites', '# recherches'],
              data: [
                  [
                      (datar.nbvisit90d-datar.nbvisit75d),
                      (datar.nbvisit75d-datar.nbvisit60d),
                      (datar.nbvisit60d-datar.nbvisit45d),
                      (datar.nbvisit45d-datar.nbvisit30d),
                      (datar.nbvisit30d-datar.nbvisit15d),
                      (datar.nbvisit15d-datar.nbvisit7d),
                      datar.nbvisit7d
                  ],[
                      (datar.nbsearch90d-datar.nbsearch75d),
                      (datar.nbsearch75d-datar.nbsearch60d),
                      (datar.nbsearch60d-datar.nbsearch45d),
                      (datar.nbsearch45d-datar.nbsearch30d),
                      (datar.nbsearch30d-datar.nbsearch15d),
                      (datar.nbsearch15d-datar.nbsearch7d),
                      (datar.nbsearch7d)
                  ]
              ],
              onClick: function (points, evt) {
                console.log(points, evt);
              }
            };

            $scope.lineInscription = {
              labels: ['90j', '75j', '60j', '45j', '30j', '15j', '7j'],
              series: [ '# inscriptions utilisateur', '# inscription business'],
              data: [
                  [
                      (datar.nbsignupnu90d-datar.nbsignupnu75d),
                      (datar.nbsignupnu75d-datar.nbsignupnu60d),
                      (datar.nbsignupnu60d-datar.nbsignupnu45d),
                      (datar.nbsignupnu45d-datar.nbsignupnu30d),
                      (datar.nbsignupnu30d-datar.nbsignupnu15d),
                      (datar.nbsignupnu15d-datar.nbsignupnu7d),
                      datar.nbsignupnu7d
                  ],[
                      (datar.nbsignupbu90d-datar.nbsignupbu75d),
                      (datar.nbsignupbu75d-datar.nbsignupbu60d),
                      (datar.nbsignupbu60d-datar.nbsignupbu45d),
                      (datar.nbsignupbu45d-datar.nbsignupbu30d),
                      (datar.nbsignupbu30d-datar.nbsignupbu15d),
                      (datar.nbsignupbu15d-datar.nbsignupbu7d),
                      datar.nbsignupbu7d
                  ]
              ],
              onClick: function (points, evt) {
                console.log(points, evt);
              }
            };



          $scope.lineService = {
              labels: ['90j', '75j', '60j', '45j', '30j', '15j', '7j'],
              series: [ '# nouveau services', '# nouvelle promos'],
              data: [
                  [
                      (datar.nbservice90d-datar.nbservice75d),
                      (datar.nbservice75d-datar.nbservice60d),
                      (datar.nbservice60d-datar.nbservice45d),
                      (datar.nbservice45d-datar.nbservice30d),
                      (datar.nbservice30d-datar.nbservice15d),
                      (datar.nbservice15d-datar.nbservice7d),
                      datar.nbservice7d
                  ],[
                      (datar.promosub90d-datar.promosub75d),
                      (datar.promosub75d-datar.promosub60d),
                      (datar.promosub60d-datar.promosub45d),
                      (datar.promosub45d-datar.promosub30d),
                      (datar.promosub30d-datar.promosub15d),
                      (datar.promosub15d-datar.promosub7d),
                      (datar.promosub7d)
                  ]
              ],
              onClick: function (points, evt) {
                console.log(points, evt);
              }
            };

          });

        };

      //};

});
