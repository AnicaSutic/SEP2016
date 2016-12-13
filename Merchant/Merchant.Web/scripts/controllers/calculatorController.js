app.controller('CalculatorController', function ($scope, RiskService) {

    $scope.travelRisks = {};
    $scope.travelRiskItems = {};

    RiskService.getRisksByCategory(1).then(function (response) {
        $scope.travelRisks = response.data;
    });

    RiskService.getRiskItemsForRisk(1).then(function (reponse) {
        $scope.travelRiskItems.key = 
        $scope.travelRiskItems = response.data;
    });

});