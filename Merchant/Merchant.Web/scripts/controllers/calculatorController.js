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

    translateSelectOptions();
   
    function translateSelectOptions() {
        $scope.sportsSelectOptions = getSelectOptions("sports", $rootScope.currentLanguage);
        $scope.regionsSelectOptions = getSelectOptions("regions", $rootScope.currentLanguage);
        $scope.agesSelectOptions = getSelectOptions("ages", $rootScope.currentLanguage);
        $scope.valuesSelectOptions = getSelectOptions("values", $rootScope.currentLanguage);
    }

    function getSelectOptions(collectionName, language) {
        var options;
        if (language == "sr") {
            options = "o.Id as o.Name_Srb for o in " + collectionName;
        }
        else if (language == "en") {
            options = "o.Id as o.Name for o in " + collectionName;
        }
        console.log(options);
        return options;
    }

    $rootScope.$on('languageChanged', function () {
        console.log("test");
        translateSelectOptions();
    });
    
    $scope.$on("languageChanged", function (event, args) {
        console.log("emitovao");
        console.log(args);
    });

    RiskService.getRisksByCategory(1).then(function (response) {
        $scope.travelRisks = response.data;
    });

    RiskService.getRiskItemsForRisk("Sport").then(function (response) {
        $scope.sports = response.data;
    });

    RiskService.getRiskItemsForRisk("Region").then(function (response) {
        $scope.regions = response.data;
    });

    RiskService.getRiskItemsForRisk("Age").then(function (response) {
        $scope.ages = response.data;
    });

    RiskService.getRiskItemsForRisk("InsuredValue").then(function (response) {
        $scope.values = response.data;
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