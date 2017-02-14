app.factory('PurchaseService', ['$http',function ($http) {
    return ({
        buyInsurance: function (insurance, token) {
            return $http({
                method: 'POST',
                url: '/Purchase/BuyInsurance',
                data: insurance,
                headers: {
                    'RequestVerificationToken': token
                }
            });
        },
        addInsurants: function (insurants, token) {
            return $http({
                method: 'POST',
                url: '/Purchase/AddInsurants',
                data: insurants,
                headers: {
                    'RequestVerificationToken': token
                }
            });
        },
        getPolicyByOrderId: function(orderId) {
            return $http.get("/Purchase/GetPolicyByOrderId/" + orderId);
        },
        addInsurantsToSession: function (insurants) {
            return $http({
                method: 'POST',
                url: '/Purchase/AddInsurantsToSession',
                data: insurants,
                headers: {
                    'RequestVerificationToken': token
                }
            });
        }
    });
}]);