'use strict';

var app = angular.module('ticketVR', [])
            .config(function ($routeProvider, $locationProvider) {
              $routeProvider
                .when('/', {
                  controller : 'getBallance',
                  templateUrl: '/view/getBallance.html'
                })
                .otherwise({ redirectTo: '/' });
            });

app.controller('getBallance', function($scope, $http) {
  $scope.getBallance = function() {
    var url = 'https://ticketvr.herokuapp.com/card/'+ $scope.card;
    console.log($scope.card);
    $http.get(url)
      .success(function (data, status) {
        console.log(data);
      })
      .error(function (data) {
        console.log(data);
      });
  };
});
