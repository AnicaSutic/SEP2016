var app=angular.module("app",["ui.bootstrap","ui.router","ngSanitize","pascalprecht.translate"]);app.config(function(e,a,n,r){function t(e,a){for(var n=0;n<e.length;n++){var r=e[n];"eng"===a?s[r.Name]=r.Name:"srb"===a&&(o[r.Name]=r.Name_Srb)}}a.otherwise("/Home/HomePage"),e.state("home",{url:"/Home/HomePage",templateUrl:"/Home/HomePage",controller:"HomeController"}).state("calculator",{url:"/Home/CalculatePrice",templateUrl:"/Home/CalculatePrice",controller:"CalculatorController"}).state("otherInsurances",{url:"/Home/OtherInsurances",templateUrl:"/Home/OtherInsurances",controller:"CalculatorController"}).state("insurance",{url:"/Home/Insurance",templateUrl:"/Home/Insurance",controller:"HomeController"}).state("insurants",{url:"/Home/Insurants/:numOfInsurants",templateUrl:"/Home/Insurants",controller:"InsurantsController"});var s={english:"English",serbian:"Serbian",home:"Home",startNow:"Buy insurance",welcome:"Welcome",okina:"Okina",insurance:"Insurance package",calculate:"Calculate the price",duration:"Insurance duration",region:"Region",number:"Number of insurants",age:"Age",sport:"Sport",value:"Insured value",calc:"Calculate",total:"Total price",openCal:"Open calendar",chooseAnother:"Choose another insurance",cancel:"Cancel",calculatePrice:"Calculate the price of your insurance.",travelInsurance:"Travel insurance",vehicleInsurance:"Vehicle insurance",homeInsurance:"Home insurance",selReg:"Select region",selAge:"Select age",selSport:"Select sport",selValue:"Select value",errReg:"You must select region!",errNumReq:"You must enter number!",errNumMin:"Number of person must be more the zero!",errAge:"You must select age!",errSport:"You must select sport!",errValue:"You must select value!",next:"Next",details:"Details about insurants",name:"Name",errName:"You must enter name!",surname:"Surname",errSurname:"You must enter surname!",jmbg:"Unique personal number",errJmbg:"You must enter personal number!",errJmbgL:"Personal number must contain 13 digits!",address:"Address",errAddress:"You must enter address!",telNumber:"Phone number",errTelNum:"You must enter phone number!",homeArea:"Building area",errHomeArea:"You must enter building area!",homeAge:"Building age",errHomeAge:"You must enter building age!",homeValue:"Estimated value",errHomeValue:"You must enter value!",ensuredBy:"Ensured by",selEnsured:"Select",errEnsured:"You must select one option!",packageV:"Package you want to by",brand:"Car brand",year:"The year od production",licence:"The license plate number",chassis:"Chassis number",startDate:"From",endDate:"To",currency:"euros",errStart:"You must enter start date!",errEnd:"You must enter end date!",errDateEnd:"End date is not valid! Check start date!",errDateStart:"Start date is not valid! Check end date!"},o={english:"Engleski",serbian:"Srpski",home:"Početna strana",startNow:"Kupi osiguranje",welcome:"Dobrodošli",okina:"Okina",insurance:"Osiguranje",calculate:"Izračunajte cenu osiguranja",duration:"Trajanje osiguranja",region:"Region",number:"Broj osiguranika",age:"Starost",sport:"Sport",value:"Osiguravajuća vrednost",calc:"Izračunaj",total:"Ukupna cena",openCal:"Otvori kalendar",calculatePrice:"Izračunajte cenu vašeg osiguranja",chooseAnother:"Izaberite druga osiguranja",cancel:"Otkaži",travelInsurance:"Putno osiguranje",vehicleInsurance:"Osiguranje vozila",homeInsurance:"Stambeno osiguranje",selReg:"Izaberite region",selAge:"Izaberite starost",selSport:"Izaberite sport",selValue:"Izaberite vrednost",errReg:"Morate selektovati region!",errNumReq:"Unesite broj osoba!",errNumMin:"Minimalan broj osoba 1!",errAge:"Morate selektovati starost!",errSport:"Morate selektovati sport!",errValue:"Morate selektovati vrednost",next:"Nastavi dalje",details:"Podaci o osiguranicima",name:"Ime",errName:"Niste uneli ime!",surname:"Prezime",errSurname:"Niste uneli prezime!",jmbg:"JMBG",errJmbg:"Niste uneli JMBG!",errJmbgL:"JMBG mora sadržati 13 cifara!",address:"Adresa",errAddress:"Niste uneli adresu!",telNumber:"Telefon number",errTelNum:"Niste uneli broj telefona!",homeArea:"Površina stana",errHomeArea:"Niste uneli površinu stana",homeAge:"Starost stana",errHomeAge:"Niste uneli starost stana",homeValue:"Procenjena vrednost stana",errHomeValue:"Niste uneli vrednost stana!",ensuredBy:"Osigurano od",selEnsured:"Izaberite",errEnsured:"Niste izabrali nijednu opciju!",packageV:"Paket koji želite da kupite",brand:"Marka automobila",year:"Godina proizvodnje",licence:"Broj registarske tablice",chassis:"Broj šasije",startDate:"Od",endDate:"Do",currency:"dinara",errStart:"Niste uneli datum početka!",errEnd:"Niste uneli datum završetka!",errDateEnd:"Datum završetka nije validan! Proverite početni datum!",errDateStart:"Datum početka nije validan! Proverite datum završetka! "};$.ajax({url:"/Risk/GetAllCategories",success:function(e){t(e,"eng"),t(e,"srb")}}),$.ajax({url:"/Risk/GetAllRisks",success:function(e){t(e,"eng"),t(e,"srb")}}),$.ajax({url:"/Risk/GetAllRiskItems",success:function(e){t(e,"eng"),t(e,"srb")}}),r.translations("en",s),r.translations("sr",o),r.preferredLanguage("en"),console.log(s),console.log(o)}),app.controller("HomeController",function(e,a,n){e.showForm=!1,e.showAnotherInsurance=!1,e.risks={},e.categories={},e.sports={},e.values={},e.ages={},e.regions={},e.addPolicy=function(){e.showForm=!0},e.cancelPolicy=function(){e.showForm=!1},e.chooseAnother=function(){e.showAnotherInsurance=!0},e.cancelOther=function(){e.showAnotherInsurance=!1}}),app.controller("NavbarController",["$scope","$rootScope","$state","$translate","TranslateService",function(e,a,n,r,t){a.currentLanguage="en",e.changeCurrentLanguage=function(e){r.use(e),a.currentLanguage=e,a.$emit("languageChanged",{})}}]),app.controller("CalculatorController",function(e,a,n,r){function t(){e.regions=s(e.regionsResponseData,a.currentLanguage),e.sports=s(e.sportsResponseData,a.currentLanguage),e.ages=s(e.agesResponseData,a.currentLanguage),e.values=s(e.valuesResponseData,a.currentLanguage)}function s(e,a){for(var n=[],r=0;r<e.length;r++){var t={};t.Id=e[r].Id,"sr"==a?t.Name=e[r].Name_Srb:"en"==a&&(t.Name=e[r].Name),n.push(t)}return n}function o(a){var n=a.date,r=a.mode;if("day"===r)for(var t=new Date(n).setHours(0,0,0,0),s=0;s<e.events.length;s++){var o=new Date(e.events[s].date).setHours(0,0,0,0);if(t===o)return e.events[s].status}return""}e.travelRisks={},e.homeRisks={},e.isChecked=!1,e.dateStart=!1,e.dateEnd=!1,e.price=0,e.Insurance={Duration:"",Region:0,NumberOfInsurants:"",InsuredValue:0,Age:0,Sport:0,StartDate:"",EndDate:""},e.HomeInsurance={Area:"",Age:"",Value:"",EnsuredBy:0},a.$on("languageChanged",function(){t()}),n.getRisksByCategory(1).then(function(a){e.travelRisks=a.data}),n.getRiskItemsForRisk("Sport").then(function(n){e.sportsResponseData=n.data,e.sports=s(n.data,a.currentLanguage)}),n.getRiskItemsForRisk("Region").then(function(n){e.regionsResponseData=n.data,e.regions=s(n.data,a.currentLanguage)}),n.getRiskItemsForRisk("Age").then(function(n){e.agesResponseData=n.data,e.ages=s(n.data,a.currentLanguage)}),n.getRiskItemsForRisk("InsuredValue").then(function(n){e.valuesResponseData=n.data,e.values=s(n.data,a.currentLanguage)}),n.getOtherCategories().then(function(a){e.categories=a.data}),e.calculate=function(){e.isChecked||(e.Insurance.Sport=0),n.calculatePrice(e.Insurance).then(function(a){e.price=a.data})},e.formDetails=function(){console.log(form.number)},e.chooseAnother=function(){e.showAnotherInsurance=!0},e.checkDate=function(){""!=e.Insurance.StartDate&&""!=e.Insurance.EndDate&&(e.Insurance.StartDate>e.Insurance.EndDate?e.dateEnd=!0:e.dateEnd=!1)},e.checkDateEnd=function(){""!=e.Insurance.StartDate&&""!=e.Insurance.EndDate&&e.Insurance.StartDate>e.Insurance.EndDate&&(e.dateEnd=!0,e.dateStart=!1)},e.showInsuranceByCategory=function(a){"Home"==a&&(e.showHomeForm=!0),"Vehicle"==a&&(e.showVehicleForm=!0)},e.cancelOther=function(){e.showAnotherInsurance=!1,e.showHomeForm=!1,e.showVehicleForm=!1,e.HomeInsurance.Area="",e.HomeInsurance.Age="",e.HomeInsurance.Value=""},e.inlineOptions={customClass:o,minDate:new Date,showWeeks:!0},e.dateOptions={formatYear:"yy",minDate:new Date,startingDay:1},e.toggleMin=function(){e.inlineOptions.minDate=e.inlineOptions.minDate?null:new Date,e.dateOptions.minDate=e.inlineOptions.minDate},e.toggleMin(),e.openSd=function(){e.sd.opened=!0},e.openEd=function(){e.ed.opened=!0},e.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],e.format=e.formats[0],e.altInputFormats=["M!/d!/yyyy"],e.sd={opened:!1},e.ed={opened:!1};var u=new Date;u.setDate(u.getDate()+1);var i=new Date;i.setDate(u.getDate()+1),e.events=[{date:u,status:"full"},{date:i,status:"partially"}]}),app.controller("InsurantsController",function(e,a){e.numOfInsurants=a.numOfInsurants,e.counterForInsurants=0,e.addedInsurants=[],e.Insurant={Name:"",Surname:"",IdentNumber:"",Address:"",TelNumber:""},e.addInsurant=function(){e.addedInsurants.push(e.Insurant),e.Insurant={Name:"",Surname:"",IdentNumber:"",Address:"",TelNumber:""},e.counterForInsurants+=1},e.deleteInsurant=function(){e.addedInsurants.pop(),e.counterForInsurants-=1},e.finish=function(){}}),app.factory("RiskService",function(e){return{getRisksByCategory:function(a){return e.get("/Risk/GetRisksByCategory/"+a)},getOtherCategories:function(){return e.get("/Risk/GetOtherCategories")},getAllCategories:function(){return e.get("/Risk/GetAllCategories")},getRiskItemsForRisk:function(a){return e.get("/Risk/GetRiskItemsForRisk/"+a)},calculatePrice:function(a){return e.post("/Risk/Calculate",a)}}});