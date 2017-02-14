app.controller('PaymentController',
[
    '$scope', '$location', '$window', 'PurchaseService', 'PaypalService',function($scope, $location, $window, PurchaseService, PaypalService) {

        $scope.showExecuteButton = false;

        var isCanceled = $location.search().cancel;
        console.log(isCanceled);

        $scope.paymentId = $location.search().paymentId;
        $scope.payerId = $location.search().PayerID;
        $scope.orderId = $location.search().orderId;

        console.log($scope.paymentId);
        console.log($scope.payerId);

        if ($scope.paymentId && $scope.payerId && $scope.orderId) {
            $scope.showExecuteButton = true;
            getPolicyByOrderId($scope.orderId);
        }

        $scope.executePayment = function() {

            var paymentDetails = {
                PaymentId: $scope.paymentId,
                PayerId: $scope.payerId
            };

            PaypalService.executePayment(paymentDetails)
                .then(
                    function(response) {
                        if (response.data.TransactionSuccessful) {
                            console.log("success");
                        }
                    },
                    function(error) {
                        console.log(error);
                    });
        }

        function getPolicyByOrderId(orderId) {
            PurchaseService.getPolicyByOrderId(orderId)
                .then(
                    function(response) {
                        console.log(response.data);
                    },
                    function(error) {
                        console.log(error.message);
                    });
        }
       

}]);