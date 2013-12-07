'use strict';

var app = angular.module('ticketVR', ['webStorageModule', 'ui.mask'])
            .config(function ($routeProvider) {
              $routeProvider
                .when('/', {
                  controller : 'index',
                  templateUrl: '/view/index.html'
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
                  templateUrl: '/view/checkBalance.html'
                })
                .when('/showBalance/:card', {
                  controller : 'showBalance',
                  templateUrl: '/view/showBalance.html'
                })
                .otherwise({ redirectTo: '/' });
            });

app.filter('cardformat', function() {
  return function(card) {
    var formated = (card) ? String(card).match(/.{1,4}/g).join(' ') : card;
    return formated;
  };
});

//Initial
app.controller('index', function($scope) {

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
        number: $scope.newCard,
        name  : $scope.cardName
      });

      webStorage.add('cards', cards);
      $location.path('/myCards');
    };
});


//Get Balance
app.controller('checkBalance', function($scope, $location) {
  $scope.checkBalance = function() {
    $location.path('/showBalance/' + $scope.card);
  };
});


//Show Balance
app.controller('showBalance', function($scope, $routeParams, $http) {
    var url = 'http://api.ticketvrapp.com/card/' + $routeParams.card;

    $scope.isLoading = true;

    if (navigator.onLine) {
      $http.get(url)
        .success(function (data, status) {
          $scope.isLoading = false;

          if (data.error) {
            $scope.error = data.error;
          } else {
            $scope.balance    = data.balance;
            $scope.scheduling = data.scheduling;
          }
        })
        .error(function (data) {
          console.log(data);
          $scope.isLoading = false;
        });
    } else {
      $scope.isLoading = false;
      $scope.error     = "Sem conexão"
    }
});
