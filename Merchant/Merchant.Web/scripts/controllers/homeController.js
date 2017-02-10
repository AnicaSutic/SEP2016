app.controller('HomeController', function ($scope, $state) {

    $scope.accept = function () {
        if (!$scope.areAccepted)
            $scope.hasError = true;
        else {
            $scope.hasError = false;
            sessionStorage.setItem("areTermsAccepted", true);
            sessionStorage.setItem("purchaseStep1", 1);
            $state.go('insurance');
        }
    };
    
});