'use strict';

describe('Unit: Testing Controllers', function () {
  var ctrl, scope;

  beforeEach(angular.mock.module('ticketVR'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl  = $controller('addCard', {
      $scope: scope
    });
  }));

  it('should have a addCard controller', function() {
    expect(scope).not.toBeUndefined();
  });

  //SaveCard
  it('addCars saveCard should be a function', function() {
    expect(typeof scope.saveCard).toBe('function');
  });
});
