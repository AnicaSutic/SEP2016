﻿var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'ngSanitize', 'pascalprecht.translate']);

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
            errDateStart: "Start date is not valid! Check end date!"
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
            errDateStart: "Datum početka nije validan! Proverite datum završetka! "
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