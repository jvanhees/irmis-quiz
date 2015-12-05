quiz.controller('PrototypeController', ['$scope', '$http', '$state', function($scope, $http, $state) {
	$scope.feedback = quiz.feedback;
	$scope.source = 'resources/video/'+$scope.feedback+'.mp4';
}]);