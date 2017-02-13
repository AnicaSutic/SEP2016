'use strict'
app.controller('NavbarController', ['$scope', '$rootScope', '$state', '$translate', function ($scope, $rootScope, $state, $translate) {

    $rootScope.currentLanguage = "en";

    $scope.changeCurrentLanguage = function (key) {
        $translate.use(key);
        $rootScope.currentLanguage = key;
        $rootScope.$emit('languageChanged', {});
    };

}]);