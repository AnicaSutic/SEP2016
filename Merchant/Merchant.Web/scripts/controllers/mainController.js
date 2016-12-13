app.controller('MainController', ['$scope', '$state', function ($scope,$state) {
    console.log("Usao");

    $scope.navigate = function () {
        $state.go('home');
    }
    console.log("Odradio");

}]);