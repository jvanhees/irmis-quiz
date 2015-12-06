quiz.controller('PrototypeSurveyController', ['$scope', '$stateParams', '$state', 'apiService', function($scope, $stateParams, $state, api) {
	
	$scope.prototypeSurveyAnswers = {};
	
	$scope.prototypeSurveyAnswers.q1;
	$scope.prototypeSurveyAnswers.q2;
	$scope.prototypeSurveyAnswers.q3;
	$scope.submitted = false;
	
	$scope.submitPrototypeSurvey = function(){
		$scope.submitted = true;
		if($scope.prototypeSurvey.$valid){
			api.savePrototype($scope.prototypeSurveyAnswers);
			$state.go('finish');
		}
	};
	
}]);