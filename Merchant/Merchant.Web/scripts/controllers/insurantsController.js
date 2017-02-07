'use-strict';
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
        $scope.userForm.name.$touched = false;
        $scope.userForm.surname.$touched = false;
        $scope.userForm.jmbg.$touched = false;
        $scope.userForm.email.$touched = false;
        $scope.userForm.address.$touched = false;
        $scope.userForm.telNumber.$touched = false;
        $scope.counterForInsurants += 1;
    };

    $scope.deleteInsurant = function () {
        $scope.addedInsurants.pop();
        $scope.counterForInsurants -= 1;
        $scope.userForm.name.$touched = false;
        $scope.userForm.surname.$touched = false;
        $scope.userForm.jmbg.$touched = false;
        $scope.userForm.email.$touched = false;
        $scope.userForm.address.$touched = false;
        $scope.userForm.telNumber.$touched = false;
    };

    $scope.finish = function () {
    };

});