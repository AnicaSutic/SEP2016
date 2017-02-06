app.controller('HomeController', function ($window, $scope, $state) {

    $window.localStorage.setItem("areTermsAccepted", false);
    $scope.error = "";

    $scope.accept = function () {
        if (!$scope.areAccepted)
            $scope.error = "You must accept the terms & conditions!";
        else {
            $scope.error = "";
            $window.localStorage.setItem("areTermsAccepted", true);
            $state.go('insurance');
        }
    };
    
});