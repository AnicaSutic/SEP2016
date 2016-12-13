app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state('home', {
            url: '/Home'
        })
        .state('insurance', {
            url: '/Home/Insurance',
            templateUrl: '/home/insurance',
            controller: 'HomeController'
        });

}]);