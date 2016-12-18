var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

    $urlRouterProvider.otherwise("/Home/HomePage");

    $stateProvider
        .state('home', {
            url: '/Home/HomePage',
            templateUrl: '/Home/HomePage',
            controller: 'HomeController'
        })
        .state('calculator', {
            url: '/Home/CalculatePrice',
            templateUrl: '/Home/CalculatePrice',
            controller: 'CalculatorController'
        })
        .state('insurance', {
            url: '/Home/Insurance',
            templateUrl: '/Home/Insurance',
            controller: 'HomeController'
        });

});