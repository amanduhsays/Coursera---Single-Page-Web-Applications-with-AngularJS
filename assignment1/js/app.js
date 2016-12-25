(function() {
    'use strict';
    angular.module("LunchChecker", [])
        .controller("LunchCheckerController", LunchCheckerController);

    LunchCheckerController.$inject = ['$scope'];

    function LunchCheckerController($scope) {
        $scope.checkLunch = function() {
            var inputDiv = angular.element($("[ng-style]"));
            $(inputDiv).hide();

            var mealCount = 0;
            if ($scope.dishes != null) {
                mealCount = countInput($scope.dishes.split(","));
            }

            if (mealCount) {
                $scope.messageBox = {'color': '#2ECC71', 'border': '1px solid #2ECC71'};
                
                if (mealCount > 0 && mealCount <= 3) {
                    $scope.message = "Enjoy!";
                } else if (mealCount > 3) {
                    $scope.message = "Too much!";
                }

            } else {
                $scope.messageBox = {'color': '#E74C3C', 'border': '1px solid #E74C3C'};
                $scope.message = "Please enter data first!";
            }

            $(inputDiv).fadeIn();
        }

        function countInput(input) {
            var count = 0;
            for (var i = 0; i < input.length; i++) {
                if (input[i].trim() == "") {
                    count++;
                }
            }
            return input.length - count;
        }
    }

})();
