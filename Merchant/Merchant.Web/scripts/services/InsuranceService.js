app.factory('InsuranceService', function ($http) {
    return ({
        getRisksByCategory : function() {
            return $http.get('');
        }
    });
});