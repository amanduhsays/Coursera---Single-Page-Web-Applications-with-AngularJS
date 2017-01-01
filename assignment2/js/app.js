(function() {
    'use strict';

    var app = angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .provider('ShoppingListCheckOffService', ShoppingListCheckOffServiceProvider)
        .config(Config);



    Config.$inject = ['ShoppingListCheckOffServiceProvider'];

    function Config(ShoppingListCheckOffServiceProvider) {
        ShoppingListCheckOffServiceProvider.defaults.toBuyItems = [
            { name: 'Asparagus', quantity: '1' },
            { name: 'Brocolli', quantity: '2' },
            { name: 'Carrots', quantity: '3' },
            { name: 'Cauliflower', quantity: '4' },
            { name: 'Celery', quantity: '5' },
            { name: 'Corn', quantity: '6' },
            { name: 'Lettuce', quantity: '7' },
            { name: 'Onions', quantity: '8' },
            { name: 'Spinach', quantity: '9' },
            { name: 'Tomatoes', quantity: '10' }
        ];
    }



    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var controller = this;

        controller.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

        controller.moveItem = function(itemIndex) {
            ShoppingListCheckOffService.moveItem(itemIndex);
        };

         controller.isToBuyListEmpty = function() {
             return ShoppingListCheckOffService.isToBuyListEmpty();
        }
    }



    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];

    function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
        var controller = this;

        controller.boughtItems = ShoppingListCheckOffService.getBoughtItems();

        controller.isBoughtListEmpty = function() {
             return ShoppingListCheckOffService.isBoughtListEmpty();
        }
    }



    function ShoppingListCheckOffService(itemsArray) {
        var service = this;
        var toBuyItems = itemsArray;
        var boughtItems = [];

        service.moveItem = function(itemIndex) {
            var movingItem = toBuyItems[itemIndex];
            toBuyItems.splice(itemIndex, 1);
            boughtItems.push(movingItem);
        }

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getBoughtItems = function() {
            return boughtItems;
        };

        service.isToBuyListEmpty = function () {
            return service.getToBuyItems().length === 0 ? true : false;
        };

        service.isBoughtListEmpty = function () {
            return service.getBoughtItems().length === 0 ? true : false;
        };
    }



    function ShoppingListCheckOffServiceProvider() {
        var provider = this;

        provider.defaults = {
            toBuyItems: [
                { name: 'Air', quantity: '1 Gallon' }
            ]
        };

        provider.$get = function() {
            var shoppingList = new ShoppingListCheckOffService(provider.defaults.toBuyItems);

            return shoppingList;
        };
    }

})();
