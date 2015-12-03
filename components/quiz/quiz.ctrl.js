quiz.controller('QuizController', ['$scope', '$http', '$state', function($scope, $http, $state) {
	
	$scope.questions;
	$scope.count = 0;	
	$scope.score = 0;
	$scope.correct = 0;
	$scope.wrong = 0;
	$scope.wrongStreak = 0;
	$scope.correctStreak = 0;
	$scope.correctAnswer;
	
	$scope.feedback = 'positive';
	
	$scope.$watch('count', function(val){
		if(typeof $scope.questions != 'undefined'){
			$scope.question = $scope.questions[val];
			if(typeof($scope.question) == 'undefined'){
				// No more questions or other error
				$scope.endQuiz();
			}
		}
	});
	
	var getQuestions = function(){
		// Simple GET request example:
		$http({
		  method: 'GET',
		  url: 'resources/questions.json'
		}).then(function successCallback(response) {
			if(Math.random() > .5){
				$scope.feedback = 'negative';
			}
			console.log("Using "+ $scope.feedback +" feedback.");
			$scope.questions = shuffle(response.data);
			$scope.question = $scope.questions[$scope.count];
		}, function errorCallback(response) {
			console.log(response);
		});
	};
	
	var answerCorrect = function(){
		$scope.correct++;
		$scope.correctStreak++;
		$scope.wrongStreak = 0;
	};
	
	var answerWrong = function(){
		$scope.wrong++;
		$scope.wrongStreak++;
		$scope.correctStreak = 0;
	};
	
	var getCorrectAnswer = function(question){
		for (var i = 0; i < question.choices.length; i++) {
			console.log(question.choices[i]);
			if(question.choices[i].correct == true){
				return question.choices[i].answer;
			}
		}
	};
	
	$scope.selectAnswer = function(choice){
		$scope.correctAnswer = getCorrectAnswer($scope.question);
		$scope.count++;
		if(choice.correct){
			answerCorrect();
		} else {
			answerWrong();
		}
	};
	
	$scope.endQuiz = function(){
		$state.go('finish', {'count': $scope.count, 'correct': $scope.correct, 'wrong': $scope.wrong, 'score': $scope.score});
	};
	
	var shuffle = function(array) {
		var currentIndex = array.length, temporaryValue, randomIndex ;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	};
	
	getQuestions();
}]);