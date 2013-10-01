'use strict';

describe('Unit: Testing Controllers', function () {
  var ctrl, scope;

  beforeEach(angular.mock.module('ticketVR'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl  = $controller('myCards', {
      $scope: scope
    });
  }));

  it('should have a myCards controller', function() {
    expect(scope).not.toBeUndefined();
  });

  //Cards
  it('myCards should extend scipe with cards', function() {
    expect(scope.cards).not.toBeUndefined();
  });

  it('myCards cards should be an array', function() {
    expect(Array.isArray(scope.cards)).toBeTruthy();
  });

  it('myCards cards should length of 0', function() {
    expect(scope.cards.length).toBe(0);
  });


  //Remove
  it('myCards should extend scipe with remove', function() {
    expect(scope.remove).not.toBeUndefined();
  });

  it('myCards remove should be a function', function() {
    expect(typeof scope.remove).toBe('function');
  });


  //ShowBalance
  it('myCards should extend scipe with remove', function() {
    expect(scope.showBalance).not.toBeUndefined();
  });

  it('myCards showBalance should be a function', function() {
    expect(typeof scope.showBalance).toBe('function');
  });
});
