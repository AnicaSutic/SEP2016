app.factory('RiskService', ['$http', function ($http) {
    $http.defaults.headers.common['X-XSRF-Token'] = angular.element('input[name="__RequestVerificationToken"]').attr('value');
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
        calculatePrice: function (obj) {
            return $http.post('/Risk/Calculate', obj);
        }
    });
}]);