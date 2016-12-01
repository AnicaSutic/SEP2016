app.controller('HomeController', function ($scope, $window, InsuranceService) {
    $scope.hello = "hello";

    $scope.showForm = false;

    $scope.risks = {};

    $scope.addPolicy = function () {
        //$window.location.href = '/index.html';
        $scope.showForm = true;
    };

    $scope.cancelPolicy = function () {
        $scope.showForm = false;
    };

    
});