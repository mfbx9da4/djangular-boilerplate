var App = angular.module('App', []);

App.config(function($interpolateProvider, $httpProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
  $httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});

App.controller('AppController', function ($scope, $http) {
    $scope.items = [];

    $http({
        method: 'GET',
        url: '/polls/questions/'
    }).then(success, error);

    function success(response) {
        console.log(response.data);
        $scope.items = response.data;
    }

    function error(response) {
        console.log('Error retrieving items.');
    }
});
