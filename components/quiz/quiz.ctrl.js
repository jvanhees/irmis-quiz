quiz.controller('QuizController', ['$scope', '$http', '$state', function($scope, $http, $state) {

	$scope.questions;
	$scope.count = 0;	
	$scope.score = 0;
	$scope.correct = 0;
	$scope.wrong = 0;
	
	$scope.$watch('count', function(val){
		$scope.question = $scope.questions[val];
		if(typeof($scope.question) == 'undefined'){
			// No more questions or other error
			$state.go('finish', {'count': $scope.count, 'correct': $scope.correct, 'wrong': $scope.wrong, 'score': $scope.score});
		}
	});
	
	var getQuestions = function(){
		// Simple GET request example:
		$http({
		  method: 'GET',
		  url: 'resources/questions.json'
		}).then(function successCallback(response) {
			$scope.questions = response.data;
			$scope.question = $scope.questions[$scope.count];
		}, function errorCallback(response) {
			console.log(response);
		});
	};
	
	var answerCorrect = function(){
		$scope.correct++;
	}
	
	var answerWrong = function(){
		$scope.wrong++;
	}
	
	$scope.selectAnswer = function(choice){
		$scope.count++;
		if(choice.correct){
			answerCorrect();
		} else {
			answerWrong();
		}
	}
	
	getQuestions();
}]);