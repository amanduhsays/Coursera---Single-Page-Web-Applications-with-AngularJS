(function() {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");


    MenuDataService.$inject = ['$http', '$q', 'ApiBasePath'];

    function MenuDataService($http, $q, ApiBasePath) {
        var service = this;

        service.getAllCategories = function() {
            var def = $q.defer();

            $http({
                method: "GET",
                url: (ApiBasePath + "categories.json")
            }).then(function(response) {
                 def.resolve(response.data);
            }); 

            return def.promise;
        }

        service.getItemsForCategory = function(categoryShortName) {
        	var def = $q.defer();

            $http({
                method: "GET",
                url: (ApiBasePath + "menu_items.json?category=" + categoryShortName)
            }).then(function(response) {
                def.resolve(response.data);
            });

            return def.promise;
        }
    }

})();
