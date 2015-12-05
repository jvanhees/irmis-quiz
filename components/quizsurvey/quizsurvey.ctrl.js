quiz.controller('QuizSurveyController', ['$scope', '$stateParams', '$state', 'apiService', function($scope, $stateParams, $state, api) {
	
	$scope.quizSurveyAnswers = {};
	
	$scope.quizSurveyAnswers.q1;
	$scope.quizSurveyAnswers.q2;
	$scope.quizSurveyAnswers.q3;
	
	
	$scope.submitQuizSurvey = function(){
		api.saveQuiz($scope.quizSurveyAnswers);
		$state.go('prototype');
	};
	
}]);