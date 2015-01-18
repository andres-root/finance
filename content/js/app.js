var financeApp = angular.module('financeApp', ['ngRoute', 'financeControllers']);

financeApp.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/stocks', {
			templateUrl: 'partials/stocks.html',
			controller: 'StocksController'
		}).when('/stocks/:stockId', {
			templateUrl: 'partials/stock.html',
			controller: 'StockController'
		}).otherwise({
			redirectTo: '/stocks'
		});
	}
]);