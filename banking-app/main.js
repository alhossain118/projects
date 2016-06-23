'use strict';

let app = angular.module('myApp',['ngStorage'])

app.controller('mainCtrl', function($scope,$localStorage,$sessionStorage) {
///////
  $scope.$storage = $localStorage;

  $scope.$storage = $localStorage.$default({
      counter: 0
  });

///////

  $scope.bankingAccount = [];
  $scope.total = 400;
  // console.log($scope)
$scope.addTransaction = function (){
  $scope.total = parseInt($scope.total) - ( parseInt($scope.banking.debit) || parseInt("0"))
  $scope.total = parseInt($scope.total) + ( parseInt($scope.banking.credit) || parseInt("0"))
  let newTransaction = angular.copy($scope.banking)
  $scope.bankingAccount.push(newTransaction);

}
$scope.deleteTransaction = function (transcation){
  $scope.total = $scope.total + ( parseInt(transcation.debit) || parseInt("0"))
  $scope.total = $scope.total - ( parseInt(transcation.credit) || parseInt("0"))
  $scope.bankingAccount.splice(transcation,1)
}
});
