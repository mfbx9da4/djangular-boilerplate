'use strict';

describe('Polls tests', function () {
    var $scope, controller, $httpBackend;

    beforeEach(function () {
        module('PollsApp');

        inject(function ($controller, $rootScope, _$httpBackend_) {
            $scope = $rootScope.$new();
            $httpBackend = _$httpBackend_;

            controller = $controller('PollsController', {
                $scope: $scope,
            });
        });
    });

    it('Test items is empty by default', function () {
        expect($scope.items).toEqual([]);
    });

    it('Test right number of items updated in scope', function () {
        expect($scope.items).toEqual([]);
        $httpBackend.expectGET('/polls/questions/').respond(200, '{"data":[1, 2, 3]}');
        $httpBackend.flush();
        expect($scope.items.data.length).toEqual(3);
    });
});
