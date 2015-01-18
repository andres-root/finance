
var financeControllers = angular.module('financeControllers', []);

financeControllers.controller('StocksController', function ($scope, $http) {
	$scope.title = 'Stock Market';
	$http.get('data.json').success(function (data) {
		$scope.stocks = data;
	});
	$scope.orderProp = '-value';
});