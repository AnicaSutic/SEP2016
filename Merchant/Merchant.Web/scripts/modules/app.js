var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'ngSanitize', 'pascalprecht.translate']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

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
        .state('insurance', {
            url: '/Home/Insurance',
            templateUrl: '/Home/Insurance',
            controller: 'HomeController'
        })
        .state('insurants', {
            url: '/Home/Insurants',
            templateUrl: '/Home/Insurants'
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
            calculatePrice: "Calculate the price of your insurance.",
            travelInsurance: "Travel insurance",
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
            errTelNum: "You must enter phone number!"
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
            travelInsurance: "Putno osiguranje",
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
            errTelNum: "Niste uneli broj telefona!"

        };

    $translateProvider.translations('en', eng);
    $translateProvider.translations('sr', ser);
    $translateProvider.preferredLanguage('en');
});