app.factory('RiskService', function ($http) {
    return ({
        getRisksByCategory : function(id) {
            return $http.get('/Risk/GetRisksByCategory/' + id);
        },
        getOtherCategories : function() {
            return $http.get('/Risk/GetOtherCategories');
        },
        getAllCategories: function () {
            return $http.get('/Risk/GetAllCategories');
        },
        getRiskItemsForRisk: function (name) {
            return $http.get('/Risk/GetRiskItemsForRisk/'+ name);
        },
        calculatePrice: function (ins) {
            return $http.post('/Risk/Calculate', ins);
        }
    });
});