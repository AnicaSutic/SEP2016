app.controller('InsurantsController', function ($scope, $stateParams) {

    $scope.numOfInsurants = $stateParams.numOfInsurants;
    $scope.counterForInsurants = 0;

    $scope.addedInsurants = [];

    $scope.Insurant = {
        Name: "",
        Surname: "",
        IdentNumber: "",
        Address: "",
        TelNumber: ""
    };

    $scope.addInsurant = function () {
        $scope.addedInsurants.push($scope.Insurant);
        $scope.Insurant = {
            Name: "",
            Surname: "",
            IdentNumber: "",
            Address: "",
            TelNumber: ""
        };
        $scope.counterForInsurants += 1;
    };

    $scope.deleteInsurant = function () {
        $scope.addedInsurants.pop();
        $scope.counterForInsurants -= 1;
    };

    $scope.finish = function () {

    };

});