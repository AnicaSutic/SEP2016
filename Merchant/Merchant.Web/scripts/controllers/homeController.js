app.controller('HomeController', function ($scope, $window, RiskService) {
    $scope.hello = "hello";

    $scope.showForm = false;
    $scope.showAnotherInsurance = false;

    $scope.risks = {};
    $scope.categories = {};

    /** METHODS **/

    $scope.addPolicy = function () {
        $scope.showForm = true;
    };

    $scope.cancelPolicy = function () {
        $scope.showForm = false;
    };

    $scope.chooseAnother = function () {
        $scope.showAnotherInsurance = true;
    };

    //ovde treba ponistavati ako su unete neke vrednosti za osiguranje da se ne bi i ono poslalo
    $scope.cancelOther = function () {
        $scope.showAnotherInsurance = false;
    };

    RiskService.getRisksByCategory(1).then(function (response) {
        $scope.risks = response.data;
    });

    RiskService.getOtherCategories().then(function (response) {
        $scope.categories = response.data;
    });
});