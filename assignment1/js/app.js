(function() {
    'use strict';
    angular.module("LunchChecker", [])
        .controller("LunchCheckerController", LunchCheckerController);

    LunchCheckerController.$inject = ['$scope'];

    function LunchCheckerController($scope) {
        $scope.checkLunch = function() {
            var inputDiv = document.getElementById("message");
            $(inputDiv).hide();

            var mealCount = 0;
            if ($scope.dishes != null) {
                mealCount = countInput($scope.dishes.split(","));
            }

            if (mealCount) {
                makeGreenInfo(inputDiv);
                if (mealCount > 0 && mealCount <= 3) {
                    $scope.message = "Enjoy!";
                } else if (mealCount > 3) {
                    $scope.message = "Too much!";
                }

            } else {
                makeRedInfo(inputDiv);
                $scope.message = "Please enter data first!";
            }

            $(inputDiv).fadeIn();
        }

        function makeGreenInfo(divBox) {
            divBox.style.color = "#2ECC71";
            divBox.style.border = "1px solid #2ECC71";
        }

        function makeRedInfo(divBox) {
            divBox.style.color = "#E74C3C";
            divBox.style.border = "1px solid #E74C3C";
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
