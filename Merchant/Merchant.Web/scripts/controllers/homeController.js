app.controller('HomeController', function ($scope, $state) {

    sessionStorage.setItem("areTermsAccepted", false);
    sessionStorage.setItem("purchaseStep", 0);
    $scope.error = "";

    $scope.accept = function () {
        if (!$scope.areAccepted)
            $scope.error = "You must accept the terms & conditions!";
        else {
            $scope.error = "";
            sessionStorage.setItem("areTermsAccepted", true);
            sessionStorage.setItem("purchaseStep", 1);
            $state.go('insurance');
        }
    };
    
});