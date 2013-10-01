'use strict';

describe('Unit: Testing Controllers', function () {
  var ctrl, scope;

  beforeEach(angular.mock.module('ticketVR'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl  = $controller('checkBalance', {
      $scope: scope
    });
  }));

  it('should have a checkBalance controller', function() {
    expect(scope).not.toBeUndefined();
  });

  //CheckBalance
  it('showBalance checkBalance to be a function', function() {
    expect(typeof scope.checkBalance).toBe('function');
  });
});
