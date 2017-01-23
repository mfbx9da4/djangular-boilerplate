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
