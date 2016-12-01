app.controller('HomeController', function ($scope, $window, RiskService) {
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

    RiskService.getRisksByCategory(1).then(function (response) {
        console.log(response.data);
        $scope.risks = response.data;
    });
});