app.controller('InsurantsController', function ($scope, $stateParams) {

  
    $scope.numOfInsurants = $stateParams.numOfInsurants;
    console.log($scope.numOfInsurants);
    $scope.counterForInsurants = 0;
    $scope.addedInsurants = [];

    $scope.Insurant = {
        Name: "",
        Surname: "",
        IdentNumber: "",
        Address: "",
        TelNumber: "",
        Email: ""
    };
   
    $scope.addInsurant = function () {
        
        $scope.addedInsurants.push($scope.Insurant);
        $scope.Insurant = {
            Name: "",
            Surname: "",
            IdentNumber: "",
            Address: "",
            TelNumber: "",
            Email: ""
        };
        $scope.insurantForm.name.$touched = false;
        $scope.insurantForm.surname.$touched = false;
        $scope.insurantForm.jmbg.$touched = false;
        $scope.insurantForm.email.$touched = false;
        $scope.insurantForm.address.$touched = false;
        $scope.insurantForm.telNumber.$touched = false;
        $scope.counterForInsurants += 1;
        
    };

    $scope.deleteInsurant = function () {
        $scope.addedInsurants.pop();
        $scope.counterForInsurants -= 1;
        $scope.insurantForm.name.$touched = false;
        $scope.insurantForm.surname.$touched = false;
        $scope.insurantForm.jmbg.$touched = false;
        $scope.insurantForm.email.$touched = false;
        $scope.insurantForm.address.$touched = false;
        $scope.insurantForm.telNumber.$touched = false;
    };

    $scope.finish = function () {
    };

});