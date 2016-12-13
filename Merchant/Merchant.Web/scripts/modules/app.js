var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

    $urlRouterProvider.otherwise("/Home");

    $stateProvider
        .state('insurance', {
            url: '/Home/Insurance',
            templateUrl: '/Home/Insurance'
        });

});