
var financeControllers = angular.module('financeControllers', []);

financeControllers.controller('StocksController', ['$scope', '$http', 
	function ($scope, $http) {
		$http.get('data.json').success(function (data){
			$scope.stocks = data;
		});
		$scope.orderProp = '-value';
	}
]);

financeControllers.controller('StockController', ['$scope' '$routeParams',
	function ($scope, $routeParams) {
		$scope.stockId = $routeParams.stockId;
	}
]);