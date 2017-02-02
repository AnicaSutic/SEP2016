var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'ngSanitize', 'pascalprecht.translate']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {

    $urlRouterProvider.otherwise("/Home/HomePage");

    $stateProvider
        .state('home', {
            url: '/Home/HomePage',
            templateUrl: '/Home/HomePage',
            controller: 'HomeController'
        })
        .state('calculator', {
            url: '/Home/CalculatePrice',
            templateUrl: '/Home/CalculatePrice',
            controller: 'CalculatorController'
        })
        .state('otherInsurance', {
            url: '/Home/OtherInsurance',
            templateUrl: '/Home/OtherInsurance',
            controller: 'CalculatorController'
        })
        .state('insurance', {
            url: '/Home/Insurance',
            templateUrl: '/Home/Insurance',
            controller: 'HomeController'
        })
        .state('insurants', {
            url: '/Home/Insurants/:numOfInsurants',
            templateUrl: '/Home/Insurants',
            controller: 'InsurantsController'
        });

    var eng =
        {
            english: "English",
            serbian: "Serbian",
            home: "Home",
            startNow: "Buy insurance",
            welcome: "Welcome",
            okina: "Okina",
            insurance: "Insurance package",
            calculate: "Calculate the price",
            duration: "Insurance duration",
            region: "Region",
            number: "Number of insurants",
            age: "Age",
            sport: "Sport",
            value: "Insured value",
            calc: "Calculate",
            total: "Total price",
            openCal: "Open calendar",
            chooseAnother: "Choose another insurance",
            cancel: "Cancel",
            calculatePrice: "Calculate the price of your insurance",
            travelInsurance: "Travel insurance",
            vehicleInsurance: "Vehicle insurance",
            homeInsurance: "Home insurance",
            selReg: "Select region",
            selAge: "Select age",
            selSport: "Select sport",
            selValue: "Select value",
            errReg: "You must select region!",
            errNumReq: "You must enter number!",
            errNumMin: "Number of person must be more the zero!",
            errAge: "You must select age!",
            errSport: "You must select sport!",
            errValue: "You must select value!",
            next: "Next",
            previous: "Previous",
            details: "Details about insurants",
            name: "Name",
            errName: "You must enter name!",
            surname: "Surname",
            errSurname: "You must enter surname!",
            jmbg: "Unique personal number",
            errJmbg: "You must enter personal number!",
            errJmbgL: "Personal number must contain 13 digits!",
            address: "Address",
            errAddress: "You must enter address!",
            telNumber: "Phone number",
            errTelNum: "You must enter phone number!",
            homeArea: "Building area",
            errHomeArea: "You must enter building area!",
            homeAge: "Building age",
            errHomeAge: "You must enter building age!",
            homeValue: "Estimated value",
            errHomeValue: "You must enter value!",
            ensuredBy: "Ensured by",
            selEnsured: "Select",
            errEnsured: "You must select one option!",
            packageV: "Package you want to by",
            selPackage: "Select package",
            errPackage: "You must select package!",
            brand: "Car brand",
            year: "The year od production",
            licence: "The license plate number",
            chassis: "Chassis number",
            startDate: "From",
            endDate: "To",
            currency: "euros",
            errStart: "You must enter start date!",
            errEnd: "You must enter end date!",
            errDateEnd: "End date is not valid! Check start date!",
            errDateStart: "Start date is not valid! Check end date!",
            towing: "Distance(km)",
            repair: "Certain price",
            accomodation: "Number of days",
            errTowing: "You must enter distance!",
            errRepair: "You must enter price!",
            errAccomodation: "You muste enter number of days!"
        };
    var ser =
        {
            english: "Engleski",
            serbian: "Srpski",
            home: "Početna strana",
            startNow: "Kupi osiguranje",
            welcome: "Dobrodošli",
            okina: "Okina",
            insurance: "Osiguranje",
            calculate: "Izračunajte cenu osiguranja",
            duration: "Trajanje osiguranja",
            region: "Region",
            number: "Broj osiguranika",
            age: "Starost",
            sport: "Sport",
            value: "Osiguravajuća vrednost",
            calc: "Izračunaj",
            total: "Ukupna cena",
            openCal: "Otvori kalendar",
            calculatePrice: "Izračunajte cenu vašeg osiguranja",
            chooseAnother: "Izaberite druga osiguranja",
            cancel: "Otkaži",
            travelInsurance: "Putno osiguranje",
            vehicleInsurance: "Osiguranje vozila",
            homeInsurance: "Stambeno osiguranje",
            selReg: "Izaberite region",
            selAge: "Izaberite starost",
            selSport: "Izaberite sport",
            selValue: "Izaberite vrednost",
            errReg: "Morate selektovati region!",
            errNumReq: "Unesite broj osoba!",
            errNumMin: "Minimalan broj osoba 1!",
            errAge: "Morate selektovati starost!",
            errSport: "Morate selektovati sport!",
            errValue: "Morate selektovati vrednost",
            next: "Nastavi dalje",
            previous: "Povratak na prethodnu stranu",
            details: "Podaci o osiguranicima",
            name: "Ime",
            errName: "Niste uneli ime!",
            surname: "Prezime",
            errSurname: "Niste uneli prezime!",
            jmbg: "JMBG",
            errJmbg: "Niste uneli JMBG!",
            errJmbgL: "JMBG mora sadržati 13 cifara!",
            address: "Adresa",
            errAddress: "Niste uneli adresu!",
            telNumber: "Telefon number",
            errTelNum: "Niste uneli broj telefona!",
            homeArea: "Površina stana",
            errHomeArea: "Niste uneli površinu stana",
            homeAge: "Starost stana",
            errHomeAge: "Niste uneli starost stana",
            homeValue: "Procenjena vrednost stana",
            errHomeValue: "Niste uneli vrednost stana!",
            ensuredBy: "Osigurano od",
            selEnsured: "Izaberite",
            errEnsured: "Niste izabrali nijednu opciju!",
            packageV: "Paket koji želite da kupite",
            selPackage: "Izaberiste paket",
            errPackage: "Niste izabrali paket!",
            brand: "Marka automobila",
            year: "Godina proizvodnje",
            licence: "Broj registarske tablice",
            chassis: "Broj šasije",
            startDate: "Od",
            endDate: "Do",
            currency: "dinara",
            errStart: "Niste uneli datum početka!",
            errEnd: "Niste uneli datum završetka!",
            errDateEnd: "Datum završetka nije validan! Proverite početni datum!",
            errDateStart: "Datum početka nije validan! Proverite datum završetka!",
            towing: "Kilometraža(km)",
            repair: "Cena",
            accomodation: "Broj dana",
            errTowing: "Niste uneli kilometražu!",
            errRepair: "Niste uneli cenu!",
            errAccomodation: "Niste uneli broj dana!"
        };

    $.ajax({
        url: '/Risk/GetAllCategories',
        success: function (response) {
            setTranslations(response, "eng");
            setTranslations(response, "srb");
        }
    });

    $.ajax({
        url: '/Risk/GetAllRisks',
        success: function (response) {
            setTranslations(response, "eng");
            setTranslations(response, "srb");
        }
    });

    $.ajax({
        url: '/Risk/GetAllRiskItems',
        success: function (response) {
            setTranslations(response, "eng");
            setTranslations(response, "srb");
        }
    });

    function setTranslations(response, language) {
        for (var i = 0; i < response.length; i++) {
            var item = response[i];
            if (language === "eng") {
                eng[item.Name] = item.Name;
            }
            else if (language === "srb") {
                ser[item.Name] = item.Name_Srb;
            }
        }
    }

    $translateProvider.translations('en', eng);
    $translateProvider.translations('sr', ser);
    $translateProvider.preferredLanguage('en');

    console.log(eng);
    console.log(ser);
});
app.controller('HomeController', function ($scope, $window, RiskService) {

    $scope.showForm = false;
    $scope.showAnotherInsurance = false;

    $scope.risks = {};
    $scope.categories = {};

    $scope.sports = {};
    $scope.values = {};
    $scope.ages = {};
    $scope.regions = {};

    /** METHODS **/

    $scope.addPolicy = function () {
        $scope.showForm = true;
    };

    $scope.cancelPolicy = function () {
        $scope.showForm = false;
    };

    $scope.chooseAnother = function () {
        $scope.showAnotherInsurance = true;
    };

    //ovde treba ponistavati ako su unete neke vrednosti za osiguranje da se ne bi i ono poslalo
    $scope.cancelOther = function () {
        $scope.showAnotherInsurance = false;
    };
    
});
app.controller('NavbarController', ['$scope', '$rootScope' ,'$state', '$translate', 'TranslateService', function ($scope, $rootScope, $state, $translate, TranslateService) {

    $rootScope.currentLanguage = "en";

    $scope.changeCurrentLanguage = function (key) {
        $translate.use(key);
        $rootScope.currentLanguage = key;
        $rootScope.$emit('languageChanged', {});
    };

}]);
app.controller('CalculatorController', function ($scope, $rootScope, RiskService, TranslateService) {

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
        InsuredBy: 0
    };

    $scope.VehicleInsurance = {
        Package: 0,
        Towing : "",
        Repair: "",
        Accomodation: ""
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

    RiskService.getRiskItemsForRisk("InsuredBy").then(function (response) {
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

    RiskService.getRiskItemsForRisk("InsuredValue").then(function (response) {
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

    $scope.calculate = function () {
        
        if (!$scope.isChecked)
            $scope.Insurance.Sport = 0;
        
        RiskService.calculatePrice($scope.Insurance).then(function (response) {
            $scope.price = response.data;
        });
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
        if(c == "Home" || c == "Stambeno") {
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
                if ($scope.packages[i].Name == "Towing" || $scope.packages[i].Name == "Slepovanje") {
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
                if ($scope.packages[i].Name == "Accomodation" || $scope.packages[i].Name == "Smestaj u hotelu") {
                    $scope.accomodation = true;
                    $scope.repair = false;
                    $scope.towing = false;
                    $scope.transport = false;
                    $scope.VehicleInsurance.Towing = "";
                    $scope.VehicleInsurance.Repair = "";
                    $scope.form.towing.$touched = false;
                    $scope.form.repair.$touched = false;
                }
                if ($scope.packages[i].Name == "Transport" || $scope.packages[i].Name == "Alternativni prevoz") {
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
app.controller('InsurantsController', function ($scope, $stateParams) {

    $scope.numOfInsurants = $stateParams.numOfInsurants;
    $scope.counterForInsurants = 0;

    $scope.addedInsurants = [];

    $scope.Insurant = {
        Name: "",
        Surname: "",
        IdentNumber: "",
        Address: "",
        TelNumber: ""
    };

    $scope.addInsurant = function () {
        $scope.addedInsurants.push($scope.Insurant);
        $scope.Insurant = {
            Name: "",
            Surname: "",
            IdentNumber: "",
            Address: "",
            TelNumber: ""
        };
        $scope.counterForInsurants += 1;
    };

    $scope.deleteInsurant = function () {
        $scope.addedInsurants.pop();
        $scope.counterForInsurants -= 1;
    };

    $scope.finish = function () {

    };

});
app.factory('RiskService', function ($http) {
    return ({
        getRisksByCategory : function(id) {
            return $http.get('/Risk/GetRisksByCategory/' + id);
        },
        getOtherCategories : function() {
            return $http.get('/Risk/GetOtherCategories');
        },
        getAllCategories: function () {
            return $http.get('/Risk/GetAllCategories');
        },
        getRiskItemsForRisk: function (name) {
            return $http.get('/Risk/GetRiskItemsForRisk/'+ name);
        },
        calculatePrice: function (ins) {
            return $http.post('/Risk/Calculate', ins);
        }
    });
});