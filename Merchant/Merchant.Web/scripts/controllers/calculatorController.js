app.controller('CalculatorController', function ($scope, $rootScope, RiskService, TranslateService) {

    $scope.travelRisks = {};

    $scope.homeRisks = {};

    $scope.isChecked = false;

    $scope.dateStart = false;

    $scope.dateEnd = false;

    $scope.price = 0.0;

    $scope.Insurance = {
        Duration: "",
        Region: 0,
        NumberOfInsurants: "",
        InsuredValue: 0,
        Age: 0,
        Sport: 0,
        StartDate: "",
        EndDate: ""
    };

    $scope.HomeInsurance = {
        Area : "",
        Age: "",
        Value: "",
        EnsuredBy: 0
    };


    function translateSelectOptions() {
        $scope.regions = getSelectOptions($scope.regionsResponseData, $rootScope.currentLanguage);
        $scope.sports = getSelectOptions($scope.sportsResponseData, $rootScope.currentLanguage);
        $scope.ages = getSelectOptions($scope.agesResponseData, $rootScope.currentLanguage);
        $scope.values = getSelectOptions($scope.valuesResponseData, $rootScope.currentLanguage);
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

    RiskService.getRiskItemsForRisk("Region").then(function (response) {
        $scope.regionsResponseData = response.data;
        $scope.regions = getSelectOptions(response.data, $rootScope.currentLanguage);
    });

    RiskService.getRiskItemsForRisk("Age").then(function (response) {
        $scope.agesResponseData = response.data;
        $scope.ages = getSelectOptions(response.data, $rootScope.currentLanguage);
    });

    RiskService.getRiskItemsForRisk("InsuredValue").then(function (response) {
        $scope.valuesResponseData = response.data;
        $scope.values = getSelectOptions(response.data, $rootScope.currentLanguage);
    });

    RiskService.getOtherCategories().then(function (response) {
        $scope.categories = response.data;
    });

    $scope.calculate = function () {
        
        if (!$scope.isChecked)
            $scope.Insurance.Sport = 0;
        
        RiskService.calculatePrice($scope.Insurance).then(function (response) {
            $scope.price = response.data;
        });
    };

    

    $scope.formDetails = function () {
        console.log(form.number);
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
       
        if(c == "Home") {
            $scope.showHomeForm = true;
        }
        if(c  == "Vehicle") {
            $scope.showVehicleForm = true;
        }
     };

   
    $scope.cancelOther = function () {
        $scope.showAnotherInsurance = false;
        $scope.showHomeForm = false;
        $scope.showVehicleForm = false;
        $scope.HomeInsurance.Area = "";
        $scope.HomeInsurance.Age = "";
        $scope.HomeInsurance.Value = "";
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