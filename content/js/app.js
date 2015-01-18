var financeApp = angular.module('financeApp', ['ngRoute', 'financeControllers']);

financeApp.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/stocks', {
			templateUrl: 'templates/stocks.html',
			controller: 'StocksController'
		}).when('/stocks/:stockId', {
			templateUrl: 'templates/stock.html',
			controller: 'StockController'
		}).otherwise({
			redirectTo: '/stocks'
		});
	}
]);