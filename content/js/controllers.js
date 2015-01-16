'use strict';

var FinanceApp = angular.module('FinanceApp', []);

FinanceApp.controller('FinanceController', function ($scope) {
	$scope.title = 'Stock Market';
	$scope.stocks = [];
	$scope.orderProp = '-value';
});