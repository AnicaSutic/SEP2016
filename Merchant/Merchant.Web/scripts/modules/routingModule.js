var application = angular.module("app");

application.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/Index');
    
    $stateProvider
        .state('home', {
            url: '/Index',
        })
        .state('insurance', {
            url: '/Insurance',
            templateUrl: '/home/insurance',
            controller: 'HomeController',
        });

}]);