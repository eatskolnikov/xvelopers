var app = angular.module('XvelopersApp', ['ngRoute','ngSanitize']);
app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home/list.html',
            controller: 'HomeCtrl'
        })
        .otherwise({
            templateUrl: 'app/views/404.html',
        });
    $locationProvider.html5Mode({
        enabled: true
    });
}]);
