'use strict';

var removeTemplate = '<input type="button" value="remove" ng-click="removeRow($index)" />';
app.controller('tireController', function ($scope, $timeout) {
    $scope.myData = [{ id: 7, brand: "Good Year", description: "GoodYear Excellence", quantity: 4, addons: "GoodYear mags" },
    ];

    $scope.gridOptions = {
        data: 'myData',
        showSelectionCheckbox: false,
        enableCellSelection: true,
        enableRowSelection: false,
        enableCellEditOnFocus: true,
        columnDefs: [{ field: 'id', displayName: 'id', enableCellEdit: false }, { field: 'brand', displayName: 'brand', width: 120, enableCellEdit: true }, { field: 'description', displayName: 'description', width: 120, enableCellEdit: true },
            { field: 'quantity', displayName: 'quantity', enableCellEdit: true }, { field: 'addons', displayName: 'addons', width: 120, enableCellEdit: false }, { field: 'remove', displayName: '', cellTemplate: removeTemplate }]
    };

    $scope.removeRow = function () {
        var index = this.row.rowIndex;
        $scope.gridOptions.selectItem(index, false);
        $scope.myData.splice(index, 1);
    };

});