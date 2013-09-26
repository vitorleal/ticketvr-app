'use strict';

var app = angular.module('ticketVR', ['webStorageModule'])
            .config(function ($routeProvider, $locationProvider) {
              $routeProvider
                .when('/', {
                  controller : 'initialView',
                  templateUrl: '/view/initialView.html'
                })
                .when('/myCards', {
                  controller : 'myCards',
                  templateUrl: '/view/myCards.html'
                })
                .when('/addCard', {
                  controller : 'addCard',
                  templateUrl: '/view/addCard.html'
                })
                .when('/checkBalance', {
                  controller : 'checkBalance',
                  templateUrl: '/view/getBalance.html'
                })
                .when('/showBalance/:card', {
                  controller : 'showBalance',
                  templateUrl: '/view/showBalance.html'
                })
                .otherwise({ redirectTo: '/' });
            });

//Initial
app.controller('initialView', function($scope, $http, webStorage, $location) {

});


//My Cards
app.controller('myCards', function($scope, webStorage, $location) {
  $scope.cards = webStorage.get('cards') || [];

  $scope.showBalance = function (number) {
    $location.path('/showBalance/' + number);
  };

  $scope.remove = function (index) {
    $scope.cards.splice(index, 1);
    webStorage.add('cards', $scope.cards);
  };
});


//Add Cards
app.controller('addCard', function($scope, webStorage, $location) {
    $scope.saveCard = function () {
      var cards = webStorage.get('cards') || [];

      cards.push({
        type: $scope.type,
        number: $scope.newCard
      });

      webStorage.add('cards', cards);
      $location.path('/myCards');
    };
});


//Get Balance
app.controller('checkBalance', function($scope, $location) {
  $scope.getBalance = function() {
    $location.path('/showBalance/' + number);
  };
});


//Get Balance
app.controller('showBalance', function($scope, $routeParams, $http) {
    var url = 'https://ticketvr.herokuapp.com/card/' + $routeParams.card;

    $http.get(url)
      .success(function (data, status) {
        console.log(data)
        $scope.balance = data.balance;
      })
      .error(function (data) {
        console.log(data);
      });
});
