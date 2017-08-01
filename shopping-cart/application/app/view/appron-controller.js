(function(){
    "use strict";
    angular.module('appronApp')
           .controller('AppronCtrl',['$scope','AppronService', '$state',
                function($scope, AppronService, $state) {

				$scope.showModal = false;
				$scope.addToCart = [];
				$scope.qty = 'Qty';
				$scope.hasError = false;
				$scope.index = 0;
				
				AppronService.getAppronInfo().then(function(res) {
					$scope.products = res.data.list;					
				});
				
				$scope.updateQuantity = function(qty) {
					$scope.qty = qty;
				}
				
				$scope.onmouseover = function(idx) {
					$scope.index = idx;
				}
				
				$scope.openModal = function() {
					if($scope.qty == 'Qty') {
						$scope.hasError = true;
						return;
					}
					$scope.showModal = true;
					$scope.addToCart = [];
					var item = $scope.products[$scope.index];
					item.qty = $scope.qty;
					$scope.addToCart.push(item);
				}

        }]);
})();