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
        .state('otherInsurances', {
            url: '/Home/OtherInsurances',
            templateUrl: '/Home/OtherInsurances',
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
            calculatePrice: "Calculate the price of your insurance.",
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
            brand: "Car brand",
            year: "The year od production",
            licence: "The license plate number",
            chassis: "Chassis number",
            startDate: "From",
            endDate: "To",
            currency: "euros",
            errStart: "You must enter start date!",
            errEnd: "You must enter end date!"
        };
    var ser =
        {
            english: "Engleski",
            serbian: "Srpski",
            home: "Početna strana",
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
            brand: "Marka automobila",
            year: "Godina proizvodnje",
            licence: "Broj registarske tablice",
            chassis: "Broj šasije",
            startDate: "Od",
            endDate: "Do",
            currency: "dinara",
            errStart: "Niste uneli datum početka!",
            errEnd: "Niste uneli datum završetka!"
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
app.controller('NavbarController', function ($scope, $state, $translate) {

    $scope.changeCurrentLanguage = function (key) {
        $translate.use(key);
    };

});
app.controller('CalculatorController', function ($scope, RiskService) {

    $scope.travelRisks = {};

    $scope.homeRisks = {};

    $scope.isChecked = false;

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
   
    $scope.sports = {};
    $scope.values = {};
    $scope.ages = {};
    $scope.regions = {};
    $scope.ensuredBy = {};
    

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

    $scope.checkForm = function () {
        
        $scope.showAnotherInsurance = true;
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