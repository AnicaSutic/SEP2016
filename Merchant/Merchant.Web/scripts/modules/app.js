var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'ngSanitize', 'pascalprecht.translate']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {

    $urlRouterProvider.otherwise("/Home/HomePage");

    $stateProvider
        .state('home', {
            url: '/Home/HomePage',
            templateUrl: '/Home/HomePage',
            controller: 'HomeController'
        })
        .state('terms', {
            url: '/Home/TermsAndConditions',
            templateUrl: '/Home/TermsAndConditions',
            controller: 'HomeController'
        })
        .state('insurance', {
            url: '/Home/Insurance',
            templateUrl: '/Home/Insurance',
            controller: 'MainController'
        })
        .state('insurance.travel', {
            url: '/Travel',
            templateUrl: '/Home/Travel'
        })
        .state('insurance.insurants', {
            url: '/Insurants',
            templateUrl: '/Home/Insurants'
        })
        .state('insurance.others', {
            url: '/Others',
            templateUrl: '/Home/Others'
        });

    var eng =
        {
            english: "English",
            serbian: "Serbian",
            home: "Home",
            startNow: "Buy insurance",
            welcome: "Welcome",
            okina: "CareTravel",
            insurance: "Insurance packages",
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
            selValue: "Select insured value",
            errReg: "You must select a region!",
            errNumReq: "You must enter a number!",
            errNumMin: "Number of persons must be greater than zero!",
            errAge: "You must select an age!",
            errSport: "You must select a sport!",
            errValue: "You must select an insured value!",
            next: "Next",
            previous: "Previous",
            details: "Details about insurants",
            name: "Name",
            errName: "You must enter a name!",
            surname: "Surname",
            errSurname: "You must enter a surname!",
            jmbg: "Unique personal number",
            errJmbg: "You must enter a personal number!",
            errJmbgL: "Personal number must contain 13 digits!",
            email: "E-mail",
            errEmail: "You must enter an email!",
            errEmailValidate: "Invalid email address!",
            address: "Address",
            errAddress: "You must enter an address!",
            telNumber: "Phone number",
            errTelNum: "You must enter a phone number!",
            homeArea: "Surface area",
            errHomeArea: "You must enter a surface of the area!",
            errHomeAreaMin: "The surface of the area must be greater than zero!",
            homeAge: "Age of the building",
            errHomeAge: "You must enter an age of the building!",
            errHomeAgeMin: "Age of the building must be greater than zero!",
            homeValue: "Estimated value",
            errHomeValueMin: "Estimated value must be greater than zero!",
            errHomeValue: "You must enter a value!",
            insuredFrom: "Insured from",
            selEnsured: "Select",
            errEnsured: "You must select one option!",
            packageV: "Package you want to buy",
            selPackage: "Select package",
            errPackage: "You must select a package!",
            brand: "Car brand",
            errBrand: "You must enter a car brand!",
            type: "Car type",
            errType: "You must enter car type!",
            year: "Year od production",
            errYear: "You must enter year of production!",
            errYearMin: "Year of production must be greater than zero!",
            licence: "License plate number",
            errLicence: "You must enter license plate number!",
            chassis: "Chassis number",
            errChassis: "You must enter chassis number!",
            startDate: "From",
            endDate: "To",
            currency: "euros",
            errStart: "You must enter a start date!",
            errEnd: "You must enter an end date!",
            errDateEnd: "End date is not valid! Check start date!",
            errDateStart: "Start date is not valid! Check end date!",
            towing: "Distance (km)",
            repair: "Price",
            accommodation: "Number of days",
            errTowing: "You must enter the distance!",
            errTowingMin: "Distance must be greater than zero!",
            errRepair: "You must enter the price!",
            errRepairMin: "Price must be greater than zero!",
            errAccomodation: "You must enter the number of days!",
            errAccommodationMin: "Number of days must be greater than zero!",
            addInsurant: "Add new insurant",
            deleteInsurant: "Delete insurant",
            passport: "Passport number",
            errPassportPattern: "Wrong passport number!",
            errPassport: "You must enter a passport number!",
            add: "Add",
            noInsurants: "You haven't added any insurants yet.",
            isBuyer: "Choose as a buyer of the insurance",
            noMoreInsurants: "You finished adding the insurants. You can proceed with your payment.",
            buy: "Buy",
            ownerDetails: "Details about the owner",
            otherInsurance: "Do you wish to buy another insurance?",
            buyVehicle: "Buy vehicle insurance",
            buyHome: "Buy home insurance"
        };
    var ser =
        {
            english: "Engleski",
            serbian: "Srpski",
            home: "Početna strana",
            startNow: "Kupi osiguranje",
            welcome: "Dobrodošli",
            okina: "CareTravel",
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
            errName: "Morate uneti ime!",
            surname: "Prezime",
            errSurname: "Morate uneti prezime!",
            jmbg: "JMBG",
            errJmbg: "Morate uneti JMBG!",
            errJmbgL: "JMBG mora sadržati 13 cifara!",
            email: "E-mail",
            errEmail: "Morate uneti e-mail adresu!",
            errEmailValidate: "Nevalidna e-mail adresa!",
            address: "Adresa",
            errAddress: "Morate uneti adresu!",
            telNumber: "Telefon number",
            errTelNum: "Morate uneti broj telefona!",
            homeArea: "Površina stana",
            errHomeArea: "Morate uneti površinu stana!",
            errHomeAreaMin: "Površina mora biti veća od nule!",
            homeAge: "Starost stana",
            errHomeAge: "Morate uneti starost stana!",
            errHomeAgeMin: "Starost stana mora biti veća od nule!",
            homeValue: "Procenjena vrednost stana",
            errHomeValue: "Morate uneti vrednost stana!",
            errHomeValueMin: "Vrednost stana mora biti veća od nule!",
            insuredFrom: "Osigurano od",
            selEnsured: "Izaberite",
            errEnsured: "Morate izabrati jednu vrednost!",
            packageV: "Paket koji želite da kupite",
            selPackage: "Izaberiste paket",
            errPackage: "Morate izabrati paket!",
            brand: "Marka automobila",
            errBrand: "Morate uneti marku automobila!",
            type: "Tip automobila",
            errType: "Morate uneti tip automobila!",
            year: "Godina proizvodnje",
            errYear: "Morate uneti godinu proizvodnje!",
            errYearMin: "Godina proizvodnje mora biti veća od nule!",
            licence: "Broj registarske tablice",
            errLicence: "Morate uneti broj registarske tablice!",
            chassis: "Broj šasije",
            errChassis: "Morate uneti broj šasije!",
            startDate: "Od",
            endDate: "Do",
            currency: "eura",
            errStart: "Morate uneti datum početka!",
            errEnd: "Morate uneti datum završetka!",
            errDateEnd: "Datum završetka nije validan! Proverite početni datum!",
            errDateStart: "Datum početka nije validan! Proverite datum završetka!",
            towing: "Kilometraža (km)",
            repair: "Cena",
            accommodation: "Broj dana",
            errTowing: "Morate uneti kilometražu!",
            errTowingMin: "Kilometraža mora biti veća od nule!",
            errRepair: "Morate uneti cenu!",
            errRepairMin: "Cena mora biti veća od nule!",
            errAccommodation: "Morate uneti broj dana!",
            errAccommodationMin: "Broj dana mora biti veći od nule!",
            addInsurant: "Dodaj novog osiguranika",
            deleteInsurant: "Obriši osiguranika",
            passport: "Broj pasoša",
            errPassportPattern: "Pogrešan broj pasoša!",
            errPassport: "Morate uneti broj pasoša!",
            add: "Dodaj",
            noInsurants: "Još uvek niste dodali nijednog osiguranika.",
            isBuyer: "Odabrati kao kupca osiguranja",
            noMoreInsurants: "Završili ste sa dodavanjem osiguranika. Možete nastaviti dalje sa kupovinom.",
            buy: "Kupi",
            ownerDetails: "Detalji o vlasniku",
            otherInsurance: "Da li želite da kupite drugo osiguranje?",
            buyVehicle: "Kupi osiguranje vozila",
            buyHome: "Kupi stambeno osiguranje"
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