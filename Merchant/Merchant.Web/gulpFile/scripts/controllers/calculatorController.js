app.controller("CalculatorController",function(e,n,t,a){function s(){e.regions=r(e.regionsResponseData,n.currentLanguage),e.sports=r(e.sportsResponseData,n.currentLanguage),e.ages=r(e.agesResponseData,n.currentLanguage),e.values=r(e.valuesResponseData,n.currentLanguage),e.categories=r(e.categoriesResponseData,n.currentLanguage)}function r(e,n){for(var t=[],a=0;a<e.length;a++){var s={};s.Id=e[a].Id,"sr"==n?s.Name=e[a].Name_Srb:"en"==n&&(s.Name=e[a].Name),t.push(s)}return t}function o(n){var t=n.date,a=n.mode;if("day"===a)for(var s=new Date(t).setHours(0,0,0,0),r=0;r<e.events.length;r++){var o=new Date(e.events[r].date).setHours(0,0,0,0);if(s===o)return e.events[r].status}return""}e.travelRisks={},e.homeRisks={},e.isChecked=!1,e.dateStart=!1,e.dateEnd=!1,e.price=0,e.Insurance={Duration:"",Region:0,NumberOfInsurants:"",InsuredValue:0,Age:0,Sport:0,StartDate:"",EndDate:""},e.HomeInsurance={Area:"",Age:"",Value:"",EnsuredBy:0},n.$on("languageChanged",function(){s()}),t.getRisksByCategory(1).then(function(n){e.travelRisks=n.data}),t.getRiskItemsForRisk("Sport").then(function(t){e.sportsResponseData=t.data,e.sports=r(t.data,n.currentLanguage)}),t.getRiskItemsForRisk("Region").then(function(t){e.regionsResponseData=t.data,e.regions=r(t.data,n.currentLanguage)}),t.getRiskItemsForRisk("Age").then(function(t){e.agesResponseData=t.data,e.ages=r(t.data,n.currentLanguage)}),t.getRiskItemsForRisk("InsuredValue").then(function(t){e.valuesResponseData=t.data,e.values=r(t.data,n.currentLanguage)}),t.getOtherCategories().then(function(n){e.categoriesResponseData=n.data,e.categories=n.data}),e.calculate=function(){e.isChecked||(e.Insurance.Sport=0),t.calculatePrice(e.Insurance).then(function(n){e.price=n.data})},e.cancelHome=function(){n.showHomeForm=!1},e.cancelVehicle=function(){n.showVehicleForm=!1},e.chooseAnother=function(){e.showAnotherInsurance=!0},e.checkDate=function(){""!=e.Insurance.StartDate&&""!=e.Insurance.EndDate&&(e.Insurance.StartDate>e.Insurance.EndDate?e.dateEnd=!0:e.dateEnd=!1)},e.checkDateEnd=function(){""!=e.Insurance.StartDate&&""!=e.Insurance.EndDate&&e.Insurance.StartDate>e.Insurance.EndDate&&(e.dateEnd=!0,e.dateStart=!1)},e.showInsuranceByCategory=function(e){"Home"==e&&(n.showHomeForm=!0),"Vehicle"==e&&(n.showVehicleForm=!0)},e.cancelOther=function(){e.showAnotherInsurance=!1,n.showHomeForm=!1,n.showVehicleForm=!1,e.HomeInsurance.Area="",e.HomeInsurance.Age="",e.HomeInsurance.Value=""},e.inlineOptions={customClass:o,minDate:new Date,showWeeks:!0},e.dateOptions={formatYear:"yy",minDate:new Date,startingDay:1},e.toggleMin=function(){e.inlineOptions.minDate=e.inlineOptions.minDate?null:new Date,e.dateOptions.minDate=e.inlineOptions.minDate},e.toggleMin(),e.openSd=function(){e.sd.opened=!0},e.openEd=function(){e.ed.opened=!0},e.formats=["dd-MMMM-yyyy","yyyy/MM/dd","dd.MM.yyyy","shortDate"],e.format=e.formats[0],e.altInputFormats=["M!/d!/yyyy"],e.sd={opened:!1},e.ed={opened:!1};var u=new Date;u.setDate(u.getDate()+1);var i=new Date;i.setDate(u.getDate()+1),e.events=[{date:u,status:"full"},{date:i,status:"partially"}]});