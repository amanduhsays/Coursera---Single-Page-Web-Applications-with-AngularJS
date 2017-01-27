(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService'];

    function SignUpController(MenuService) {
        var $ctrl = this;

        $ctrl.isClear = -1;
        $ctrl.hasError = 0;

        $ctrl.submit = function () {
            $ctrl.isClear = 0;

            var shortName = $ctrl.user.favouriteDish;
            MenuService.getItem(shortName).then(function (response) {
                if (response.status == '200') {
                    $ctrl.isClear = 1;
                    $ctrl.hasError = 0;

                    MenuService.saveUserInfo($ctrl.user);
                    MenuService.saveMenuItem(response.data);
                }
            });
        }
    }


})();
