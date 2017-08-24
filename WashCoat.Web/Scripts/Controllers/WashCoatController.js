var WashCoatController = function ($scope, WashCoatFactoryRef) {
    /*$scope.washCoatData = [{ name: "Moroni", age: 50 },
                 { name: "Tiancum", age: 43 },
                 { name: "Jacob", age: 27 },
                 { name: "Nephi", age: 29 },
                 { name: "Enos", age: 34 }];*/
    $scope.washCoatData = [];
    $scope.washCoatDataPopulate = function () {

        var result = WashCoatFactoryRef();
        result.then(function (data) {
            /*if (result.success) {
                $location.path('/routeOne');
            } else {
                $scope.registerForm.registrationFailure = true;
            }*/
            $scope.washCoatData = data;
        }
        
        );
    };
    $scope.gridOptions = { data: washCoatData };
    $scope.washCoatDataPopulate();
}

// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
WashCoatController.$inject = ['$scope', 'WashCoatFactory' ];