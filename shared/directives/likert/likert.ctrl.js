'use strict';

angular.module('quiz')
	.controller('likertCtrl', ['$scope',
		function ($scope) {
			
			var element, ngModelCtrl;
			
			$scope.value;
			
			$scope.descriptions = [
				'Helemaal oneens',
				'Oneens',
				'Noch eens, noch oneens',
				'Eens',
				'Helemaal eens'
			];
			
			this.init = function(_element_, _ngModelCtrl_) {
				
				element = _element_;
				ngModelCtrl = _ngModelCtrl_;
				
				
				$scope.$watch('value', function(newValue) {
					ngModelCtrl.$setViewValue(newValue);
				});

				ngModelCtrl.$render = function() {
					$scope.value = ngModelCtrl.$viewValue;
				};
				
			};
		}
	]
);