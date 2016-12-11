

var app = angular.module("merchantApp",['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

   // $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('insurance', {
            url: '/Insurance',
            templateUrl: '/Home/Insurance',
            controller: 'HomeController',
        });

}]);