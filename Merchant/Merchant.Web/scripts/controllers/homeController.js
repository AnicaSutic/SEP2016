﻿app.controller('HomeController', function ($scope, $window, RiskService) {

    $scope.showForm = false;
    $scope.showAnotherInsurance = false;

    $scope.risks = {};
    $scope.categories = {};

    $scope.sports = {};
    $scope.values = {};
    $scope.ages = {};
    $scope.regions = {};

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
    
});