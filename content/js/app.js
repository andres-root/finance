var financeApp = angular.module('financeApp', ['ngRoute', 'financeControllers']);

financeApp.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/stocks', {
			templateUrl: 'templates/stocks.html',
			controller: 'stocksController'
		}).when('/stocks/:stockId', {
			templateUrl: 'templates/stock.html',
			controller: 'stockController'
		}).otherwise({
			redirectTo: '/stocks'
		});
	}
]);