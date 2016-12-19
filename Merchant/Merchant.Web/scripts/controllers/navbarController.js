app.controller('NavbarController', function ($scope, $state, $translate) {

    $scope.changeCurrentLanguage = function (key) {
        $translate.use(key);
    };

});