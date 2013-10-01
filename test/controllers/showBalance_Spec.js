'use strict';

describe('Unit: Testing Controllers', function () {
  var ctrl, scope;

  beforeEach(angular.mock.module('ticketVR'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl  = $controller('showBalance', {
      $scope: scope
    });
  }));

  it('should have a showBalance controller', function() {
    expect(scope).not.toBeUndefined();
  });

  //ShowBalance
  it('showBalance isLoading to be true', function() {
    expect(scope.isLoading).toBeFalsy();
  });
});
