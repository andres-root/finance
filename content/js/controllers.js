'use strict';

var financeApp = angular.module('FinanceApp', []);

financeApp.controller('FinanceController', function ($scope, $http) {
	$scope.title = 'Stock Market';
	$http.get('data.json').success(function (data) {
		$scope.stocks = data;
	});
	$scope.orderProp = '-value';
});