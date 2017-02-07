'use strict';
describe("MainController", function () {
    //pre svakog testa učitavamo app modul
    beforeEach(module("app"));

    describe('MainController', function () {
       
        var scope, ctrl;
        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('MainController', {
                $scope: scope
            });
       
        }));

        it('it should be able to return sum', function() {
            var result = scope.sum(10,20);
            expect(result).toEqual(30);
        });

        it('price should be defined', function () {
            expect(scope.price).toBeDefined();
        });

        it('should return collection by language', function () {
            var sports = [];
            var obj1 = { Id: '1', Name: 'Volyball', Name_Srb: 'Odbojka' };
            var obj2 = { Id: '2', Name: 'Basketball', Name_Srb: 'Kosarka' };
            sports.push(obj1);
            sports.push(obj2);
            
            var resultEng = [];
            var resE1 = { Id: '1', Name: 'Volyball'};
            var resE2 = { Id: '2', Name: 'Basketball' };
            resultEng.push(resE1);
            resultEng.push(resE2);
            var resultSrp = [];
            var resS1 = { Id: '1', Name: 'Odbojka' };
            var resS2 = { Id: '2', Name: 'Kosarka' };
            resultSrp.push(resS1);
            resultSrp.push(resS2);

            var collE = ctrl.getSelectOptions(sports, "en");
            var collS = ctrl.getSelectOptions(sports, "sr");
            
            expect(collE).toEqual(resultEng);
            expect(collS).toEqual(resultSrp);
        });

        it('choose another insurance and the form sholud show', function () {
            scope.chooseAnother();
            expect(scope.showAnotherInsurance).toEqual(true);
        });

    });
});