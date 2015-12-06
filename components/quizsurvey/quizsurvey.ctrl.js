quiz.controller('QuizSurveyController', ['$scope', '$stateParams', '$state', 'apiService', function($scope, $stateParams, $state, api) {
	
	$scope.quizSurveyAnswers = {};
	
	$scope.quizSurveyAnswers.q1;
	$scope.quizSurveyAnswers.q2;
	$scope.quizSurveyAnswers.q3;
	$scope.submitted = false;
	
	$scope.submitQuizSurvey = function(){
		$scope.submitted = true;
		if($scope.quizSurvey.$valid){
			api.saveQuiz($scope.quizSurveyAnswers);
			$state.go('prototype');
		}
	};
	
}]);