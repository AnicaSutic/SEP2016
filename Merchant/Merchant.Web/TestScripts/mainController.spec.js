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

        it('it should be able to add insurant', function () {
            var Insurant1 = {
                Name: "Anica",
                Surname: "Sutic",
                IdentNumber: "1111111111111",
                Address: "aaaa",
                TelNumber: "1111",
                Email: "a@gmail.com"
            };
            var Insurant2 = {
                Name: "Ivana",
                Surname: "Tesanovic",
                IdentNumber: "1111111111111",
                Address: "aaaa",
                TelNumber: "1111",
                Email: "a@gmail.com"
            };

            var added = [];
            added.push(Insurant1);
            added.push(Insurant2);

            expect(added.length).toBe(2);
        });

        it('counter sholud be defined', function () {
            expect(scope.insurantsCounter).toBeDefined();
        });

        it('price should be defined', function () {
            expect(scope.travelPrice).toBeDefined();
            expect(scope.vehiclePrice).toBeDefined();
            expect(scope.homePrice).toBeDefined();
        });

        it('it should show insurance form', function () {
            scope.showInsurantForm();
            expect(scope.showInsForm).not.toBe(false);
        });

        /*it('should return collection by language', function () {
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
        });*/

    });
});