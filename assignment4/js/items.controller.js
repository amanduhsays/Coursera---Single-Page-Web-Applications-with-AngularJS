(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    // 'item' is injected through state's resolve
    ItemsController.$inject = ['items']

    function ItemsController(items) {
        var menuItems = this;

        menuItems.header = items.category;
        menuItems.items = items.menu_items;
    }

})();
