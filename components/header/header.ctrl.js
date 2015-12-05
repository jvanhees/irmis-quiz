quiz.controller('HeaderCtrl', ['$scope', '$rootScope', '$stateParams', '$state', function($scope, $rootScope, $stateParams, $state) {
	$rootScope.progress = '0%';
	$scope.progress = $rootScope.progress;
}]);