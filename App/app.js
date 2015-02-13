
var app = angular.module('myApp', ['ngRoute', 'ngTouch',
'ui.grid', 'ui.grid.edit'])

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
                .when('/tirelist', {
                    templateUrl: 'views/tirelist.html',
                    controller: 'tirelistController'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    ]);
