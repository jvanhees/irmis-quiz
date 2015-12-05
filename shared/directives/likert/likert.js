'use strict';


angular.module('quiz')
	.directive('likert', [
		function() {

			return {
				scope: {
					
				},
				replace: true,
				restrict: 'E',
				require: ['likert', 'ngModel'],
				controller: 'likertCtrl',
				templateUrl: 'shared/directives/likert/likert.html',
				link: function(scope, element, attrs, controllers) {
					
					var likertCtrl = controllers[0];
					var ngModelCtrl = controllers[1];

					likertCtrl.init(element, ngModelCtrl);
				}
			};
		}
	]);