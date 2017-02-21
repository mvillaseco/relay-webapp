'use strict';

describe('Reports', () => {

  var createSut;
  var $httpBackend;
  var auth;

  beforeEach(() => {
    module('dopplerRelay');
  });

  beforeEach(inject(function (_$controller_, $rootScope, _$httpBackend_, _auth_) {
    $httpBackend = _$httpBackend_;
    auth = _auth_;
    createSut = function () {
      var $scope = $rootScope.$new();
      var controller = _$controller_('ReportsCtrl', {
        $scope: $scope
      });
      return $scope;
    };
  }));

  describe('deliveries summary', () => {
    });
  });
