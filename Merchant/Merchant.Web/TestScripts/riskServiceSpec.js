describe('RiskService', function () {
    var $httpBackend, ctrl, RiskService;

    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_, _$httpBackend_, _$rootScope_, _RiskService_) {
        scope = _$rootScope_.$new();
        $httpBackend = _$httpBackend_;
        RiskService = _RiskService_;

        ctrl = _$controller_('MainController', {
            $scope: scope
        });

    }));

   /* describe('call my service', function () {
        var respond = {};
        it('should make request when app loads', function () {
            $httpBackend.when('GET','/Risk/GetRisksByCategory/1').respond(respond);
            RiskService.getRisksByCategory(1).then(function (response) {
                $scope.agesResponseData = response.data;
                expect(scope.agesResponseData.length).toBeEqual(respond.length);
            })
            $httpBackend.flush();
        });
    });*/

});