
var app = angular.module('myApp', ['ngRoute', 'ngGrid'])

    .config([
        '$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'homeController'
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'aboutController'
                })
                .when('/tire', {
                    templateUrl: 'views/tire.html',
                    controller: 'tireController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);
