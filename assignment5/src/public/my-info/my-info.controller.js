(function () {
    "use strict";

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService'];

    function MyInfoController(MenuService) {
        var $ctrl = this;

        $ctrl.user = MenuService.getUserInfo();
        $ctrl.item = MenuService.getMenuItem();

        if ($ctrl.user == "" || $ctrl.item == "") {
        	$ctrl.hasInfo = false;
        } else {
        	$ctrl.hasInfo = true;
        }
    }


})();
