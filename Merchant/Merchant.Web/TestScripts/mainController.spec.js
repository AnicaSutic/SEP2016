'use strict';
describe("MainController", function () {
   
    var scope, ctrl, state;
    //pre svakog testa učitavamo app modul
    beforeEach(module('app'));

        beforeEach(inject(function ($rootScope,$controller,$state) {
            scope = $rootScope.$new();
            state = $state;
            ctrl = $controller('MainController', {
                $scope: scope,
                $state: state
            });
       
        }));
 

        it('controller should not be null', function () {
            expect(ctrl).not.toBe(null);
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

        it('on package change', function () {
            scope.VehicleInsurance.Package = 23;
            scope.onPackageChange();
            expect(scope.towing).toBe(true);
            expect(scope.repair).toBe(false);
        });

        it('it sholud check dates', function () {
            scope.Insurance.StartDate = "13.02.2017";
            scope.Insurance.EndDate = "15.02.2014";
            scope.checkDate();
            expect(scope.areDatesValid).toBe(true);

            scope.Insurance.StartDate = "13.02.2017";
            scope.Insurance.EndDate = "11.02.2014";
            scope.checkDate();
            expect(scope.areDatesValid).not.toBe(true);
            
        });

        it('it sholud add and delete insurant', function () {
            scope.CurrentInsurant = {
                Name: "Anica",
                Surname: "Sutic",
                IdentificationNumber: "2233445566776",
                PassportNumber: "2222",
                Address: "Novi Sad",
                TelephoneNumber: "1223",
                Email: "a@gmail",
                IsBuyer: false
            };
            scope.addInsurant();
            expect(scope.addedInsurants.length).toBe(1);
            expect(scope.insurantsCounter).toBe(1);

            scope.deleteInsurant(scope.CurrentInsurant,1);
            expect(scope.insurantsCounter).toBe(0);
        });

        it('it sholud go to home state', function () {
            spyOn(state, 'go');
            expect(state.go).not.toHaveBeenCalled();
            scope.cancelTravelInsurance();
            expect(state.go).toHaveBeenCalledWith('home');
        });


    /*
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
        });*/

    });
