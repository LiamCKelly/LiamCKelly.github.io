/**
 * Created by Liam on 9/8/2016.
 */
var app = angular.module('lck-app', ['ngRoute', 'ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('base', {
            abstract: true,
            template: '<ui-view/>'
        });

        $stateProvider.state('base.home', {
            templateUrl: 'html/home.html',
            controller: 'HomeController',
            url: '/home'
        });

        $stateProvider.state('base.games', {
            templateUrl: 'html/games.html',
            controller: 'GamesController',
            url: '/games'
        });

        //copy template later for further views

        $locationProvider.html5Mode(true);
    }
]);

app.controller('HomeController', ['$scope',
    function($scope) {
        //homepage js goes here
    }
]);

app.controller('GamesController', ['$scope',
    function($scope) {
        //homepage js goes here
    }
]);
