(function() {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

        // Home page
            .state('home', {
            url: '/',
            templateUrl: 'templates/home.template.html'
        })

        // Categories
            .state('categories', {
            url: '/categories',
            templateUrl: 'templates/categories.template.html',
            controller: 'MenuCategoriesController as menuCategories',
            resolve: {
		      categories: ['MenuDataService', function (MenuDataService) {
		        return MenuDataService.getAllCategories();
		      }]
		    }
        })

        // Items
            .state('menuItems', {
            url: '/menu-items/{itemId}',
            templateUrl: 'templates/menu-items.template.html',
            controller: 'ItemsController as menuItems',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.itemId);
                }]
            }
        });
    }

})();