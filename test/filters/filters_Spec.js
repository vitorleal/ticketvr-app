'use strict';

describe("Unit: Testing Filters", function() {

  var card;

  beforeEach(function () {
    angular.mock.module('ticketVR');
    card = 1111111111111111;
  });

  it('cardformat should be a filter', inject(function ($filter) {
    expect($filter('cardformat')).not.toBeUndefined();
  }));

  it('cardformat should format string', inject(function ($filter) {
    expect($filter('cardformat')(String(card))).toBe('1111 1111 1111 1111');
  }));

  it('cardformat should format number', inject(function ($filter) {
    expect($filter('cardformat')(card)).toBe('1111 1111 1111 1111');
  }));

  it('cardformat should not brake with "undefined" card', inject(function ($filter) {
    expect($filter('cardformat')()).toBeUndefined();
  }));
});
