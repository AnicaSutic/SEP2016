'use strict';
describe("InsurantsController", function () {
    //pre svakog testa učitavamo app modul
    beforeEach(module("app"));

    describe('InsurantsController', function () {

        var scope, ctrl;
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('InsurantsController', {
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
            expect(scope.counterForInsurants).toBeDefined();
        });

        it('number of insurants must be more then zero', function () {
            expect(scope.numOfInsurants).not.toBe(0);
        });

    });
});