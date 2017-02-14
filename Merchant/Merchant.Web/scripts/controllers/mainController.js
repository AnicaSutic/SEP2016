app.controller('MainController',['$scope', '$rootScope', '$state', '$filter', '$window', 'RiskService', 'TranslateService', 'PurchaseService', 'PaypalService', function ($scope, $rootScope, $state, $filter, $window, RiskService, TranslateService, PurchaseService, PaypalService) {

    $scope.travelRisks = {};
    $scope.homeRisks = {};

    $scope.forms = {};

    $scope.isChecked = false;

    $scope.areDatesValid = false;

    $scope.travelPrice = 0.0;
    $scope.vehiclePrice = 0.0;
    $scope.homePrice = 0.0;

    $rootScope.areTermsAccepted = sessionStorage.getItem("areTermsAccepted");
    $rootScope.purchaseStep1 = sessionStorage.getItem("purchaseStep1");
    $rootScope.purchaseStep2 = sessionStorage.getItem("purchaseStep2");
    $rootScope.purchaseStep3 = sessionStorage.getItem("purchaseStep3");
    $rootScope.purchaseStep4 = sessionStorage.getItem("purchaseStep4");

    $scope.showVehicleForm = false;
    $scope.showHomeForm = false;

    $scope.initializeInsurance = function () {
        $scope.Insurance = {
            //Region: 0,
            NumberOfInsurants: 0,
            //InsuredValue: 0,
            //Age: 0,
            //Sport: 0,
            StartDate: "",
            EndDate: "",
            Price: 0
        };
    };

    $scope.initializeHomeInsurance = function () {
        $scope.HomeInsurance = {
            StartDate: "",
            EndDate: "",
            Address: "",
            SurfaceArea: "",
            BuildingAge: "",
            EstimatedValue: "",
            //InsuredFrom: 0,
            OwnerName: "",
            OwnerSurname: "",
            OwnerIdentificationNumber: "",
            Price: 0
        };
    };

    $scope.initializeVehicleInsurance = function () {
        $scope.VehicleInsurance = {
            StartDate: "",
            EndDate: "",
            Brand: "",
            Type: "",
            YearOfProduction: 0,
            LicensePlateNumber: "",
            ChassisNumber: "",
            //Package: 0,
            OwnerName: "",
            OwnerSurname: "",
            OwnerIdentificationNumber: "",
            TowingKm: 0,
            RepairPrice: 0,
            AccommodationDays: 0,
            Price: 0
        };
    };

    $scope.initializeInsuranceDetails = function () {
        $scope.InsuranceDetailsDto = {
            Data: "",
            Type: ""
        };
    };

    $scope.initializeInsurance();
    $scope.initializeHomeInsurance();
    $scope.initializeVehicleInsurance();
    $scope.initializeInsuranceDetails();

    function translateSelectOptions() {
        $scope.regions = getSelectOptions($scope.regionsResponseData, $rootScope.currentLanguage);
        $scope.sports = getSelectOptions($scope.sportsResponseData, $rootScope.currentLanguage);
        $scope.ages = getSelectOptions($scope.agesResponseData, $rootScope.currentLanguage);
        $scope.values = getSelectOptions($scope.valuesResponseData, $rootScope.currentLanguage);
        $scope.insuredFrom = getSelectOptions($scope.insuredFromResponseData, $rootScope.currentLanguage);
        $scope.packages = getSelectOptions($scope.packagesResponseData, $rootScope.currentLanguage);
    };

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
    };

    $rootScope.$on('languageChanged', function () {
        translateSelectOptions();
    });

    /** GET OPTION ITEMS **/

    RiskService.getRiskItemsForRisk("Sport").then(function (response) {
        $scope.sportsResponseData = response.data;
        $scope.sports = getSelectOptions(response.data, $rootScope.currentLanguage);
    });

    RiskService.getRiskItemsForRisk("Insured from").then(function (response) {
        $scope.insuredFromResponseData = response.data;
        $scope.insuredFrom = getSelectOptions(response.data, $rootScope.currentLanguage);
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

    $scope.pickNumber = function () {
        $scope.num = document.getElementById('number').value;
    };

    $scope.getInsuranceDetails = function (insurance, type) {
        $scope.InsuranceDetailsDto.Data = JSON.stringify(insurance);
        $scope.InsuranceDetailsDto.Type = type;
        return $scope.InsuranceDetailsDto;
    };

    /** OTHER INSURANCES **/

    $scope.showVehicleIns = function () {
        $scope.showVehicleForm = true;
        $scope.showHomeForm = false;
    };
    
    $scope.showHomeIns = function () {
        $scope.showHomeForm = true;
        $scope.showVehicleForm = false;
    };

    $scope.cancelHomeIns = function () {
        $scope.showHomeForm = false;
        $scope.initializeHomeInsurance();
    };

    $scope.cancelVehicleIns = function () {
        $scope.showVehicleForm = false;
        $scope.initializeVehicleInsurance();
    };

    $scope.calculateVehicleInsurance = function () {
        var token = $("#antiForgeryToken").val();
        RiskService.calculatePrice($scope.getInsuranceDetails($scope.VehicleInsurance, "Vehicle"), token).then(function (response) {
            $scope.vehiclePrice = response.data;
        });
    };

    $scope.calculateHomeInsurance = function () {
        var token = $("#antiForgeryToken").val();
        RiskService.calculatePrice($scope.getInsuranceDetails($scope.HomeInsurance, "Home"), token).then(function (response) {
            $scope.homePrice = response.data;
        });
    };

    $scope.towing = false;
    $scope.repair = false;
    $scope.accommodation = false;

    $scope.homeInsExists = false;
    $scope.vehicleInsExists = false;

    $scope.onPackageChange = function () {

        if ($scope.VehicleInsurance.Package == 23) {
            $scope.towing = true;
            $scope.repair = false;
            $scope.accommodation = false;
            $scope.VehicleInsurance.RepairPrice = 0;
            $scope.VehicleInsurance.AccommodationDays = 0;
        }
        else if ($scope.VehicleInsurance.Package == 24) {
            $scope.towing = false;
            $scope.repair = true;
            $scope.accommodation = false;
            $scope.VehicleInsurance.TowingKm = 0;
            $scope.VehicleInsurance.AccommodationDays = 0;
        }
        else if ($scope.VehicleInsurance.Package == 25) {
            $scope.towing = false;
            $scope.repair = false;
            $scope.accommodation = true;
            $scope.VehicleInsurance.TowingKm = 0;
            $scope.VehicleInsurance.RepairPrice = 0;
        }
        else {
            $scope.towing = false;
            $scope.repair = false;
            $scope.accommodation = false;
            $scope.VehicleInsurance.RepairPrice = 0;
            $scope.VehicleInsurance.AccommodationDays = 0;
            $scope.VehicleInsurance.TowingKm = 0;
        }
    };

    $scope.addVehicleInsurance = function () {
        $scope.VehicleInsurance.Price = $scope.vehiclePrice;
        //$scope.VehicleInsurance.StartDate = sessionStorage.getItem("StartDate");
        //$scope.VehicleInsurance.EndDate = sessionStorage.getItem("EndDate");
        var token = $("#antiForgeryToken").val();
        console.log($scope.VehicleInsurance);
        //PurchaseService.buyInsurance($scope.getInsuranceDetails($scope.VehicleInsurance, "Vehicle"), token).then(function() {
        //    $scope.vehicleInsExists = true;        
        //});
        $scope.showVehicleForm = false;
    };

    $scope.addHomeInsurance = function () {
        $scope.HomeInsurance.Price = $scope.homePrice;
        //$scope.HomeInsurance.StartDate = sessionStorage.getItem("StartDate");
        //$scope.HomeInsurance.EndDate = sessionStorage.getItem("EndDate");
        var token = $("#antiForgeryToken").val();
        PurchaseService.buyInsurance($scope.getInsuranceDetails($scope.HomeInsurance, "Home"), token).then(function () {
            $scope.homeInsExists = true;
        });
        $scope.showHomeForm = false;
    };

    $scope.addOthers = function () {
        sessionStorage.setItem("purchaseStep3", 3);
        $state.go('insurance.insurants');
    };

    /***/
  
    $scope.checkDate = function () {
        if ($scope.Insurance.StartDate != "" && $scope.Insurance.EndDate != "") {
            if ($scope.Insurance.StartDate < $scope.Insurance.EndDate) {
                $scope.areDatesValid = true;
            } else {
                $scope.areDatesValid = false;
            }
        }
    };
     
    /** INSURANTS **/

    $scope.passportNumberPattern = "^(?!^0+$)[a-zA-Z0-9]{3,20}$";
    $scope.emailPattern = "";

    $scope.buyerExists = false;

    $scope.insurantsCounter = 0;
    $scope.addedInsurants = [];
    $scope.showInsForm = false;

    $scope.initializeCurrentInsurant = function () {
        $scope.CurrentInsurant = {
            Name: "",
            Surname: "",
            IdentificationNumber: "",
            PassportNumber: "",
            Address: "",
            TelephoneNumber: "",
            Email: "",
            IsBuyer: false
        };
        $scope.showInsForm = false;
        //$scope.insurantForm.name.$touched = false;
        //$scope.insurantForm.surname.$touched = false;
        //$scope.insurantForm.jmbg.$touched = false;
        //$scope.insurantForm.email.$touched = false;
        //$scope.insurantForm.address.$touched = false;
        //$scope.insurantForm.telNumber.$touched = false;
        //$scope.insurantForm.passport.$touched = false;
    };

    $scope.initializeBuyer = function () {
        $scope.Buyer = {
            Name: "",
            Surname: "",
            IdentificationNumber: "",
            PassportNumber: "",
            Address: "",
            TelephoneNumber: "",
            Email: "",
            IsBuyer: true
        };
    };

    $scope.initializeCurrentInsurant();
    $scope.initializeBuyer();

    $scope.showInsurantForm = function () {
        $scope.showInsForm = true;
    };

    $scope.addInsurant = function () {
        if ($scope.CurrentInsurant.IsBuyer) {
            $scope.buyerExists = true;
            $scope.Buyer.Name = $scope.CurrentInsurant.Name;
            $scope.Buyer.Surname = $scope.CurrentInsurant.Surname;
            $scope.Buyer.IdentificationNumber = $scope.CurrentInsurant.IdentificationNumber;
            $scope.Buyer.PassportNumber = $scope.CurrentInsurant.PassportNumber;
            $scope.Buyer.Address = $scope.CurrentInsurant.Address;
            $scope.Buyer.TelephoneNumber = $scope.CurrentInsurant.TelephoneNumber;
            $scope.Buyer.Email = $scope.CurrentInsurant.Email;
        }
        $scope.addedInsurants.push($scope.CurrentInsurant);
        $scope.initializeCurrentInsurant();
        $scope.insurantsCounter += 1;
    };

    $scope.cancelInsurant = function () {
        $scope.initializeCurrentInsurant();
        if ($scope.CurrentInsurant.IsBuyer)
            $scope.initializeBuyer();
    };

    $scope.deleteInsurant = function (insurant, index) {
        $scope.addedInsurants.splice(index, 1);
        $scope.insurantsCounter -= 1;
        if(insurant.IsBuyer) {
            $scope.buyerExists = false;
            $scope.initializeBuyer();
        }
    };

    $scope.addBuyer = function () {
        sessionStorage.setItem("purchaseStep4", 4);
        $state.go('insurance.buyer');
        
    };

    $scope.addInsurants = function () {
        var token = $("#antiForgeryToken").val();
        if(!$scope.buyerExists)
            $scope.addedInsurants.push($scope.Buyer);
        PurchaseService.addInsurants($scope.addedInsurants, token).then(function (response) {
            console.log("dodao");
            console.log(response);
            if (response.data.isSuccessful) {
                console.log("uspesno");
                var data = {
                    OrderId: response.data.orderId,
                    Price: response.data.price
                };
                PaypalService.createPayment(data)
                    .then(
                        function (response) {
                            if (response != null && response.data != null) {
                                $window.location.href = response.data;
                            } else {
                                console.log("no url");
                            }
                        }, function(error) {
                            console.log(error.message);
                        });
            }
        });
    };

    /** CALCULATOR **/

    $scope.Token = {};

    $scope.calculate = function () {
        var token = $("#antiForgeryToken").val();
        RiskService.calculatePrice($scope.getInsuranceDetails($scope.Insurance, "Travel"), token).then(function (response) {
            $scope.travelPrice = response.data;
        });
    };

    $scope.cancelTravelInsurance = function () {
        $scope.initializeInsurance();
        $state.go('home');
    };

    $scope.addTravelInsurance = function () {
        $scope.Insurance.Price = $scope.travelPrice;
        var token = $("#antiForgeryToken").val();
        PurchaseService.buyInsurance($scope.getInsuranceDetails($scope.Insurance, "Travel"), token).then(function (response) {
            sessionStorage.setItem("purchaseStep2", 2);
            sessionStorage.setItem("StartDate", $scope.Insurance.StartDate);
            sessionStorage.setItem("EndDate", $scope.Insurance.EndDate);
            $state.go('insurance.others');
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

    $scope.setSelectedItem = function (item) {
        $scope.travelSelected = item === "travel" ? true : false;
        $scope.insurantsSelected = item === "insurants" ? true : false;
        $scope.buyerSelected = item === "buyer" ? true : false;
        $scope.othersSelected = item === "others" ? true : false;
        $scope.othersNewSelected = item === "othersNew" ? true : false;
    }


}]);