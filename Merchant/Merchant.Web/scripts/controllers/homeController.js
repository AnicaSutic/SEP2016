app.controller('HomeController', function ($scope, $state) {

    //sessionStorage.setItem("areTermsAccepted", false);
    sessionStorage.setItem("purchaseStep1", 0);
    sessionStorage.setItem("purchaseStep2", 0);
    sessionStorage.setItem("purchaseStep3", 0);
    $scope.error = "";

    $scope.accept = function () {
        if (!$scope.areAccepted)
            $scope.error = "You must accept the terms & conditions!";
        else {
            $scope.error = "";
            sessionStorage.setItem("areTermsAccepted", true);
            sessionStorage.setItem("purchaseStep1", 1);
            $state.go('insurance');
        }
    };
    
});