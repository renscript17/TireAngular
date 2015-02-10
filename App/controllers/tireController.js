'use strict';

var removeTemplate = '<input type="button" value="remove" ng-click="removeRow($index)" />';
var dropdownMags = '<select  ng-model="tire.addons">' +
    '<option value="15inch">15 inches mags</option>' +
    '<option value="17inch">17 inches mags</option>' +
    '<option value="18inch">18 inches mags</option>' +
    '</select>';
var quantityTemplate = '<input type="number" min="0" ng-model="tire.quantity" />';
app.controller('tireController',  function ($scope, $http, $timeout) {

    $scope.myData = [{ brand: "Good Year", description: "GoodYear Excellence", quantity: 4, addons: "15inch" },
    ];

    $scope.gridOptions = {
        data: 'myData',
        showSelectionCheckbox: false,
        enableCellSelection: true,
        enableRowSelection: false,
        enableCellEditOnFocus: true,
        columnDefs: [{ field: 'brand', displayName: 'brand', width: 120, enableCellEdit: true }, { field: 'description', displayName: 'description', width: 120, enableCellEdit: true },
            { field: 'quantity', displayName: 'quantity', enableCellEdit: true, width: 150, cellTemplate: quantityTemplate }, { field: 'addons', displayName: 'addons', width: 150, enableCellEdit: true, cellTemplate: dropdownMags }, { field: 'remove', displayName: '', cellTemplate: removeTemplate }]
    };

    $scope.removeRow = function () {
        var index = this.row.rowIndex;
        $scope.gridOptions.selectItem(index, false);
        $scope.myData.splice(index, 1);
    };

    $scope.addRow = function () {
        $scope.myData.push({ brand: '', description: '', quantity: 0, addons: '' });
    };

    $scope.tire = {};

    $scope.submitData = function (tire, resultVarName) {

        $http.post("../api/FormSubmit", tire)
          .success(function (data) {
              $scope.myData.push(
                  { brand: data.brand, description: data.description, quantity: data.quantity, addons: data.addons }
              );

              $scope.gridOptions.data($scope.myData);

          })
          .error(function (data, status, headers) {
              $scope[resultVarName] = "SUBMIT ERROR";
        });


    };

});