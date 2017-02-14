app.controller('PaymentController',
[
    '$scope', '$location', '$window', '$state', 'PurchaseService', 'PaypalService',function($scope, $location, $window, $state, PurchaseService, PaypalService) {

        $scope.showExecuteButton = false;

        $scope.isCanceled = $location.search().cancel;
        console.log($scope.isCanceled);

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
                    function (response) {
                        console.log(response);
                        if (response.data.TransactionSuccessful) {
                            console.log("success");
                            $state.go('insurance.success');
                        }
                        else {
                            $state.go('insurance.error');
                        }
                    },
                    function(error) {
                        console.log(error);
                        $state.go('insurance.error');
                    });
        }

        function getPolicyByOrderId(orderId) {
            PurchaseService.getPolicyByOrderId(orderId)
                .then(
                    function(response) {
                        console.log(response.data);
                        $scope.policy = response.data;
                    },
                    function(error) {
                        console.log(error.message);
                    });
        }
       

}]);