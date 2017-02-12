app.factory('PurchaseService', function ($http) {
    return ({
        buyInsurance: function (insurance) {
            return $http.post('/Purchase/BuyInsurance', insurance);
        },
        addInsurants: function (insurants) {
            return $http.post('/Purchase/AddInsurants', insurants);
        }
    });
});