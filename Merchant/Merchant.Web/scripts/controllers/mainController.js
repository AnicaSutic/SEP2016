'use strict';
app.controller('MainController', function ($scope, $rootScope, $state, $filter, RiskService, TranslateService) {

    $scope.travelRisks = {};
    $scope.homeRisks = {};

    $scope.isChecked = false;
    $scope.dateStart = false;
    $scope.dateEnd = false;
    $scope.towing = false;
    $scope.repair = false;
    $scope.accomodation = false;
    $scope.transport = false;

    $scope.price = 0.0;
   
    $scope.areAccepted = $rootScope.isAccepted;

    var ctrl = this;
    ctrl.getSelectOptions = getSelectOptions;

    $scope.Insurance = {
        Duration: "",
        //Region: 0,
        NumberOfInsurants: "",
      // InsuredValue: 0,
      //  Age: 0,
      //  Sport: 0,
       StartDate: "",
        EndDate: ""
    };

    $scope.HomeInsurance = {
        Area : "",
        Age: "",
        Value: "",
        InsuredBy: 0
    };

    $scope.VehicleInsurance = {
        //Package: 0,
        Towing : "",
        Repair: "",
        Accomodation: ""
    };

    $scope.sum = function (first, second) {
        return first + second;
    };

    function translateSelectOptions() {
        $scope.regions = getSelectOptions($scope.regionsResponseData, $rootScope.currentLanguage);
        $scope.sports = getSelectOptions($scope.sportsResponseData, $rootScope.currentLanguage);
        $scope.ages = getSelectOptions($scope.agesResponseData, $rootScope.currentLanguage);
        $scope.values = getSelectOptions($scope.valuesResponseData, $rootScope.currentLanguage);
        $scope.insuredBy = getSelectOptions($scope.insuredByResponseData, $rootScope.currentLanguage);
        $scope.categories = getSelectOptions($scope.categoriesResponseData, $rootScope.currentLanguage);
        $scope.packages = getSelectOptions($scope.packagesResponseData, $rootScope.currentLanguage);
    }
    
    function getSelectOptions(data, language) {
        var collection = [];
        for (var i = 0; i < data.length; i++) {
            var option = {};
            option["Id"] = data[i].Id;
            if (language == "sr") {
                option["Name"] = data[i].Name_Srb;
            }
            else if (language == "en") {
                option["Name"] = data[i].Name;
            }
            collection.push(option);
        }
        return collection;
    }

    $rootScope.$on('languageChanged', function () {
        translateSelectOptions();
    });

    RiskService.getRisksByCategory(1).then(function (response) {
        $scope.travelRisks = response.data;
    });

    RiskService.getRiskItemsForRisk("Sport").then(function (response) {
        $scope.sportsResponseData = response.data;
        $scope.sports = getSelectOptions(response.data, $rootScope.currentLanguage);
    });

    RiskService.getRiskItemsForRisk("Insured From").then(function (response) {
        $scope.insuredByResponseData = response.data;
        $scope.insuredBy = getSelectOptions(response.data, $rootScope.currentLanguage);
    });

    RiskService.getRiskItemsForRisk("Region").then(function (response) {
        $scope.regionsResponseData = response.data;
        $scope.regions = getSelectOptions(response.data, $rootScope.currentLanguage);
    });

    RiskService.getRiskItemsForRisk("Age").then(function (response) {
        $scope.agesResponseData = response.data;
        $scope.ages = getSelectOptions(response.data, $rootScope.currentLanguage);
    });

    RiskService.getRiskItemsForRisk("Insured value").then(function (response) {
        $scope.valuesResponseData = response.data;
        $scope.values = getSelectOptions(response.data, $rootScope.currentLanguage);
    });

    RiskService.getRiskItemsForRisk("Packages").then(function (response) {
        $scope.packagesResponseData = response.data;
        $scope.packages = getSelectOptions(response.data, $rootScope.currentLanguage);
    });

    RiskService.getOtherCategories().then(function (response) {
        $scope.categoriesResponseData = response.data;
        $scope.categories = response.data;
    });

    $scope.pickNumber = function () {
        $scope.num = document.getElementById('number').value;
        console.log($scope.num)
    };
    
    $scope.cancelHome = function () {
        $rootScope.showHomeForm = false;
        $scope.HomeInsurance.Area = "";
        $scope.HomeInsurance.Age = "";
        $scope.HomeInsurance.Value = "";
        $scope.HomeInsurance.insuredBy = 0;
    };

    $scope.cancelVehicle = function () {
        $rootScope.showVehicleForm = false;
        $scope.VehicleInsurance.Package = 0;
        $scope.VehicleInsurance.Towing = "";
        $scope.VehicleInsurance.Repair = "";
        $scope.VehicleInsurance.Accomodation = "";
    };

    $scope.chooseAnother = function () {
        $scope.showAnotherInsurance = true;
    };

  
    $scope.checkDate = function () {
        if ($scope.Insurance.StartDate != "" && ($scope.Insurance.EndDate != "")) {
            if ($scope.Insurance.StartDate > $scope.Insurance.EndDate) {
                $scope.dateEnd = true;
            } else {
                $scope.dateEnd = false;
            }
        }
    };

    $scope.checkDateEnd = function () {
        if ($scope.Insurance.StartDate != "" && ($scope.Insurance.EndDate != "")) {
            if ($scope.Insurance.StartDate > $scope.Insurance.EndDate) {
                $scope.dateEnd = true;
                $scope.dateStart = false;
            }
        }
    };


    $scope.showInsuranceByCategory = function (c) {
        if(c == "Home" || c == "Stambeno osiguranje") {
            $rootScope.showHomeForm = true;
        }
        if(c  == "Vehicle" || c == "Osiguranje vozila") {
            $rootScope.showVehicleForm = true;
        }
     };

   
    $scope.cancelOther = function () {
        $scope.showAnotherInsurance = false;
        $rootScope.showHomeForm = false;
        $rootScope.showVehicleForm = false;
        $scope.HomeInsurance.Area = "";
        $scope.HomeInsurance.Age = "";
        $scope.HomeInsurance.Value = "";
        $scope.HomeInsurance.insuredBy = 0;
    };
   

    $scope.onPackageChange = function () {
       
        for (var i = 0; i < $scope.packages.length; i++) {
            if ($scope.VehicleInsurance.Package == $scope.packages[i].Id) {
                if ($scope.packages[i].Name == "Towing" || $scope.packages[i].Name == "Šlepovanje") {
                    $scope.towing = true;
                    $scope.repair = false;
                    $scope.accomodation = false;
                    $scope.transport = false;
                    $scope.VehicleInsurance.Repair = "";
                    $scope.VehicleInsurance.Accomodation = "";
                    $scope.form.repair.$touched = false;
                    $scope.form.accomodation.$touched = false;
                }
                if ($scope.packages[i].Name == "Repair" || $scope.packages[i].Name == "Popravka") {
                    $scope.repair = true;
                    $scope.towing = false;
                    $scope.accomodation = false;
                    $scope.transport = false;
                    $scope.VehicleInsurance.Towing = "";
                    $scope.VehicleInsurance.Accomodation = "";
                    $scope.form.towing.$touched = false;
                    $scope.form.accomodation.$touched = false;
                }
                if ($scope.packages[i].Name == "Accommodation" || $scope.packages[i].Name == "Smeštaj u hotelu") {
                    $scope.accomodation = true;
                    $scope.repair = false;
                    $scope.towing = false;
                    $scope.transport = false;
                    $scope.VehicleInsurance.Towing = "";
                    $scope.VehicleInsurance.Repair = "";
                    $scope.form.towing.$touched = false;
                    $scope.form.repair.$touched = false;
                }
                if ($scope.packages[i].Name == "Transportation" || $scope.packages[i].Name == "Alternativni prevoz") {
                    $scope.transport = true;
                    $scope.accomodation = false;
                    $scope.repair = false;
                    $scope.towing = false;
                    $scope.VehicleInsurance.Towing = "";
                    $scope.VehicleInsurance.Repair = "";
                    $scope.VehicleInsurance.Accomodation = "";
                    $scope.form.towing.$touched = false;
                    $scope.form.repair.$touched = false;
                    $scope.form.accomodation.$touched = false;
                }
            }
        }
        
    };

    /** CALCULATOR **/

    $scope.calculate = function () {

        if (!$scope.isChecked)
            $scope.Insurance.Sport = 0;

        RiskService.calculatePrice($scope.Insurance).then(function (response) {
            $scope.price = response.data;
        });
    };
    

    /** DATEPICKER **/

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        minDate: new Date(),
        startingDay: 1
    };

    $scope.toggleMin = function () {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.openSd = function () {
        $scope.sd.opened = true;
    };

    $scope.openEd = function () {
        $scope.ed.opened = true;
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.sd = {
        opened: false
    };

    $scope.ed = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
      {
          date: tomorrow,
          status: 'full'
      },
      {
          date: afterTomorrow,
          status: 'partially'
      }
    ];

    function getDayClass(data) {
        var date = data.date,
	      mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }
        return '';
    }

});