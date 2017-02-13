app.service('PaypalService',['$http', function($http) {
    return({
        createPayment: function(data) {
            return $http.post("https://localhost:44326/api/paypal/getpaymenturl", data);
        },
        executePayment: function (data) {
            return $http.post("https://localhost:44326/api/paypal/executepayment", data);
        }
    });

}]);