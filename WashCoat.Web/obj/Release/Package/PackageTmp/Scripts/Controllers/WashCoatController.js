var WashCoatController = function ($scope, WashCoatFactoryRef) {
    /*$scope.washCoatData = [{ name: "Moroni", age: 50 },
                 { name: "Tiancum", age: 43 },
                 { name: "Jacob", age: 27 },
                 { name: "Nephi", age: 29 },
                 { name: "Enos", age: 34 }];*/
    $scope.washCoatData = null;
    $scope.washCoatDataPopulate = function () {

        var result = WashCoatFactoryRef.getWashCoatData();
        result.then(function (data) {
            var columnDefs = [];
            
            var target = data[0];
            for (var k in target) {
                if (target.hasOwnProperty(k)) {
                    if(String(k).length > 2){
                        columnDefs.push({ field: String(k), displayName: k , width: '150'});
                    } else {
                        columnDefs.push({ field: String(k), displayName: k, width: '80' });
                    }
                    
                }
            }
            //add button
            columnDefs.push({
                name: 'delete',
                displayName: '',
                //cellTemplate: '<button  type="button" class="btn-small" ng-click="grid.appScope.deleteEntry(row.entity)" >Delete</button> ',
                cellTemplate: '<button  type="button" class="btn-small" ng-confirm-click="Are you sure to delete this record ?" confirmed-click="grid.appScope.deleteEntry(row.entity)" >Delete</button> ',
                width: '80',
                pinnedRight:true
            });

            //data[0].foreach(function (element) {
            //    alert(element);//columnDefs.push({field})
            //});
            //$scope.washCoatData = data;
            $scope.gridOptions.data = data;
            $scope.gridOptions.columnDefs = columnDefs;
        }
        
        );
    };
    $scope.gridOptions = {
        data: null // 'washCoatData'
        , columnDefs: null// $scope.washCoatDataColumnDefs
        , enableColumnResizing: true
    };
    $scope.deleteEntry = function (row) {
        var result = WashCoatFactoryRef.deleteWashCoatEntry(row.id);
        result.then(function (data) {
            if(data){
                $scope.washCoatDataPopulate();
            }
        })
    };
    $scope.washCoatDataPopulate();
    $scope.$on('resetGrid', function (event) {
        $scope.washCoatDataPopulate();
    })
}

// The $inject property of every controller (and pretty much every other type of object in Angular) needs to be a string array equal to the controllers arguments, only as strings
WashCoatController.$inject = ['$scope', 'WashCoatFactory' ];