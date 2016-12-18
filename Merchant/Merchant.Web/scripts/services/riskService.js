app.factory('RiskService', function ($http) {
    return ({
        getRisksByCategory : function(id) {
            return $http.get('/Risk/GetRisksByCategory/' + id);
        },
        getOtherCategories : function() {
            return $http.get('/Risk/GetOtherCategories');
        },
        getRiskItemsForRisk: function (id) {
            return $http.get('/Risk/GetRiskItemsForRisk/' + id);
        },
        calculatePrice: function (ins) {
            return $http.post('/Risk/Calculate', ins);
        }
    });
});