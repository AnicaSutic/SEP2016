app.controller('CalculatorController', function ($scope, RiskService) {

    $scope.travelRisks = {};
    $scope.travelRiskItems = {};

    $scope.isChecked = false;

    $scope.price = 0.0;

    $scope.Insurance = {
        Duration: "",
        Region: 0,
        NumberOfInsurants: "",
        InsuredValue: 0,
        Age: 0,
        Sport: 0
    };

    $scope.sports = {};
    $scope.values = {};
    $scope.ages = {};
    $scope.regions = {};

    RiskService.getRisksByCategory(1).then(function (response) {
        $scope.travelRisks = response.data;
    });

    RiskService.getRiskItemsForRisk(1).then(function (response) {
        $scope.sports = response.data;
    });

    RiskService.getRiskItemsForRisk(2).then(function (response) {
        $scope.regions = response.data;
    });

    RiskService.getRiskItemsForRisk(4).then(function (response) {
        $scope.ages = response.data;
    });

    RiskService.getRiskItemsForRisk(5).then(function (response) {
        $scope.values = response.data;
    });

    $scope.calculate = function () {

        if (!$scope.isChecked)
            $scope.Insurance.Sport = 0;

        RiskService.calculatePrice($scope.Insurance).then(function (response) {
            $scope.price = response.data;
        });
    };

});