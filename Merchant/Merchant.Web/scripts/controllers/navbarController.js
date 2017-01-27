app.controller('NavbarController', ['$scope', '$rootScope' ,'$state', '$translate', 'TranslateService', function ($scope, $rootScope, $state, $translate, TranslateService) {

    $rootScope.currentLanguage = "en";

    $scope.changeCurrentLanguage = function (key) {
        $translate.use(key);
        $rootScope.currentLanguage = key;
        $rootScope.$emit('languageChanged', {});
    };

}]);