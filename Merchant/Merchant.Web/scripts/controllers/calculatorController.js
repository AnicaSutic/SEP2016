app.controller('CalculatorController', function ($scope, RiskService) {

    $scope.travelRisks = {};
    $scope.travelRiskItems = {};

    $scope.sports = {};
    $scope.values = {};
    $scope.ages = {};
    $scope.regions = {};

    RiskService.getRisksByCategory(1).then(function (response) {
        $scope.travelRisks = response.data;
    });

    RiskService.getRiskItemsForRisk(1).then(function (reponse) {
        $scope.sports = response.data;
    });

    RiskService.getRiskItemsForRisk(2).then(function (reponse) {
        $scope.regions = response.data;
    });

    RiskService.getRiskItemsForRisk(4).then(function (reponse) {
        $scope.ages = response.data;
    });

    RiskService.getRiskItemsForRisk(5).then(function (reponse) {
        $scope.values = response.data;
    });

});