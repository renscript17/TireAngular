'use strict';

var removeTemplate = '<input type="button" value="remove" ng-click="removeRow($index)" />';
app.controller('tireController',  function ($scope, $http, $timeout) {

    $scope.myData = [{ brand: "Good Year", description: "GoodYear Excellence", quantity: 4, addons: "GoodYear mags" },
    ];

    $scope.gridOptions = {
        data: 'myData',
        showSelectionCheckbox: false,
        enableCellSelection: true,
        enableRowSelection: false,
        enableCellEditOnFocus: true,
        columnDefs: [{ field: 'brand', displayName: 'brand', width: 120, enableCellEdit: true }, { field: 'description', displayName: 'description', width: 120, enableCellEdit: true },
            { field: 'quantity', displayName: 'quantity', enableCellEdit: true }, { field: 'addons', displayName: 'addons', width: 120, enableCellEdit: false }, { field: 'remove', displayName: '', cellTemplate: removeTemplate }]
    };

    $scope.removeRow = function () {
        var index = this.row.rowIndex;
        $scope.gridOptions.selectItem(index, false);
        $scope.myData.splice(index, 1);
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