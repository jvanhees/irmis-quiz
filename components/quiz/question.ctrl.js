quiz.controller('QuestionController', ['$scope', '$stateParams', function($scope, $stateParams) {
	$scope.questionNumber = $stateParams.questionNumber;
}]);