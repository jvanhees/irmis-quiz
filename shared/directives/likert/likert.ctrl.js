'use strict';

angular.module('quiz')
	.controller('likertCtrl', ['$scope',
		function ($scope) {
			
			var element, ngModelCtrl;
			
			$scope.value;
			
			console.log($scope);
			
			$scope.descriptions = [
				'Heel erg mee eens',
				'Gedeeltelijk mee eens',
				'Niet mee eens of oneens',
				'Gedeeltelijk mee oneens',
				'Heel erg mee oneens'
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