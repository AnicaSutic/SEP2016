'use strict';
describe("NavbarController", function () {
    //pre svakog testa učitavamo app modul
    beforeEach(module("app"));

    describe('NavbarController', function () {

        var scope, ctrl;
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('NavbarController', {
                $scope: scope
            });

        }));

        it('current language must be set', function () {
            scope.changeCurrentLanguage('en');
            expect(scope.currentLanguage).toEqual('en');
            expect(scope.currentLanguage).not.toEqual('sr');
        });
    });
});