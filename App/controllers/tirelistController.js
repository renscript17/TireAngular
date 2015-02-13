'use strict';
var removeTemplate = '<input type="button" value="remove" ng-click="getExternalScopes().removeRow(row)" />';
app.controller('tirelistController', [
    '$scope', function ($scope) {

        $scope.gridOptions = {};

        $scope.gridOptions.columnDefs = [
            { name: 'brand', displayName: 'brand', width: '20%' },
            { name: 'description', displayName: 'description', width: '20%' },
            { name: 'quantity', displayName: 'quantity', type: 'number', width: '10%' },
            {
                name: 'addon',
                displayName: 'addon',
                editableCellTemplate: 'ui-grid/dropdownEditor',
                width: '20%',
                cellFilter: 'mapAddon',
                editDropdownValueLabel: 'addon',
                editDropdownOptionsArray: [
                    { id: '17 inch mags', addon: '17 inch mags' },
                    { id: '18 inch mags', addon: '18 inch mags' }
                ]
            },
            {
                field: 'remove',
                displayName: '',
                cellTemplate: removeTemplate
            }
        ];


        $scope.msg = {};

        $scope.gridOptions.onRegisterApi = function (gridApi) {
            //set gridApi on scope
            $scope.gridApi = gridApi;
            gridApi.edit.on.afterCellEdit($scope, function (rowEntity, colDef, newValue, oldValue) {
                $scope.msg.lastCellEdited = 'edited row id:' + rowEntity.id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue;
                $scope.$apply();
            });
        };

        var tiredata = [
            { brand: "Good Year", description: "GoodYear Excellence", quantity: 4, addons: "GoodYear mags" },
        ];


        $scope.gridOptions.data = tiredata;

        $scope.addData = function () {
            var n = $scope.gridOptions.data.length + 1;
            $scope.gridOptions.data.push({
                "brand": "",
                "description": "",
                "quantity": 0
            });
        };

        $scope.gridOptions.removeRow = function (row) {
            var index = $scope.gridOptions.data.indexOf(row.entity);
            $scope.gridOptions.data.splice(index, 1);

        };

    }
])

.filter('mapAddon', function () {
    var addonHash = {
        1: '17 inch mags',
        2: '18 inch mags'
    };

    return function (input) {
        if (!input) {
            return '';
        } else {
            return addonHash[input];
        }
    };
});