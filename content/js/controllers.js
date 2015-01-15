'use strict';

var FinanceApp = angular.module('FinanceApp', []);

FinanceApp.controller('FinanceController', function ($scope) {
	$scope.title = 'Stock Market';
	$scope.stocks = [
		{"company": "google", "name": "goog", "value": 1000.0},
		{"company": "facebook", "name": "fb", "value": 900.0},
		{"company": "twitter", "name": "tw", "value": 800.0}
	];
});