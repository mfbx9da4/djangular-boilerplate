var PollsApp = angular.module('PollsApp', []);

PollsApp.config(function($interpolateProvider, $httpProvider) {
  $interpolateProvider.startSymbol('[{');
  $interpolateProvider.endSymbol('}]');
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});

PollsApp.service('QuestionsService', ['$http', function ($http) {
    var Service = {}

    Service.list = function() {
      return $http({
          method: 'GET',
          url: '/polls/questions/'
      });
    };

    return Service;
}]);

PollsApp.controller('PollsController', function ($scope, $http, QuestionsService) {
    $scope.items = [];


    QuestionsService.list().then(success, error);

    function success(response) {
        console.log(response.data);
        $scope.items = response.data;
    }

    function error(response) {
        console.log('Error retrieving items.');
    }
});


PollsApp.directive('stringUpdater', function () {
    return {
        restrict: 'EA',
        scope: {
          stringModel: '=?',
        },
        template: [
          '<input type="text" ng-model="vm.stringModel" ng-keyup="vm.handleKeyUp($event)" />',
          '<p>{{vm.stringModel}}</p>',
        ].join(''),
        controllerAs: 'vm',
        controller: function () {
          var vm = this;
          vm.handleKeyUp = function ($event) {
            if ($event.keyCode === 13) {
              console.log(vm.stringModel);
            }
          }
        },
        link: function () {}
    }
});
