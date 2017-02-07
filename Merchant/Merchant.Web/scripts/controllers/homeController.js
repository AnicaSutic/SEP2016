app.controller('HomeController', function ($rootScope, $scope, $state) {

    $rootScope.isAccepted = false;
    $scope.error = "";

    $scope.accept = function () {
        if (!$scope.areAccepted)
            $scope.error = "You must accept the terms & conditions!";
        else {
            $scope.error = "";
            $rootScope.isAccepted = true;
            $state.go('insurance');
        }
    };
    
});