'use strict';
describe("Controller", function () {
    //pre svakog testa učitavamo app modul
    beforeEach(module("app"));

    describe("MainController", function () {
       
        var scope,ctrl;
        beforeEach(inject(function ($controller, $rootScope) {
            scope = $rootScope.new();
            ctrl = $controller("MainController", {$scope: scope});
        }));

        it("should be initialized", function () {
            expect(scope.price).toBeDefined();
        });

       
    });
});