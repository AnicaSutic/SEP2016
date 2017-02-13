app.controller('PaymentController', ['$scope', '$location', '$window', 'PaypalService', function ($scope, $location, $window, PaypalService) {

    $scope.showUrl = false;
    $scope.showCreateButton = false;
    $scope.showExecuteButton = false;

    var isCanceled = $location.search().cancel;
    console.log(isCanceled);

    $scope.paymentId = $location.search().paymentId;
    $scope.payerId = $location.search().PayerID;

    console.log($scope.paymentId);
    console.log($scope.payerId);

    if ($scope.paymentId && $scope.payerId) {
        $scope.showExecuteButton = true;
    } else {
        $scope.showCreateButton = true;
    }

    $scope.createPayment = function () {

        var paymentRequestData = {
            OrderId: "A466EA90-1E22-4C61-A68B-B8A09BE3551F",
            Price: 500
        };

        PaypalService.createPayment(paymentRequestData)
            .then(
                function(response) {
                    console.log(response);
                    $scope.url = response.data;
                    $scope.showUrl = true;
                },
                function(error) {
                    console.log(error);
                });

        $scope.redirect = function() {
            $window.location.href = $scope.url;
        }
    }

    $scope.executePayment = function () {

        var paymentDetails = {
            PaymentId: $scope.paymentId,
            PayerId: $scope.payerId
        };
        console.log(paymentDetails);

        PaypalService.executePayment(paymentDetails)
            .then(
                function (response) {
                    console.log(response);
                },
                function (error) {
                    console.log(error);
                });
    }

}]);