(function (angular) {
    var myController = function ($scope) {
        $scope.message = "Hello from the controller!";
        console.log("Usao");

    };

    var routingModule = angular.module('routingModule', []);

    var application = angular.module("app", ['routingModule', 'ui.router']);

})(angular);