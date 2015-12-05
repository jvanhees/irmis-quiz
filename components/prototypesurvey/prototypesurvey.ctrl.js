quiz.controller('PrototypeSurveyController', ['$scope', '$stateParams', '$state', 'apiService', function($scope, $stateParams, $state, api) {
	
	$scope.prototypeSurveyAnswers = {};
	
	$scope.prototypeSurveyAnswers.q1;
	$scope.prototypeSurveyAnswers.q2;
	$scope.prototypeSurveyAnswers.q3;
	
	
	$scope.submitPrototypeSurvey = function(){
		api.savePrototype($scope.prototypeSurveyAnswers);
		$state.go('finish');
	};
	
}]);