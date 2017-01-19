(function() {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'templates/menu-items.template.html',
            bindings: {
                items: '<'
            }
        });
})();
