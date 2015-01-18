
var financeControllers = angular.module('financeControllers', []);

financeControllers.controller('StocksController', ['$scope', '$http', 
	function ($scope, $http) {
		$http.get('data.json').success(function (data){
			$scope.stocks = data;
		});
		$scope.orderProp = '-value';
	}
]);

financeControllers.controller('StockController', ['$scope', '$routeParams', '$http',
	function ($scope, $routeParams, $http) {
		$http.get($routeParams.stockName + '.json').success(function(data) {
			$scope.stock = data;
		});
	}]
);