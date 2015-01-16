'use strict';

var FinanceApp = angular.module('FinanceApp', []);

FinanceApp.controller('FinanceController', function ($scope, $http) {
	$scope.title = 'Stock Market';
	$http.get('data.json').sucess(function (data) {
		$scope.stocks = data;
	});
	$scope.orderProp = '-value';
});