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
        }
    });
});