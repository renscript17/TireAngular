'use strict';

var removeTemplate = '<input type="button" value="remove" ng-click="removeRow($index)" />';
app.controller('tireController', function ($scope, $timeout) {
    $scope.myData = [{ id: 7, brand: "Good Year", description: "GoodYear Excellence", quantity: 4, addons: "GoodYear mags" },
    ];

    $scope.gridOptions = {
        data: 'myData',
        showSelectionCheckbox: false,
        columnDefs: [{ field: 'id', displayName: 'id' }, { field: 'brand', displayName: 'brand', width: 120 }, { field: 'description', displayName: 'description', width: 120 },
            { field: 'quantity', displayName: 'quantity' }, { field: 'addons', displayName: 'addons', width: 120 }, { field: 'remove', displayName: '', cellTemplate: removeTemplate }]
    };

    $scope.removeRow = function () {
        var index = this.row.rowIndex;
        $scope.gridOptions.selectItem(index, false);
        $scope.myData.splice(index, 1);
    };

});