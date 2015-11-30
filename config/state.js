quiz.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/home");
	//
	// Now set up the states
	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "components/home/home.html"
	})
	.state('quiz', {
		url: "/quiz",
		templateUrl: "components/quiz/quiz.html",
		controller: "QuizController"
	})
	.state('quiz.question', {
		url: "/question/{questionNumber:int}",
		templateUrl: "components/quiz/question.html",
		controller: "QuestionController"
	});
});